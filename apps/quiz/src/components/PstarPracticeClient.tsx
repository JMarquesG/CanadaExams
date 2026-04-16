"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { pstarQuestions, PstarQuestion } from "@/data/pstar-questions";
import Link from "next/link";
import {
  recordPstarQuestionView,
  recordPstarQuestionAnswer,
  startPstarSession,
  finishPstarSession,
  updatePstarSessionAnswer,
  getPstarSession,
} from "@/lib/stats";
import { getAimPdfUrl } from "@/lib/aim-links";

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type AnswerRecord = { selected: number; correct: boolean };
type ReviewFilter = "all" | "correct" | "incorrect";

export default function PstarPracticeClient({ sessionId: resumeSessionId, weakIds }: { sessionId?: string; weakIds?: number[] }) {
  const [quiz, setQuiz] = useState<PstarQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerRecord>>({});
  const [visited, setVisited] = useState<Set<number>>(new Set([0]));
  const [done, setDone] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>("all");
  const [reviewIndex, setReviewIndex] = useState<number | null>(null);

  const sessionIdRef = useRef<string | null>(null);

  useEffect(() => {
    // Resume or review an existing session
    if (resumeSessionId) {
      const session = getPstarSession(resumeSessionId);
      if (session) {
        // Reconstruct questions from session questionIds
        const qMap = new Map(pstarQuestions.map((q) => [q.id, q]));
        const restored = session.questionIds.map((id) => qMap.get(id)).filter(Boolean) as PstarQuestion[];
        if (restored.length > 0) {
          setQuiz(restored);
          sessionIdRef.current = session.id;

          // Restore answers from session
          if (session.questionAnswers) {
            const restoredAnswers: Record<number, AnswerRecord> = {};
            const restoredVisited = new Set<number>([0]);
            for (const [idxStr, sa] of Object.entries(session.questionAnswers)) {
              const idx = Number(idxStr);
              restoredAnswers[idx] = { selected: sa.selectedOption, correct: sa.correct };
              restoredVisited.add(idx);
            }
            setAnswers(restoredAnswers);
            setVisited(restoredVisited);

            if (session.finishedAt) {
              // Review mode for completed session
              setDone(true);
            } else {
              // Resume: jump to first unanswered question
              const firstUnanswered = restored.findIndex((_, idx) => !restoredAnswers[idx]);
              setCurrentIndex(firstUnanswered >= 0 ? firstUnanswered : 0);
            }
          }
          return;
        }
      }
    }

    // New session
    let pool = pstarQuestions;
    if (weakIds && weakIds.length > 0) {
      const idSet = new Set(weakIds);
      // Maintain weak-first order, don't shuffle
      pool = weakIds.map((id) => pstarQuestions.find((q) => q.id === id)).filter(Boolean) as PstarQuestion[];
    }
    const qs = weakIds && weakIds.length > 0 ? pool : shuffleArray(pool);
    setQuiz(qs);
    sessionIdRef.current = startPstarSession(
      "practice",
      qs.map((q) => q.id)
    );
  }, [resumeSessionId, weakIds]);

  // Record view for first question once quiz loads
  useEffect(() => {
    if (quiz.length > 0) {
      recordPstarQuestionView(quiz[0].id);
    }
  }, [quiz]);

  const goTo = useCallback(
    (idx: number) => {
      setCurrentIndex(idx);
      setVisited((prev) => {
        const next = new Set(prev);
        if (!next.has(idx) && quiz[idx]) {
          recordPstarQuestionView(quiz[idx].id);
        }
        next.add(idx);
        return next;
      });
    },
    [quiz]
  );

  const handleRestart = () => {
    const shuffled = shuffleArray(pstarQuestions);
    setQuiz(shuffled);
    setCurrentIndex(0);
    setAnswers({});
    setVisited(new Set([0]));
    setDone(false);
    setReviewFilter("all");
    setReviewIndex(null);
    sessionIdRef.current = startPstarSession(
      "practice",
      shuffled.map((q) => q.id)
    );
  };

  if (quiz.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-400 text-sm">Loading practice session…</div>
      </div>
    );
  }

  // ─── Question navigator grid ─────────────────────────────────────────
  const QuestionGrid = ({
    onSelect,
    activeIndex,
    showResults,
    filteredIndices,
  }: {
    onSelect: (idx: number) => void;
    activeIndex: number | null;
    showResults: boolean;
    filteredIndices?: Set<number>;
  }) => (
    <div className="flex flex-wrap gap-1.5">
      {quiz.map((_, idx) => {
        if (filteredIndices && !filteredIndices.has(idx)) return null;
        const a = answers[idx];
        const isCurrent = idx === activeIndex;

        let bg: string;
        if (isCurrent) {
          bg = "bg-indigo-700 text-white ring-2 ring-indigo-300";
        } else if (a) {
          bg = a.correct
            ? "bg-green-100 text-green-800 border border-green-300 hover:bg-green-200"
            : "bg-red-100 text-red-800 border border-red-300 hover:bg-red-200";
        } else if (showResults) {
          bg = "bg-gray-100 text-gray-400";
        } else if (visited.has(idx)) {
          bg = "bg-gray-200 text-gray-600 hover:bg-gray-300";
        } else {
          bg = "bg-white text-gray-400 border border-gray-200 hover:bg-gray-100";
        }

        return (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`w-8 h-8 text-xs rounded font-medium transition-colors ${bg}`}
            title={a ? (a.correct ? "Correct" : "Incorrect") : visited.has(idx) ? "Visited" : "Not visited"}
          >
            {idx + 1}
          </button>
        );
      })}
    </div>
  );

  // ─── Report mode ──────────────────────────────────────────────────────
  if (done) {
    const total = Object.keys(answers).length;
    const correct = Object.values(answers).filter((a) => a.correct).length;
    const incorrect = total - correct;
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

    const filteredSet = new Set(
      quiz
        .map((_, idx) => idx)
        .filter((idx) => {
          const a = answers[idx];
          if (!a) return reviewFilter === "all";
          if (reviewFilter === "correct") return a.correct;
          if (reviewFilter === "incorrect") return !a.correct;
          return true;
        })
    );

    const reviewQ = reviewIndex !== null ? quiz[reviewIndex] : null;
    const reviewA = reviewIndex !== null ? answers[reviewIndex] : undefined;

    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-indigo-800 text-white py-6 px-4">
          <div className="max-w-3xl mx-auto flex items-center gap-4">
            <Link href="/pstar" className="text-indigo-300 hover:text-white text-sm">
              ← Home
            </Link>
            <h1 className="text-xl font-semibold">PSTAR Practice — Report</h1>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-10">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center mb-8">
            <div className={`text-6xl font-bold mb-2 ${pct >= 90 ? "text-emerald-600" : "text-amber-500"}`}>
              {pct}%
            </div>
            <p className="text-gray-600 mb-2">{correct} correct out of {total} answered</p>
            <div className="flex gap-4 justify-center text-sm mb-6">
              <span className="text-green-600 font-medium">✓ {correct} correct</span>
              <span className="text-red-600 font-medium">✗ {incorrect} incorrect</span>
              {total < quiz.length && (
                <span className="text-gray-400">— {quiz.length - total} skipped</span>
              )}
            </div>
            <div className="flex gap-3 justify-center">
              <button
                onClick={handleRestart}
                className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Practice Again
              </button>
              <Link
                href="/pstar"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Home
              </Link>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 mb-4">
            {(
              [
                { key: "all", label: `All (${total})` },
                { key: "incorrect", label: `Incorrect (${incorrect})` },
                { key: "correct", label: `Correct (${correct})` },
              ] as { key: ReviewFilter; label: string }[]
            ).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => { setReviewFilter(key); setReviewIndex(null); }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  reviewFilter === key
                    ? key === "incorrect"
                      ? "bg-red-600 text-white"
                      : key === "correct"
                      ? "bg-green-600 text-white"
                      : "bg-indigo-700 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
            <p className="text-xs text-gray-500 mb-3 font-medium">
              Click a question to review — <span className="text-green-600">■</span> correct{" "}
              <span className="text-red-600">■</span> incorrect{" "}
              <span className="text-gray-400">■</span> not answered
            </p>
            <QuestionGrid onSelect={(idx) => setReviewIndex(idx)} activeIndex={reviewIndex} showResults={true} filteredIndices={filteredSet} />
          </div>

          {reviewQ && reviewA && (
            <div className={`bg-white rounded-lg border-2 p-6 mb-6 ${reviewA.correct ? "border-green-300" : "border-red-300"}`}>
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-sm font-bold ${reviewA.correct ? "text-green-600" : "text-red-600"}`}>
                  {reviewA.correct ? "✓ Correct" : "✗ Incorrect"} — Q{reviewIndex! + 1}
                </span>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                  {reviewQ.section}
                </span>
              </div>
              <p className="text-gray-800 font-medium text-sm leading-relaxed whitespace-pre-line mb-4">
                {reviewQ.question}
              </p>
              <div className="space-y-2 mb-4">
                {reviewQ.options.map((opt) => {
                  const isUserChoice = reviewA.selected === opt.id;
                  const isCorrectOpt = opt.id === reviewQ.correctAnswer;
                  let cls = "text-sm px-3 py-2 rounded border";
                  if (isCorrectOpt) cls += " bg-green-50 border-green-300 text-green-800 font-medium";
                  else if (isUserChoice) cls += " bg-red-50 border-red-300 text-red-700 line-through";
                  else cls += " bg-white border-gray-100 text-gray-500";
                  return (
                    <div key={opt.id} className={cls}>
                      {isCorrectOpt ? "✓" : isUserChoice ? "✗" : " "} ({opt.id}) {opt.text}
                    </div>
                  );
                })}
              </div>
              {reviewQ.reference && (
                <div className="flex items-center gap-3 flex-wrap">
                  <p className="text-xs text-gray-400">Reference: {reviewQ.reference}</p>
                  {(() => { const link = getAimPdfUrl(reviewQ.reference); return link ? (<a href={link.url} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 hover:underline">{link.label} PDF</a>) : null; })()}
                </div>
              )}
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => {
                    const arr = [...filteredSet].sort((a, b) => a - b);
                    const pos = arr.indexOf(reviewIndex!);
                    if (pos > 0) setReviewIndex(arr[pos - 1]);
                  }}
                  disabled={[...filteredSet].sort((a, b) => a - b).indexOf(reviewIndex!) <= 0}
                  className="px-3 py-1.5 text-xs text-gray-600 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => {
                    const arr = [...filteredSet].sort((a, b) => a - b);
                    const pos = arr.indexOf(reviewIndex!);
                    if (pos < arr.length - 1) setReviewIndex(arr[pos + 1]);
                  }}
                  disabled={(() => {
                    const arr = [...filteredSet].sort((a, b) => a - b);
                    return arr.indexOf(reviewIndex!) >= arr.length - 1;
                  })()}
                  className="px-3 py-1.5 text-xs text-gray-600 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {reviewIndex !== null && !reviewA && (
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-bold text-gray-400">— Skipped — Q{reviewIndex + 1}</span>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{reviewQ?.section}</span>
              </div>
              <p className="text-gray-800 font-medium text-sm leading-relaxed whitespace-pre-line mb-4">
                {quiz[reviewIndex].question}
              </p>
              <p className="text-xs text-green-700">
                Correct answer: ({quiz[reviewIndex].correctAnswer}){" "}
                {quiz[reviewIndex].options.find((o) => o.id === quiz[reviewIndex].correctAnswer)?.text}
              </p>
            </div>
          )}

          {reviewIndex === null && (
            <>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Session Review</h2>
              <div className="space-y-3">
                {quiz.map((q, idx) => {
                  if (!filteredSet.has(idx)) return null;
                  const a = answers[idx];
                  if (!a) return null;
                  return (
                    <button
                      key={q.id}
                      onClick={() => setReviewIndex(idx)}
                      className={`w-full text-left bg-white rounded-lg border p-4 hover:shadow-sm transition-shadow ${
                        a.correct ? "border-green-200" : "border-red-200"
                      }`}
                    >
                      <div className="flex items-start gap-2 mb-1">
                        <span className={`text-sm font-medium shrink-0 ${a.correct ? "text-green-600" : "text-red-600"}`}>
                          {a.correct ? "✓" : "✗"} Q{idx + 1}
                        </span>
                        <p className="text-sm text-gray-700 flex-1">{q.question.split("\n")[0]}</p>
                      </div>
                      {!a.correct && (
                        <p className="text-xs text-red-500 ml-6">
                          Your answer: {q.options.find((o) => o.id === a.selected)?.text}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </main>
      </div>
    );
  }

  // ─── Active practice ──────────────────────────────────────────────────
  const current = quiz[currentIndex];
  const currentAnswer = answers[currentIndex];
  const isRevealed = !!currentAnswer;
  const isCorrect = isRevealed && currentAnswer.correct;

  const handleSelect = (optionId: number) => {
    if (isRevealed) return;
    const correct = optionId === current.correctAnswer;
    setAnswers((prev) => ({
      ...prev,
      [currentIndex]: { selected: optionId, correct },
    }));
    recordPstarQuestionAnswer(current.id, correct);
    if (sessionIdRef.current) {
      updatePstarSessionAnswer(sessionIdRef.current, currentIndex, {
        questionId: current.id,
        selectedOption: optionId,
        correct,
      });
    }
    if (correct) {
      setTimeout(() => handleNext(), 300);
    }
  };

  const handleNext = () => {
    if (currentIndex < quiz.length - 1) {
      goTo(currentIndex + 1);
    } else {
      const total = Object.keys(answers).length;
      const correctCount = Object.values(answers).filter((a) => a.correct).length;
      if (sessionIdRef.current) {
        finishPstarSession(sessionIdRef.current, total, correctCount);
      }
      setDone(true);
    }
  };

  const answeredCount = Object.keys(answers).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-indigo-800 text-white py-4 px-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/pstar" className="text-indigo-300 hover:text-white text-sm">
              ← Home
            </Link>
            <span className="text-indigo-500">|</span>
            <span className="text-sm text-indigo-200 font-medium">{weakIds && weakIds.length > 0 ? "🎯 Weakest Questions" : "⚡ PSTAR Practice"}</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-indigo-200">
            <span>{answeredCount}/{quiz.length} answered</span>
            <span className="font-mono">{currentIndex + 1}/{quiz.length}</span>
          </div>
        </div>
      </header>

      <div className="bg-indigo-900 h-1">
        <div
          className="bg-indigo-400 h-1 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / quiz.length) * 100}%` }}
        />
      </div>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
          <p className="text-xs text-gray-500 mb-3 font-medium">
            Jump to question — <span className="text-green-600">■</span> correct{" "}
            <span className="text-red-600">■</span> incorrect{" "}
            <span className="text-gray-400">■</span> visited{" "}
            <span className="text-gray-300">□</span> not visited
          </p>
          <QuestionGrid onSelect={goTo} activeIndex={currentIndex} showResults={false} />
        </div>

        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs font-medium text-indigo-700 bg-indigo-100 px-2 py-1 rounded">
            {current.section} — Q{current.id}
          </span>
          <span className="text-xs text-gray-400 italic">Select an answer for instant feedback</span>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <p className="text-gray-800 font-medium text-base leading-relaxed whitespace-pre-line">
            {current.question}
          </p>
          {current.images && current.images.length > 0 && (
            <div className="mt-4 space-y-3">
              {current.images.map((img, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                  <img src={img.src} alt={img.alt} className="w-full h-auto cursor-pointer" onClick={() => window.open(img.src, '_blank')} title="Click to open full size" />
                  <p className="text-xs text-gray-500 px-3 py-1.5 bg-gray-50">{img.alt}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-3 mb-6">
          {current.options.map((option) => {
            const isSelected = currentAnswer?.selected === option.id;
            const isCorrectOption = option.id === current.correctAnswer;

            let style = "bg-white border-gray-200 text-gray-700 hover:border-indigo-400 hover:bg-indigo-50 cursor-pointer";
            if (isRevealed) {
              if (isCorrectOption) style = "bg-green-50 border-green-400 text-green-800 cursor-default";
              else if (isSelected) style = "bg-red-50 border-red-400 text-red-700 cursor-default";
              else style = "bg-white border-gray-200 text-gray-400 cursor-default";
            }

            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                disabled={isRevealed}
                className={`w-full text-left rounded-lg border-2 p-4 transition-all text-sm ${style}`}
              >
                <span className="font-semibold mr-2">({option.id})</span>
                {option.text}
                {isRevealed && isCorrectOption && <span className="ml-2 text-green-600 font-bold">✓</span>}
                {isRevealed && isSelected && !isCorrectOption && <span className="ml-2 text-red-500 font-bold">✗</span>}
              </button>
            );
          })}
        </div>

        {isRevealed && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-sm font-bold ${isCorrect ? "text-green-700" : "text-red-600"}`}>
                {isCorrect ? "Correct!" : "Incorrect"}
              </span>
              {!isCorrect && (
                <span className="text-sm text-gray-500">
                  — Correct answer:{" "}
                  <strong className="text-gray-700">
                    ({current.correctAnswer}) {current.options.find((o) => o.id === current.correctAnswer)?.text}
                  </strong>
                </span>
              )}
            </div>
            {current.explanation && (
              <p className="text-sm text-gray-600 mt-2">{current.explanation}</p>
            )}
            {current.reference && (
              <div className="flex items-center gap-3 flex-wrap border-t border-gray-200 pt-3 mt-1">
                <span className="text-xs text-gray-400">Reference: {current.reference}</span>
                {(() => { const link = getAimPdfUrl(current.reference); return link ? (<a href={link.url} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 hover:underline">{link.label} PDF</a>) : null; })()}
              </div>
            )}
          </div>
        )}

        <div className="flex items-center justify-between">
          <button
            onClick={() => goTo(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            ← Previous
          </button>
          {isRevealed && (
            <button
              onClick={handleNext}
              className="px-5 py-2 text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 rounded-lg transition-colors"
            >
              {currentIndex < quiz.length - 1 ? "Next Question →" : "Finish Session"}
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
