"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { timminsQuestions, TimminsQuestion, TimminsSection } from "@/data/timmins-questions";
import Link from "next/link";
import {
  startTimminsSession,
  finishTimminsSession,
  updateTimminsSessionAnswer,
  getTimminsSession,
} from "@/lib/stats";

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type AnswerState = { selected: number | null; revealed: boolean };

export default function TimminsQuizClient({ sessionId: resumeSessionId, count }: { sessionId?: string; count?: number }) {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") ?? "all";
  const sectionParam = searchParams.get("section");

  const [quizQuestions, setQuizQuestions] = useState<TimminsQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerState>>({});
  const [showResult, setShowResult] = useState(false);

  const sessionIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (resumeSessionId) {
      const session = getTimminsSession(resumeSessionId);
      if (session) {
        const qMap = new Map(timminsQuestions.map((q) => [q.id, q]));
        const restored = session.questionIds.map((id) => qMap.get(id)).filter(Boolean) as TimminsQuestion[];
        if (restored.length > 0) {
          setQuizQuestions(restored);
          sessionIdRef.current = session.id;

          if (session.questionAnswers) {
            const restoredAnswers: Record<number, AnswerState> = {};
            for (const [idxStr, sa] of Object.entries(session.questionAnswers)) {
              const idx = Number(idxStr);
              restoredAnswers[idx] = { selected: sa.selectedOption, revealed: true };
            }
            setAnswers(restoredAnswers);

            if (session.finishedAt) {
              setShowResult(true);
            } else {
              const firstUnanswered = restored.findIndex((_, idx) => !restoredAnswers[idx]);
              setCurrentIndex(firstUnanswered >= 0 ? firstUnanswered : 0);
            }
          } else if (session.finishedAt) {
            setShowResult(true);
          }
          return;
        }
      }
    }

    let qs = [...timminsQuestions];
    if (mode === "section" && sectionParam) {
      qs = timminsQuestions.filter((q) => q.section === decodeURIComponent(sectionParam) as TimminsSection);
    }
    if (mode === "random") {
      qs = shuffleArray(qs);
    }
    if (count && count > 0 && count < qs.length) {
      qs = shuffleArray(qs).slice(0, count);
    }
    setQuizQuestions(qs);
    setCurrentIndex(0);
    setAnswers({});
    setShowResult(false);
    sessionIdRef.current = startTimminsSession(
      mode === "section" ? "section" : "practice",
      qs.map((q) => q.id),
      sectionParam ? decodeURIComponent(sectionParam) : undefined
    );
  }, [mode, sectionParam, resumeSessionId, count]);

  const current = quizQuestions[currentIndex];

  const handleSelect = useCallback(
    (optionId: number) => {
      if (!current) return;
      const existing = answers[currentIndex];
      if (existing?.revealed) return;
      setAnswers((prev) => ({ ...prev, [currentIndex]: { selected: optionId, revealed: false } }));
    },
    [current, answers, currentIndex]
  );

  const handleReveal = useCallback(() => {
    if (!current) return;
    const existing = answers[currentIndex];
    if (!existing?.selected) return;
    setAnswers((prev) => ({ ...prev, [currentIndex]: { ...existing, revealed: true } }));
    if (sessionIdRef.current) {
      updateTimminsSessionAnswer(sessionIdRef.current, currentIndex, {
        questionId: current.id,
        selectedOption: existing.selected,
        correct: existing.selected === current.correctAnswer,
      });
    }
  }, [current, answers, currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < quizQuestions.length - 1) setCurrentIndex((i) => i + 1);
    else {
      const answered = Object.values(answers).filter((a) => a.revealed).length;
      const correct = Object.entries(answers).filter(([idx, a]) => {
        if (!a.revealed) return false;
        const q = quizQuestions[Number(idx)];
        return q && a.selected === q.correctAnswer;
      }).length;
      if (sessionIdRef.current) {
        finishTimminsSession(sessionIdRef.current, answered, correct);
      }
      setShowResult(true);
    }
  }, [currentIndex, quizQuestions, answers]);

  const handleRestart = () => {
    let qs = [...timminsQuestions];
    if (mode === "section" && sectionParam) {
      qs = timminsQuestions.filter((q) => q.section === decodeURIComponent(sectionParam) as TimminsSection);
    }
    if (mode === "random") qs = shuffleArray(qs);
    setQuizQuestions(qs);
    setCurrentIndex(0);
    setAnswers({});
    setShowResult(false);
    sessionIdRef.current = startTimminsSession(
      mode === "section" ? "section" : "practice",
      qs.map((q) => q.id),
      sectionParam ? decodeURIComponent(sectionParam) : undefined
    );
  };

  if (quizQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">No questions found.</p>
          <Link href="/?bank=timmins" className="text-teal-600 hover:underline">Back to home</Link>
        </div>
      </div>
    );
  }

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
        <header className="bg-teal-900 text-white py-6 px-4">
          <div className="max-w-3xl mx-auto flex items-center gap-4">
            <Link href="/?bank=timmins" className="text-teal-300 hover:text-white text-sm">← Home</Link>
            <h1 className="text-xl font-semibold">Timmins Exam Quiz Results</h1>
          </div>
        </header>
        <main className="max-w-3xl mx-auto px-4 py-10">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center mb-8">
            <div className={`text-6xl font-bold mb-2 ${percentage >= 70 ? "text-green-600" : "text-red-500"}`}>{percentage}%</div>
            <p className="text-gray-600 text-lg mb-1">{correct} correct out of {answered} answered</p>
            <p className="text-gray-400 text-sm mb-6">{total - answered} question{total - answered !== 1 ? "s" : ""} not answered</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={handleRestart} className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">Try Again</button>
              <Link href="/?bank=timmins" className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium transition-colors">Back to Home</Link>
            </div>
          </div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Review</h2>
          <div className="space-y-4">
            {quizQuestions.map((q, idx) => {
              const a = answers[idx];
              if (!a?.revealed) return null;
              const isCorrect = a.selected === q.correctAnswer;
              return (
                <div key={q.id} className={`bg-white rounded-lg border p-4 ${isCorrect ? "border-green-200" : "border-red-200"}`}>
                  <div className="flex items-start gap-2 mb-2">
                    <span className={`text-sm font-medium ${isCorrect ? "text-green-600" : "text-red-600"}`}>{isCorrect ? "✓" : "✗"} Q{q.id}</span>
                    <p className="text-sm text-gray-700 flex-1">{q.question.split("\n")[0]}</p>
                  </div>
                  {!isCorrect && <p className="text-xs text-red-500 mb-1">Your answer: {q.options.find((o) => o.id === a.selected)?.text}</p>}
                  <p className="text-xs text-green-700">Correct: {q.options.find((o) => o.id === q.correctAnswer)?.text}</p>
                  {q.explanation && <p className="text-xs text-gray-600 mt-1">{q.explanation}</p>}
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
  const isCorrect = isRevealed && currentAnswer?.selected === current.correctAnswer;

  const sectionLabel = mode === "section" && sectionParam
    ? decodeURIComponent(sectionParam)
    : mode === "random" ? "Random" : "Full Exam";

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-teal-900 text-white py-4 px-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/?bank=timmins" className="text-teal-300 hover:text-white text-sm">← Home</Link>
            <span className="text-teal-400">|</span>
            <span className="text-sm text-teal-200">{sectionLabel}</span>
          </div>
          <span className="text-sm text-teal-200">{currentIndex + 1} / {quizQuestions.length}</span>
        </div>
      </header>

      <div className="bg-teal-800 h-1">
        <div className="bg-teal-400 h-1 transition-all duration-300" style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }} />
      </div>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-4">
          <span className="text-xs font-medium text-teal-700 bg-teal-100 px-2 py-1 rounded">
            {current.section} — Q{current.id}
          </span>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <p className="text-gray-800 font-medium text-base leading-relaxed whitespace-pre-line">{current.question}</p>
        </div>

        <div className="space-y-3 mb-6">
          {current.options.map((option) => {
            const isSelected = currentAnswer?.selected === option.id;
            const isCorrectOption = option.id === current.correctAnswer;

            let optionStyle = "bg-white border-gray-200 text-gray-700 hover:border-teal-400 hover:bg-teal-50 cursor-pointer";
            if (isRevealed) {
              if (isCorrectOption) optionStyle = "bg-green-50 border-green-400 text-green-800 cursor-default";
              else if (isSelected && !isCorrectOption) optionStyle = "bg-red-50 border-red-400 text-red-700 cursor-default";
              else optionStyle = "bg-white border-gray-200 text-gray-400 cursor-default";
            } else if (isSelected) {
              optionStyle = "bg-teal-50 border-teal-500 text-teal-800 cursor-pointer";
            }

            return (
              <button key={option.id} onClick={() => handleSelect(option.id)} disabled={isRevealed} className={`w-full text-left rounded-lg border-2 p-4 transition-all text-sm ${optionStyle}`}>
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
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-sm font-semibold ${isCorrect ? "text-green-700" : "text-red-600"}`}>
                {isCorrect ? "Correct!" : "Incorrect"}
              </span>
              <span className="text-sm text-gray-500">
                — Correct answer: <strong>({current.correctAnswer}) {current.options.find((o) => o.id === current.correctAnswer)?.text}</strong>
              </span>
            </div>
            {current.explanation && (
              <p className="text-sm text-gray-600 mt-2">{current.explanation}</p>
            )}
          </div>
        )}

        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            ← Previous
          </button>
          <div className="flex gap-3">
            {!isRevealed && (
              <button onClick={handleReveal} disabled={!currentAnswer?.selected} className="px-5 py-2 text-sm font-medium text-white bg-teal-700 hover:bg-teal-800 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                Check Answer
              </button>
            )}
            {isRevealed && (
              <button onClick={handleNext} className="px-5 py-2 text-sm font-medium text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors">
                {currentIndex < quizQuestions.length - 1 ? "Next →" : "See Results"}
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
