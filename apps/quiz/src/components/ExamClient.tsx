"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { questions, SECTIONS } from "@/data/questions";
import Link from "next/link";
import {
  recordQuestionView,
  recordQuestionAnswer,
  startSession,
  finishSession,
  updateSessionAnswer,
  getSession,
} from "@/lib/stats";

// ─── Constants ────────────────────────────────────────────────────────────────
const EXAM_SIZE = 100;
const PASS_PERCENT = 60;

// ─── Helpers ──────────────────────────────────────────────────────────────────
function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildExam() {
  return shuffleArray([...questions]);
}

type ReviewFilter = "all" | "correct" | "incorrect";

// ─── Component ────────────────────────────────────────────────────────────────
export default function ExamClient({ sessionId: resumeSessionId }: { sessionId?: string }) {
  const [examQuestions, setExamQuestions] = useState<ReturnType<typeof buildExam>>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [visited, setVisited] = useState<Set<number>>(new Set([0]));
  const [submitted, setSubmitted] = useState(false);
  const [showSubmitWarning, setShowSubmitWarning] = useState(false);

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
        const restored = session.questionIds.map((id) => qMap.get(id)).filter(Boolean) as ReturnType<typeof buildExam>;
        if (restored.length > 0) {
          setExamQuestions(restored);
          sessionIdRef.current = session.id;

          if (session.questionAnswers) {
            const restoredAnswers: Record<number, number> = {};
            const restoredVisited = new Set<number>([0]);
            for (const [idxStr, sa] of Object.entries(session.questionAnswers)) {
              const idx = Number(idxStr);
              restoredAnswers[idx] = sa.selectedOption;
              restoredVisited.add(idx);
            }
            setAnswers(restoredAnswers);
            setVisited(restoredVisited);

            if (session.finishedAt) {
              setSubmitted(true);
            } else {
              const firstUnanswered = restored.findIndex((_, idx) => restoredAnswers[idx] === undefined);
              setCurrentIndex(firstUnanswered >= 0 ? firstUnanswered : 0);
            }
          } else if (session.finishedAt) {
            setSubmitted(true);
          }
          return;
        }
      }
    }

    // New session
    const exam = buildExam();
    setExamQuestions(exam);
    sessionIdRef.current = startSession(
      "exam",
      exam.map((q) => q.id)
    );
    if (exam.length > 0) recordQuestionView(exam[0].id);
  }, [resumeSessionId]);

  const totalAnswered = Object.keys(answers).length;

  const goTo = useCallback(
    (idx: number) => {
      setCurrentIndex(idx);
      setVisited((prev) => {
        const next = new Set(prev);
        if (!next.has(idx) && examQuestions[idx]) {
          recordQuestionView(examQuestions[idx].id);
        }
        next.add(idx);
        return next;
      });
    },
    [examQuestions]
  );

  if (examQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-400 text-sm">Preparing exam…</div>
      </div>
    );
  }

  const handleRestart = () => {
    const exam = buildExam();
    setExamQuestions(exam);
    setCurrentIndex(0);
    setAnswers({});
    setVisited(new Set([0]));
    setSubmitted(false);
    setShowSubmitWarning(false);
    setReviewFilter("all");
    setReviewIndex(null);
    sessionIdRef.current = startSession(
      "exam",
      exam.map((q) => q.id)
    );
  };

  const handleSubmitClick = () => {
    if (totalAnswered < EXAM_SIZE) {
      setShowSubmitWarning(true);
    } else {
      doSubmit();
    }
  };

  const doSubmit = () => {
    // Record all question answers in stats
    examQuestions.forEach((q, idx) => {
      if (answers[idx] !== undefined) {
        recordQuestionAnswer(q.id, answers[idx] === q.correctAnswer);
      }
    });
    const correct = examQuestions.filter(
      (q, idx) => answers[idx] === q.correctAnswer
    ).length;
    if (sessionIdRef.current) {
      finishSession(sessionIdRef.current, totalAnswered, correct);
    }
    setSubmitted(true);
  };

  // ─── Results / Report screen ────────────────────────────────────────────────
  if (submitted) {
    const correct = examQuestions.filter(
      (q, idx) => answers[idx] === q.correctAnswer
    ).length;
    const incorrect = totalAnswered - correct;
    const unanswered = EXAM_SIZE - totalAnswered;
    const pct = Math.round((correct / EXAM_SIZE) * 100);
    const passed = pct >= PASS_PERCENT;

    // Determine correctness for each question
    const isCorrectAt = (idx: number) => answers[idx] === examQuestions[idx].correctAnswer;
    const isAnsweredAt = (idx: number) => answers[idx] !== undefined;

    // Filtered indices
    const filteredSet = new Set(
      examQuestions
        .map((_, idx) => idx)
        .filter((idx) => {
          if (reviewFilter === "correct") return isAnsweredAt(idx) && isCorrectAt(idx);
          if (reviewFilter === "incorrect")
            return !isAnsweredAt(idx) || !isCorrectAt(idx);
          return true;
        })
    );

    const reviewQ = reviewIndex !== null ? examQuestions[reviewIndex] : null;

    // Navigator grid for report
    const ReportGrid = () => (
      <div className="flex flex-wrap gap-1.5">
        {examQuestions.map((_, idx) => {
          if (!filteredSet.has(idx)) return null;
          const isCurrent = idx === reviewIndex;
          const answered = isAnsweredAt(idx);
          const correctQ = answered && isCorrectAt(idx);

          let bg: string;
          if (isCurrent) {
            bg = "bg-indigo-700 text-white ring-2 ring-indigo-300";
          } else if (!answered) {
            bg = "bg-gray-100 text-gray-400 border border-gray-200 hover:bg-gray-200";
          } else if (correctQ) {
            bg = "bg-green-100 text-green-800 border border-green-300 hover:bg-green-200";
          } else {
            bg = "bg-red-100 text-red-800 border border-red-300 hover:bg-red-200";
          }

          return (
            <button
              key={idx}
              onClick={() => setReviewIndex(idx)}
              className={`w-8 h-8 text-xs rounded font-medium transition-colors ${bg}`}
              title={
                !answered
                  ? "Not answered"
                  : correctQ
                  ? "Correct"
                  : "Incorrect"
              }
            >
              {idx + 1}
            </button>
          );
        })}
      </div>
    );

    return (
      <div className="min-h-screen bg-gray-50">
        <header
          className={`${
            passed ? "bg-indigo-900" : "bg-red-900"
          } text-white py-6 px-4`}
        >
          <div className="max-w-3xl mx-auto flex items-center gap-4">
            <Link href="/?bank=license" className="text-blue-300 hover:text-white text-sm">
              ← Home
            </Link>
            <h1 className="text-xl font-semibold">Exam Results — Report</h1>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-10">
          {/* Score card */}
          <div
            className={`rounded-xl border-2 p-8 text-center mb-8 ${
              passed
                ? "bg-green-50 border-green-300"
                : "bg-red-50 border-red-300"
            }`}
          >
            <div
              className={`text-7xl font-extrabold mb-2 ${
                passed ? "text-green-600" : "text-red-600"
              }`}
            >
              {pct}%
            </div>
            <div
              className={`text-3xl font-bold mb-3 ${
                passed ? "text-green-700" : "text-red-700"
              }`}
            >
              {passed ? "✅ PASS" : "❌ FAIL"}
            </div>
            <p className="text-gray-700 mb-1 text-lg">
              {correct} correct out of {EXAM_SIZE} questions
            </p>
            <p className="text-gray-500 text-sm mb-4">
              Passing score: {PASS_PERCENT}% &mdash; you need{" "}
              {Math.ceil(EXAM_SIZE * (PASS_PERCENT / 100))} correct
            </p>
            <div className="flex gap-4 justify-center text-sm mb-6">
              <span className="text-green-600 font-medium">✓ {correct} correct</span>
              <span className="text-red-600 font-medium">✗ {incorrect} incorrect</span>
              {unanswered > 0 && (
                <span className="text-gray-400">— {unanswered} unanswered</span>
              )}
            </div>

            {passed ? (
              <div className="bg-green-100 text-green-800 rounded-lg p-3 text-sm mb-6">
                🎉 Well done! You passed this practice exam simulation.
              </div>
            ) : (
              <div className="bg-red-100 text-red-700 rounded-lg p-3 text-sm mb-6">
                📚 Keep studying. Review the mistakes below, then try again.
              </div>
            )}

            <div className="flex gap-3 justify-center flex-wrap">
              <button
                onClick={handleRestart}
                className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                New Exam
              </button>
              <Link
                href="/?mode=practice"
                className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Go to Practice Mode
              </Link>
              <Link
                href="/?bank=license"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Home
              </Link>
            </div>
          </div>

          {/* Score breakdown by section */}
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-8">
            <h2 className="text-sm font-semibold text-gray-700 mb-3">
              Score by section
            </h2>
            <div className="space-y-2">
              {SECTIONS.map((section) => {
                const sectionQs = examQuestions
                  .map((q, idx) => ({ q, idx }))
                  .filter(({ q }) => q.section === section);
                const sectionCorrect = sectionQs.filter(
                  ({ q, idx }) => answers[idx] === q.correctAnswer
                ).length;
                const sectionTotal = sectionQs.length;
                const sectionPct =
                  sectionTotal > 0
                    ? Math.round((sectionCorrect / sectionTotal) * 100)
                    : 0;
                return (
                  <div key={section} className="flex items-center gap-3">
                    <span className="text-xs text-gray-600 w-48 shrink-0">
                      {section}
                    </span>
                    <div className="flex-1 bg-gray-100 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          sectionPct >= PASS_PERCENT
                            ? "bg-green-500"
                            : "bg-red-400"
                        }`}
                        style={{ width: `${sectionPct}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 w-20 text-right shrink-0">
                      {sectionCorrect}/{sectionTotal} ({sectionPct}%)
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 mb-4">
            {(
              [
                { key: "all", label: `All (${EXAM_SIZE})` },
                {
                  key: "incorrect",
                  label: `Incorrect (${incorrect + unanswered})`,
                },
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
                      : "bg-indigo-700 text-white"
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
              Click a question to review — <span className="text-green-600">■</span>{" "}
              correct <span className="text-red-600">■</span> incorrect{" "}
              <span className="text-gray-400">■</span> not answered
            </p>
            <ReportGrid />
          </div>

          {/* Single question review */}
          {reviewQ && reviewIndex !== null && (
            <div
              className={`bg-white rounded-lg border-2 p-6 mb-6 ${
                !isAnsweredAt(reviewIndex)
                  ? "border-gray-300"
                  : isCorrectAt(reviewIndex)
                  ? "border-green-300"
                  : "border-red-300"
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`text-sm font-bold ${
                    !isAnsweredAt(reviewIndex)
                      ? "text-gray-400"
                      : isCorrectAt(reviewIndex)
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {!isAnsweredAt(reviewIndex)
                    ? "— Not answered"
                    : isCorrectAt(reviewIndex)
                    ? "✓ Correct"
                    : "✗ Incorrect"}{" "}
                  — Q{reviewIndex + 1}
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
                  const isUserChoice = answers[reviewIndex] === opt.id;
                  const isCorrectOpt = opt.id === reviewQ.correctAnswer;
                  let cls = "text-sm px-3 py-2 rounded border";
                  if (isCorrectOpt)
                    cls += " bg-green-50 border-green-300 text-green-800 font-medium";
                  else if (isUserChoice)
                    cls += " bg-red-50 border-red-300 text-red-700 line-through";
                  else cls += " bg-white border-gray-100 text-gray-500";

                  return (
                    <div key={opt.id} className={cls}>
                      {isCorrectOpt ? "✓" : isUserChoice ? "✗" : " "} ({opt.id}){" "}
                      {opt.text}
                    </div>
                  );
                })}
              </div>

              <details open>
                <summary className="text-xs text-blue-600 cursor-pointer hover:text-blue-800 select-none mb-2">
                  Explanation
                </summary>
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
              </details>

              {/* Navigate between filtered questions */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => {
                    const arr = [...filteredSet].sort((a, b) => a - b);
                    const pos = arr.indexOf(reviewIndex);
                    if (pos > 0) setReviewIndex(arr[pos - 1]);
                  }}
                  disabled={
                    [...filteredSet].sort((a, b) => a - b).indexOf(reviewIndex) <=
                    0
                  }
                  className="px-3 py-1.5 text-xs text-gray-600 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => {
                    const arr = [...filteredSet].sort((a, b) => a - b);
                    const pos = arr.indexOf(reviewIndex);
                    if (pos < arr.length - 1) setReviewIndex(arr[pos + 1]);
                  }}
                  disabled={
                    (() => {
                      const arr = [...filteredSet].sort((a, b) => a - b);
                      return arr.indexOf(reviewIndex) >= arr.length - 1;
                    })()
                  }
                  className="px-3 py-1.5 text-xs text-gray-600 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {/* Full list when no question selected */}
          {reviewIndex === null && (
            <>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Detailed Answer Review
              </h2>
              <div className="space-y-4">
                {examQuestions.map((q, idx) => {
                  if (!filteredSet.has(idx)) return null;
                  const userAnswer = answers[idx];
                  const isCorrect = userAnswer === q.correctAnswer;
                  const notAnswered = userAnswer === undefined;

                  return (
                    <button
                      key={`${q.id}-${idx}`}
                      onClick={() => setReviewIndex(idx)}
                      className={`w-full text-left bg-white rounded-lg border p-5 hover:shadow-sm transition-shadow ${
                        isCorrect
                          ? "border-green-200"
                          : notAnswered
                          ? "border-gray-200"
                          : "border-red-200"
                      }`}
                    >
                      <div className="flex items-start gap-2 mb-1">
                        <span
                          className={`text-sm font-bold shrink-0 ${
                            isCorrect
                              ? "text-green-600"
                              : notAnswered
                              ? "text-gray-400"
                              : "text-red-600"
                          }`}
                        >
                          {notAnswered ? "—" : isCorrect ? "✓" : "✗"} Q{idx + 1}
                        </span>
                        <p className="text-sm text-gray-700 flex-1">
                          {q.question.split("\n")[0]}
                        </p>
                      </div>
                      {!notAnswered && !isCorrect && (
                        <p className="text-xs text-red-500 ml-6">
                          Your answer:{" "}
                          {q.options.find((o) => o.id === userAnswer)?.text}
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

  // ─── Active exam ─────────────────────────────────────────────────────────────
  const current = examQuestions[currentIndex];
  const selectedForCurrent = answers[currentIndex];

  const handleSelect = (optionId: number) => {
    setAnswers((prev) => ({ ...prev, [currentIndex]: optionId }));
    if (sessionIdRef.current) {
      updateSessionAnswer(sessionIdRef.current, currentIndex, {
        questionId: current.id,
        selectedOption: optionId,
        correct: optionId === current.correctAnswer,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-900 text-white py-4 px-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/?bank=license" className="text-indigo-300 hover:text-white text-sm">
              ← Home
            </Link>
            <span className="text-indigo-500">|</span>
            <span className="text-sm text-indigo-200 font-medium">
              🎓 Exam Simulation
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-indigo-200">
            <span>{totalAnswered}/{EXAM_SIZE} answered</span>
            <span className="font-mono">{currentIndex + 1}/{EXAM_SIZE}</span>
          </div>
        </div>
      </header>

      {/* Progress bar */}
      <div className="bg-indigo-950 h-1.5">
        <div
          className="bg-indigo-400 h-1.5 transition-all duration-300"
          style={{ width: `${(totalAnswered / EXAM_SIZE) * 100}%` }}
        />
      </div>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Question navigator grid */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
          <p className="text-xs text-gray-500 mb-3 font-medium">
            Jump to question — {totalAnswered} of {EXAM_SIZE} answered —{" "}
            <span className="text-indigo-600">■</span> answered{" "}
            <span className="text-gray-400">■</span> visited{" "}
            <span className="text-gray-300">□</span> not visited
          </p>
          <div className="flex flex-wrap gap-1.5">
            {examQuestions.map((_, idx) => {
              const isCurrent = idx === currentIndex;
              const isAnswered = answers[idx] !== undefined;
              const isVisited = visited.has(idx);

              let bg: string;
              if (isCurrent) {
                bg = "bg-indigo-700 text-white ring-2 ring-indigo-300";
              } else if (isAnswered) {
                bg = "bg-indigo-100 text-indigo-700 hover:bg-indigo-200";
              } else if (isVisited) {
                bg = "bg-gray-200 text-gray-600 hover:bg-gray-300";
              } else {
                bg = "bg-white text-gray-400 border border-gray-200 hover:bg-gray-100";
              }

              return (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`w-8 h-8 text-xs rounded font-medium transition-colors ${bg}`}
                  title={
                    isAnswered
                      ? "Answered"
                      : isVisited
                      ? "Visited"
                      : "Not visited"
                  }
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Section badge */}
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs font-medium text-indigo-700 bg-indigo-100 px-2 py-1 rounded">
            {current.section} — Q{currentIndex + 1}
          </span>
          <span className="text-xs text-gray-400 italic">
            Results shown only after submitting
          </span>
        </div>

        {/* Question */}
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
            const isSelected = selectedForCurrent === option.id;
            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                className={`w-full text-left rounded-lg border-2 p-4 transition-all text-sm ${
                  isSelected
                    ? "bg-indigo-50 border-indigo-500 text-indigo-900"
                    : "bg-white border-gray-200 text-gray-700 hover:border-indigo-400 hover:bg-indigo-50 cursor-pointer"
                }`}
              >
                <span className="font-semibold mr-2">({option.id})</span>
                {option.text}
              </button>
            );
          })}
        </div>

        {/* Submit warning */}
        {showSubmitWarning && (
          <div className="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-4 text-sm text-amber-800">
            <strong>⚠️ {EXAM_SIZE - totalAnswered} question(s) unanswered.</strong>{" "}
            Unanswered questions will be marked as incorrect.{" "}
            <div className="flex gap-3 mt-3">
              <button
                onClick={() => doSubmit()}
                className="text-xs bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded font-medium"
              >
                Submit anyway
              </button>
              <button
                onClick={() => setShowSubmitWarning(false)}
                className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-1.5 rounded font-medium"
              >
                Continue answering
              </button>
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

          <div className="flex gap-3">
            {currentIndex < EXAM_SIZE - 1 ? (
              <button
                onClick={() => goTo(currentIndex + 1)}
                className="px-5 py-2 text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 rounded-lg transition-colors"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleSubmitClick}
                className={`px-5 py-2 text-sm font-medium text-white rounded-lg transition-colors ${
                  totalAnswered === EXAM_SIZE
                    ? "bg-green-700 hover:bg-green-800"
                    : "bg-amber-600 hover:bg-amber-700"
                }`}
              >
                Submit Exam ({totalAnswered}/{EXAM_SIZE}) →
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
