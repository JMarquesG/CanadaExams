"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { questions, Question } from "@/data/questions";
import Link from "next/link";
import {
  recordQuestionView,
  recordQuestionAnswer,
  startSession,
  finishSession,
  updateSessionAnswer,
  getSession,
} from "@/lib/stats";

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

export default function PracticeClient({ sessionId: resumeSessionId }: { sessionId?: string }) {
  const [quiz, setQuiz] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerRecord>>({});
  const [visited, setVisited] = useState<Set<number>>(new Set([0]));
  const [done, setDone] = useState(false);

  // Report mode state
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>("all");
  const [reviewIndex, setReviewIndex] = useState<number | null>(null);

  const sessionIdRef = useRef<string | null>(null);

  useEffect(() => {
    // Resume or review an existing session
    if (resumeSessionId) {
      const session = getSession(resumeSessionId);
      if (session) {
        const qMap = new Map(questions.map((q) => [q.id, q]));
        const restored = session.questionIds.map((id) => qMap.get(id)).filter(Boolean) as Question[];
        if (restored.length > 0) {
          setQuiz(restored);
          sessionIdRef.current = session.id;

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
              setDone(true);
            } else {
              const firstUnanswered = restored.findIndex((_, idx) => !restoredAnswers[idx]);
              setCurrentIndex(firstUnanswered >= 0 ? firstUnanswered : 0);
            }
          }
          return;
        }
      }
    }

    // New session
    const shuffled = shuffleArray(questions);
    setQuiz(shuffled);
    sessionIdRef.current = startSession(
      "practice",
      shuffled.map((q) => q.id)
    );
  }, [resumeSessionId]);

  // Track visited questions
  const goTo = useCallback(
    (idx: number) => {
      setCurrentIndex(idx);
      setVisited((prev) => {
        const next = new Set(prev);
        if (!next.has(idx) && quiz[idx]) {
          recordQuestionView(quiz[idx].id);
        }
        next.add(idx);
        return next;
      });
    },
    [quiz]
  );

  // Record view for first question once quiz loads
  useEffect(() => {
    if (quiz.length > 0) {
      recordQuestionView(quiz[0].id);
    }
  }, [quiz]);

  const handleRestart = () => {
    const shuffled = shuffleArray(questions);
    setQuiz(shuffled);
    setCurrentIndex(0);
    setAnswers({});
    setVisited(new Set([0]));
    setDone(false);
    setReviewFilter("all");
    setReviewIndex(null);
    sessionIdRef.current = startSession(
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

  // ─── Question navigator grid (reused in active + report) ───────────────────
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
          bg = "bg-emerald-700 text-white ring-2 ring-emerald-300";
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
            title={
              a
                ? a.correct
                  ? "Correct"
                  : "Incorrect"
                : visited.has(idx)
                ? "Visited"
                : "Not visited"
            }
          >
            {(filteredIndices ? [...filteredIndices].indexOf(idx) + 1 > 0 : true)
              ? idx + 1
              : idx + 1}
          </button>
        );
      })}
    </div>
  );

  // ─── Report mode ──────────────────────────────────────────────────────────
  if (done) {
    const total = Object.keys(answers).length;
    const correct = Object.values(answers).filter((a) => a.correct).length;
    const incorrect = total - correct;
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

    // Filtered indices for the grid
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

    // Currently reviewed question
    const reviewQ =
      reviewIndex !== null ? quiz[reviewIndex] : null;
    const reviewA =
      reviewIndex !== null ? answers[reviewIndex] : undefined;

    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-emerald-800 text-white py-6 px-4">
          <div className="max-w-3xl mx-auto flex items-center gap-4">
            <Link href="/helicopter" className="text-emerald-300 hover:text-white text-sm">
              ← Home
            </Link>
            <h1 className="text-xl font-semibold">Practice — Report</h1>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-10">
          {/* Score card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center mb-8">
            <div
              className={`text-6xl font-bold mb-2 ${
                pct >= 70 ? "text-emerald-600" : "text-amber-500"
              }`}
            >
              {pct}%
            </div>
            <p className="text-gray-600 mb-2">
              {correct} correct out of {total} answered
            </p>
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
                className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Practice Again
              </button>
              <Link
                href="/helicopter"
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
                onClick={() => {
                  setReviewFilter(key);
                  setReviewIndex(null);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  reviewFilter === key
                    ? key === "incorrect"
                      ? "bg-red-600 text-white"
                      : key === "correct"
                      ? "bg-green-600 text-white"
                      : "bg-emerald-700 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Question navigator grid */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
            <p className="text-xs text-gray-500 mb-3 font-medium">
              Click a question to review — <span className="text-green-600">■</span> correct{" "}
              <span className="text-red-600">■</span> incorrect{" "}
              <span className="text-gray-400">■</span> not answered
            </p>
            <QuestionGrid
              onSelect={(idx) => setReviewIndex(idx)}
              activeIndex={reviewIndex}
              showResults={true}
              filteredIndices={filteredSet}
            />
          </div>

          {/* Single question review */}
          {reviewQ && reviewA && (
            <div
              className={`bg-white rounded-lg border-2 p-6 mb-6 ${
                reviewA.correct ? "border-green-300" : "border-red-300"
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`text-sm font-bold ${
                    reviewA.correct ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {reviewA.correct ? "✓ Correct" : "✗ Incorrect"} — Q
                  {reviewIndex! + 1}
                </span>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                  {reviewQ.section}
                </span>
              </div>

              <p className="text-gray-800 font-medium text-sm leading-relaxed whitespace-pre-line mb-4">
                {reviewQ.question}
              </p>
              {reviewQ.images && reviewQ.images.length > 0 && (
                <div className="mb-4 space-y-3">
                  {reviewQ.images.map((img, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-auto cursor-pointer"
                        onClick={() => window.open(img.src, '_blank')}
                        title="Click to open full size"
                      />
                      <p className="text-xs text-gray-500 px-3 py-1.5 bg-gray-50">{img.alt}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-2 mb-4">
                {reviewQ.options.map((opt) => {
                  const isUserChoice = reviewA.selected === opt.id;
                  const isCorrectOpt = opt.id === reviewQ.correctAnswer;
                  let cls =
                    "text-sm px-3 py-2 rounded border";
                  if (isCorrectOpt)
                    cls += " bg-green-50 border-green-300 text-green-800 font-medium";
                  else if (isUserChoice)
                    cls += " bg-red-50 border-red-300 text-red-700 line-through";
                  else cls += " bg-white border-gray-100 text-gray-500";

                  return (
                    <div key={opt.id} className={cls}>
                      {isCorrectOpt ? "✓" : isUserChoice ? "✗" : " "}{" "}
                      ({opt.id}) {opt.text}
                    </div>
                  );
                })}
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  {reviewQ.explanation}
                </p>
                <div className="flex items-center gap-4 flex-wrap">
                  {reviewQ.aimReference && (
                    <span className="text-xs text-gray-400">
                      📖 {reviewQ.aimReference}
                    </span>
                  )}
                  <a
                    href="/pdfs/aim-2025-2_access_en.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline"
                  >
                    Open TC AIM PDF ↗
                  </a>
                  <a
                    href="/pdfs/examcanada.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline"
                  >
                    Open Exam PDF ↗
                  </a>
                </div>
              </div>

              {/* Navigate between filtered questions */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => {
                    const arr = [...filteredSet].sort((a, b) => a - b);
                    const pos = arr.indexOf(reviewIndex!);
                    if (pos > 0) setReviewIndex(arr[pos - 1]);
                  }}
                  disabled={
                    [...filteredSet].sort((a, b) => a - b).indexOf(reviewIndex!) <=
                    0
                  }
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
                  disabled={
                    (() => {
                      const arr = [...filteredSet].sort((a, b) => a - b);
                      return arr.indexOf(reviewIndex!) >= arr.length - 1;
                    })()
                  }
                  className="px-3 py-1.5 text-xs text-gray-600 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {/* If reviewing a question that wasn't answered */}
          {reviewIndex !== null && !reviewA && (
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-bold text-gray-400">
                  — Skipped — Q{reviewIndex + 1}
                </span>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                  {reviewQ?.section}
                </span>
              </div>
              <p className="text-gray-800 font-medium text-sm leading-relaxed whitespace-pre-line mb-4">
                {quiz[reviewIndex].question}
              </p>
              <p className="text-xs text-green-700">
                Correct answer: ({quiz[reviewIndex].correctAnswer}){" "}
                {
                  quiz[reviewIndex].options.find(
                    (o) => o.id === quiz[reviewIndex].correctAnswer
                  )?.text
                }
              </p>
            </div>
          )}

          {/* Full list fallback (when no question selected) */}
          {reviewIndex === null && (
            <>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Session Review
              </h2>
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
                        <span
                          className={`text-sm font-medium shrink-0 ${
                            a.correct ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {a.correct ? "✓" : "✗"} Q{idx + 1}
                        </span>
                        <p className="text-sm text-gray-700 flex-1">
                          {q.question.split("\n")[0]}
                        </p>
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

  // ─── Active practice ──────────────────────────────────────────────────────
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
    recordQuestionAnswer(current.id, correct);
    if (sessionIdRef.current) {
      updateSessionAnswer(sessionIdRef.current, currentIndex, {
        questionId: current.id,
        selectedOption: optionId,
        correct,
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < quiz.length - 1) {
      goTo(currentIndex + 1);
    } else {
      // Finish session
      const total = Object.keys(answers).length;
      const correctCount = Object.values(answers).filter((a) => a.correct).length;
      if (sessionIdRef.current) {
        finishSession(sessionIdRef.current, total, correctCount);
      }
      setDone(true);
    }
  };

  const answeredCount = Object.keys(answers).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-emerald-800 text-white py-4 px-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/helicopter" className="text-emerald-300 hover:text-white text-sm">
              ← Home
            </Link>
            <span className="text-emerald-500">|</span>
            <span className="text-sm text-emerald-200 font-medium">⚡ Practice</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-emerald-200">
            <span>
              {answeredCount}/{quiz.length} answered
            </span>
            <span className="font-mono">{currentIndex + 1}/{quiz.length}</span>
          </div>
        </div>
      </header>

      {/* Progress bar */}
      <div className="bg-emerald-900 h-1">
        <div
          className="bg-emerald-400 h-1 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / quiz.length) * 100}%` }}
        />
      </div>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Question navigator grid */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
          <p className="text-xs text-gray-500 mb-3 font-medium">
            Jump to question — <span className="text-green-600">■</span> correct{" "}
            <span className="text-red-600">■</span> incorrect{" "}
            <span className="text-gray-400">■</span> visited{" "}
            <span className="text-gray-300">□</span> not visited
          </p>
          <QuestionGrid
            onSelect={goTo}
            activeIndex={currentIndex}
            showResults={false}
          />
        </div>

        {/* Section badge */}
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs font-medium text-emerald-700 bg-emerald-100 px-2 py-1 rounded">
            {current.section} — Question {current.id}
          </span>
          <span className="text-xs text-gray-400 italic">
            Select an answer for instant feedback
          </span>
        </div>

        {/* Question card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <p className="text-gray-800 font-medium text-base leading-relaxed whitespace-pre-line">
            {current.question}
          </p>
          {current.images && current.images.length > 0 && (
            <div className="mt-4 space-y-3">
              {current.images.map((img, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto cursor-pointer"
                    onClick={() => window.open(img.src, '_blank')}
                    title="Click to open full size"
                  />
                  <p className="text-xs text-gray-500 px-3 py-1.5 bg-gray-50">{img.alt}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {current.options.map((option) => {
            const isSelected = currentAnswer?.selected === option.id;
            const isCorrectOption = option.id === current.correctAnswer;

            let style =
              "bg-white border-gray-200 text-gray-700 hover:border-emerald-400 hover:bg-emerald-50 cursor-pointer";

            if (isRevealed) {
              if (isCorrectOption) {
                style = "bg-green-50 border-green-400 text-green-800 cursor-default";
              } else if (isSelected) {
                style = "bg-red-50 border-red-400 text-red-700 cursor-default";
              } else {
                style = "bg-white border-gray-200 text-gray-400 cursor-default";
              }
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
                {isRevealed && isCorrectOption && (
                  <span className="ml-2 text-green-600 font-bold">✓</span>
                )}
                {isRevealed && isSelected && !isCorrectOption && (
                  <span className="ml-2 text-red-500 font-bold">✗</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Immediate explanation */}
        {isRevealed && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`text-sm font-bold ${
                  isCorrect ? "text-green-700" : "text-red-600"
                }`}
              >
                {isCorrect ? "✅ Correct!" : "❌ Incorrect"}
              </span>
              {!isCorrect && (
                <span className="text-sm text-gray-500">
                  — Correct answer:{" "}
                  <strong className="text-gray-700">
                    ({current.correctAnswer}){" "}
                    {
                      current.options.find((o) => o.id === current.correctAnswer)
                        ?.text
                    }
                  </strong>
                </span>
              )}
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              {current.explanation}
            </p>

            <div className="flex items-center gap-4 flex-wrap border-t border-gray-200 pt-3 mt-1">
              {current.aimReference && (
                <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                  <span>📖</span>
                  <strong>AIM Reference:</strong> {current.aimReference}
                </span>
              )}
              <a
                href="/pdfs/aim-2025-2_access_en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-800 underline"
                title="Open TC AIM 2025-2 PDF"
              >
                Open TC AIM PDF ↗
              </a>
              <a
                href="/pdfs/examcanada.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-800 underline"
                title="Open Sample Exam PDF"
              >
                Open Exam PDF ↗
              </a>
            </div>
          </div>
        )}

        {/* Navigation */}
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
              className="px-5 py-2 text-sm font-medium text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors"
            >
              {currentIndex < quiz.length - 1 ? "Next Question →" : "Finish Session"}
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
