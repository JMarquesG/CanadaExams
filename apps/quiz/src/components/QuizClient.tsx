"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { questions, Question, QuestionSection } from "@/data/questions";
import {
  recordQuestionView,
  recordQuestionAnswer,
  startSession,
  finishSession,
} from "@/lib/stats";
import Link from "next/link";

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type AnswerState = {
  selected: number | null;
  revealed: boolean;
};

export default function QuizClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const mode = searchParams.get("mode") ?? "all";
  const sectionParam = searchParams.get("section");

  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerState>>({});
  const [showResult, setShowResult] = useState(false);

  const sessionIdRef = useRef<string | null>(null);

  // Build question list
  useEffect(() => {
    let qs = [...questions];
    if (mode === "section" && sectionParam) {
      qs = questions.filter((q) => q.section === decodeURIComponent(sectionParam) as QuestionSection);
    }
    if (mode === "random") {
      qs = shuffleArray(qs);
    }
    setQuizQuestions(qs);
    setCurrentIndex(0);
    setAnswers({});
    setShowResult(false);
    sessionIdRef.current = startSession(
      "section",
      qs.map((q) => q.id),
      sectionParam ? decodeURIComponent(sectionParam) : undefined
    );
    if (qs.length > 0) recordQuestionView(qs[0].id);
  }, [mode, sectionParam]);

  const current = quizQuestions[currentIndex];

  const handleSelect = useCallback(
    (optionId: number) => {
      if (!current) return;
      const existing = answers[currentIndex];
      if (existing?.revealed) return; // Already revealed
      setAnswers((prev) => ({
        ...prev,
        [currentIndex]: { selected: optionId, revealed: false },
      }));
    },
    [current, answers, currentIndex]
  );

  const handleReveal = useCallback(() => {
    if (!current) return;
    const existing = answers[currentIndex];
    if (!existing?.selected) return;
    const correct = existing.selected === current.correctAnswer;
    recordQuestionAnswer(current.id, correct);
    setAnswers((prev) => ({
      ...prev,
      [currentIndex]: { ...existing, revealed: true },
    }));
  }, [current, answers, currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < quizQuestions.length - 1) {
      const nextIdx = currentIndex + 1;
      if (quizQuestions[nextIdx]) {
        recordQuestionView(quizQuestions[nextIdx].id);
      }
      setCurrentIndex(nextIdx);
    } else {
      // Finish session
      const answered = Object.values(answers).filter((a) => a.revealed).length;
      const correctCount = Object.entries(answers).filter(([idx, a]) => {
        if (!a.revealed) return false;
        const q = quizQuestions[Number(idx)];
        return q && a.selected === q.correctAnswer;
      }).length;
      if (sessionIdRef.current) {
        finishSession(sessionIdRef.current, answered, correctCount);
      }
      setShowResult(true);
    }
  }, [currentIndex, quizQuestions, answers]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      recordQuestionView(quizQuestions[currentIndex - 1].id);
      setCurrentIndex((i) => i - 1);
    }
  }, [currentIndex, quizQuestions]);

  const handleRestart = () => {
    let qs = [...questions];
    if (mode === "section" && sectionParam) {
      qs = questions.filter(
        (q) => q.section === decodeURIComponent(sectionParam) as QuestionSection
      );
    }
    if (mode === "random") {
      qs = shuffleArray(qs);
    }
    setQuizQuestions(qs);
    setCurrentIndex(0);
    setAnswers({});
    setShowResult(false);
    sessionIdRef.current = startSession(
      "section",
      qs.map((q) => q.id),
      sectionParam ? decodeURIComponent(sectionParam) : undefined
    );
  };

  if (quizQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">No questions found.</p>
          <Link href="/helicopter" className="text-blue-600 hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  // Results screen
  if (showResult) {
    const answered = Object.values(answers).filter((a) => a.revealed).length;
    const correct = Object.entries(answers).filter(([idx, a]) => {
      if (!a.revealed) return false;
      const q = quizQuestions[Number(idx)];
      return q && a.selected === q.correctAnswer;
    }).length;
    const total = quizQuestions.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-blue-900 text-white py-6 px-4">
          <div className="max-w-3xl mx-auto flex items-center gap-4">
            <Link href="/helicopter" className="text-blue-300 hover:text-white text-sm">
              ← Home
            </Link>
            <h1 className="text-xl font-semibold">Quiz Results</h1>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-10">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center mb-8">
            <div className={`text-6xl font-bold mb-2 ${percentage >= 70 ? "text-green-600" : "text-red-500"}`}>
              {percentage}%
            </div>
            <p className="text-gray-600 text-lg mb-1">
              {correct} correct out of {answered} answered
            </p>
            <p className="text-gray-400 text-sm mb-6">
              {total - answered} question{total - answered !== 1 ? "s" : ""} not answered
            </p>

            {percentage >= 70 ? (
              <div className="bg-green-50 text-green-700 rounded-lg p-4 mb-6 text-sm">
                ✅ Well done! A score of 70% or above is generally considered a pass.
              </div>
            ) : (
              <div className="bg-yellow-50 text-yellow-700 rounded-lg p-4 mb-6 text-sm">
                📚 Keep studying. Review the questions you got wrong and try again.
              </div>
            )}

            <div className="flex gap-3 justify-center flex-wrap">
              <button
                onClick={handleRestart}
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Try Again
              </button>
              <Link
                href="/helicopter"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>

          {/* Review incorrect answers */}
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Review</h2>
          <div className="space-y-4">
            {quizQuestions.map((q, idx) => {
              const a = answers[idx];
              if (!a?.revealed) return null;
              const isCorrect = a.selected === q.correctAnswer;
              return (
                <div
                  key={q.id}
                  className={`bg-white rounded-lg border p-4 ${isCorrect ? "border-green-200" : "border-red-200"}`}
                >
                  <div className="flex items-start gap-2 mb-2">
                    <span className={`text-sm font-medium ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                      {isCorrect ? "✓" : "✗"} Q{q.id}
                    </span>
                    <p className="text-sm text-gray-700 flex-1">{q.question.split("\n")[0]}</p>
                  </div>
                  {!isCorrect && (
                    <p className="text-xs text-red-500 mb-1">
                      Your answer: {q.options.find((o) => o.id === a.selected)?.text}
                    </p>
                  )}
                  <p className="text-xs text-green-700">
                    Correct: {q.options.find((o) => o.id === q.correctAnswer)?.text}
                  </p>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    );
  }

  const currentAnswer = answers[currentIndex];
  const isRevealed = currentAnswer?.revealed ?? false;
  const isCorrect =
    isRevealed && currentAnswer?.selected === current.correctAnswer;

  const sectionLabel =
    mode === "section" && sectionParam
      ? decodeURIComponent(sectionParam)
      : mode === "random"
      ? "Random"
      : "Full Exam";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4 px-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/helicopter" className="text-blue-300 hover:text-white text-sm">
              ← Home
            </Link>
            <span className="text-blue-400">|</span>
            <span className="text-sm text-blue-200">{sectionLabel}</span>
          </div>
          <span className="text-sm text-blue-200">
            {currentIndex + 1} / {quizQuestions.length}
          </span>
        </div>
      </header>

      {/* Progress bar */}
      <div className="bg-blue-800 h-1">
        <div
          className="bg-blue-400 h-1 transition-all duration-300"
          style={{
            width: `${((currentIndex + 1) / quizQuestions.length) * 100}%`,
          }}
        />
      </div>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Section badge */}
        <div className="mb-4">
          <span className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded">
            {current.section} — Question {current.id}
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
            const isSelected = currentAnswer?.selected === option.id;
            const isCorrectOption = option.id === current.correctAnswer;

            let optionStyle =
              "bg-white border-gray-200 text-gray-700 hover:border-blue-400 hover:bg-blue-50 cursor-pointer";

            if (isRevealed) {
              if (isCorrectOption) {
                optionStyle =
                  "bg-green-50 border-green-400 text-green-800 cursor-default";
              } else if (isSelected && !isCorrectOption) {
                optionStyle =
                  "bg-red-50 border-red-400 text-red-700 cursor-default";
              } else {
                optionStyle =
                  "bg-white border-gray-200 text-gray-400 cursor-default";
              }
            } else if (isSelected) {
              optionStyle =
                "bg-blue-50 border-blue-500 text-blue-800 cursor-pointer";
            }

            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                disabled={isRevealed}
                className={`w-full text-left rounded-lg border-2 p-4 transition-all text-sm ${optionStyle}`}
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

        {/* Explanation (shown after reveal) */}
        {isRevealed && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`text-sm font-semibold ${
                  isCorrect ? "text-green-700" : "text-red-600"
                }`}
              >
                {isCorrect ? "✅ Correct!" : "❌ Incorrect"}
              </span>
              <span className="text-sm text-gray-500">
                — Correct answer:{" "}
                <strong>
                  ({current.correctAnswer}){" "}
                  {
                    current.options.find(
                      (o) => o.id === current.correctAnswer
                    )?.text
                  }
                </strong>
              </span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              {current.explanation}
            </p>
            {current.aimReference && (
              <p className="text-xs text-gray-400">
                Reference: {current.aimReference}
              </p>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            ← Previous
          </button>

          <div className="flex gap-3">
            {!isRevealed && (
              <button
                onClick={handleReveal}
                disabled={!currentAnswer?.selected}
                className="px-5 py-2 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Check Answer
              </button>
            )}

            {isRevealed && (
              <button
                onClick={handleNext}
                className="px-5 py-2 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors"
              >
                {currentIndex < quizQuestions.length - 1
                  ? "Next →"
                  : "See Results"}
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
