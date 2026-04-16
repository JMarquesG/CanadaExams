"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { questions, SECTIONS } from "@/data/questions";
import { pstarQuestions, PSTAR_SECTIONS } from "@/data/pstar-questions";
import {
  loadStats,
  loadPstarStats,
  getWeakQuestionIds,
  getMasteryStats,
  StatsData,
} from "@/lib/stats";

type ExamBank = "pstar" | "license";

const QUESTION_COUNT_OPTIONS_PSTAR = [10, 20, 50, 100, 192];
const QUESTION_COUNT_OPTIONS_LICENSE = [10, 20, 50, 100];

function HomeContent() {
  const searchParams = useSearchParams();
  const bankParam = searchParams.get("bank");
  const [bank, setBank] = useState<ExamBank>(
    bankParam === "license" ? "license" : "pstar"
  );
  const [pstarStats, setPstarStats] = useState<StatsData | null>(null);
  const [licenseStats, setLicenseStats] = useState<StatsData | null>(null);
  const [practiceCount, setPracticeCount] = useState<number | "all">("all");
  const [weakIds, setWeakIds] = useState<number[]>([]);

  useEffect(() => {
    setPstarStats(loadPstarStats());
    setLicenseStats(loadStats());
  }, []);

  useEffect(() => {
    setPracticeCount("all");
    const stats = bank === "pstar" ? pstarStats : licenseStats;
    const qs = bank === "pstar" ? pstarQuestions : questions;
    if (stats) {
      const ids = getWeakQuestionIds(stats, qs.map((q) => q.id), 50);
      setWeakIds(ids);
    } else {
      setWeakIds([]);
    }
  }, [bank, pstarStats, licenseStats]);

  const currentStats = bank === "pstar" ? pstarStats : licenseStats;
  const currentQuestions = bank === "pstar" ? pstarQuestions : questions;
  const currentSections = bank === "pstar" ? PSTAR_SECTIONS : SECTIONS;
  const quizBase = bank === "pstar" ? "/pstar/quiz" : "/helicopter/quiz";
  const examQuestionCount = bank === "pstar" ? 50 : 100;
  const passPercent = bank === "pstar" ? 90 : 60;
  const totalQuestions = currentQuestions.length;
  const countOptions = bank === "pstar" ? QUESTION_COUNT_OPTIONS_PSTAR : QUESTION_COUNT_OPTIONS_LICENSE;

  // Section stats
  const sectionBreakdown = currentSections.map((section) => {
    const sectionQs = currentQuestions.filter((q) => q.section === section);
    const sectionIds = sectionQs.map((q) => q.id);
    const stats = currentStats;
    let answered = 0;
    let totalAns = 0;
    let totalCorr = 0;
    let mastered = 0;
    let failed = 0;
    if (stats) {
      for (const id of sectionIds) {
        const qs = stats.questionStats[id];
        if (qs) {
          if (qs.timesAnswered > 0) answered++;
          totalAns += qs.timesAnswered;
          totalCorr += qs.timesCorrect;
          if (qs.lastCorrect === true) mastered++;
          else if (qs.lastCorrect === false) failed++;
        }
      }
    }
    const accuracy = totalAns > 0 ? Math.round((totalCorr / totalAns) * 100) : 0;
    return { section, total: sectionQs.length, answered, accuracy, mastered, failed, unanswered: sectionQs.length - mastered - failed };
  });

  // Overall mastery
  const mastery = currentStats
    ? getMasteryStats(currentStats, currentQuestions.map((q) => q.id))
    : { mastered: 0, failed: 0, unanswered: totalQuestions, total: totalQuestions };

  // Overall accuracy
  const overallAccuracy = (() => {
    if (!currentStats) return 0;
    const qStats = Object.values(currentStats.questionStats);
    const totalAns = qStats.reduce((s, q) => s + q.timesAnswered, 0);
    const totalCorr = qStats.reduce((s, q) => s + q.timesCorrect, 0);
    return totalAns > 0 ? Math.round((totalCorr / totalAns) * 100) : 0;
  })();

  const practiceHref = (() => {
    const base = `${quizBase}?mode=practice`;
    if (practiceCount !== "all") return `${base}&count=${practiceCount}`;
    return base;
  })();

  const sectionIcons: Record<string, string> = {
    // License (Helicopter)
    "Air Law": "⚖️",
    Navigation: "🧭",
    Meteorology: "🌤️",
    "Aeronautics - General Knowledge": "✈️",
    // PSTAR
    "Collision Avoidance": "🔀",
    "Visual Signals": "🚦",
    Communications: "📻",
    Aerodromes: "🛬",
    Equipment: "🧰",
    "Pilot Responsibilities": "👨‍✈️",
    "Wake Turbulence": "🌀",
    Aeromedical: "🩺",
    "Flight Plans and Flight Itineraries": "🗺️",
    "Clearances and Instructions": "📋",
    "Aircraft Operations": "⚙️",
    "Regulations - Canadian Airspace": "🇨🇦",
    "Controlled Airspace": "📡",
    "Aviation Occurrences": "🚨",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sm text-slate-400 mb-2">Transport Canada</div>
          <h1 className="text-3xl font-bold mb-3">
            Canada Aviation Exam Practice
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Practice for Transport Canada written examinations
          </p>
        </div>
      </header>

      {/* Mode selector tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 flex items-center gap-2 py-2">
          <button
            onClick={() => setBank("pstar")}
            className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
              bank === "pstar"
                ? "bg-indigo-100 text-indigo-800 shadow-sm"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            PSTAR
          </button>
          <button
            onClick={() => setBank("license")}
            className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
              bank === "license"
                ? "bg-blue-100 text-blue-800 shadow-sm"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            License (CPL Helicopter)
          </button>

          {/* Quick stats in the tab bar */}
          {currentStats && (
            <div className="ml-auto flex items-center gap-4 text-xs text-gray-500">
              <span>
                Mastery:{" "}
                <span className={`font-bold ${mastery.mastered === mastery.total ? "text-green-600" : mastery.mastered > 0 ? "text-blue-600" : "text-gray-400"}`}>
                  {mastery.mastered}/{mastery.total}
                </span>
              </span>
              <span>
                Accuracy:{" "}
                <span className={`font-bold ${overallAccuracy >= passPercent ? "text-green-600" : overallAccuracy > 0 ? "text-amber-600" : "text-gray-400"}`}>
                  {overallAccuracy}%
                </span>
              </span>
            </div>
          )}
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* ── MASTERY OVERVIEW ─────────────────────────────────────── */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold text-gray-800">
              Mastery Overview
            </h2>
            <span className="text-xs text-gray-400">
              Based on last answer per question
            </span>
          </div>
          {/* Mastery bar */}
          <div className="flex rounded-full h-4 overflow-hidden bg-gray-100 mb-3">
            {mastery.mastered > 0 && (
              <div
                className="bg-green-500 transition-all"
                style={{ width: `${(mastery.mastered / mastery.total) * 100}%` }}
                title={`${mastery.mastered} mastered`}
              />
            )}
            {mastery.failed > 0 && (
              <div
                className="bg-red-400 transition-all"
                style={{ width: `${(mastery.failed / mastery.total) * 100}%` }}
                title={`${mastery.failed} incorrect`}
              />
            )}
          </div>
          <div className="flex gap-6 text-xs text-gray-600">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
              {mastery.mastered} correct
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
              {mastery.failed} incorrect
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-200 inline-block" />
              {mastery.unanswered} not attempted
            </span>
          </div>
        </div>

        {/* ── MODES ────────────────────────────────────────────────── */}
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          Choose a mode
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Practice gives instant feedback. Exam simulates the real test.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {/* ── Practice ── */}
          <div className="bg-emerald-50 rounded-xl border-2 border-emerald-200 p-5 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">⚡</span>
              <div>
                <h3 className="font-bold text-emerald-900 text-lg">Practice</h3>
                <span className="text-xs text-emerald-600 font-medium">
                  Instant feedback
                </span>
              </div>
            </div>
            <p className="text-sm text-emerald-800 mb-4 leading-relaxed flex-1">
              Random questions with immediate feedback and full explanations.
            </p>
            {/* Question count selector */}
            <div className="mb-3">
              <label className="text-xs text-emerald-700 font-medium block mb-1.5">
                Number of questions
              </label>
              <div className="flex flex-wrap gap-1.5">
                {countOptions.map((n) => (
                  <button
                    key={n}
                    onClick={() => setPracticeCount(n)}
                    className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                      practiceCount === n
                        ? "bg-emerald-600 text-white"
                        : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  onClick={() => setPracticeCount("all")}
                  className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                    practiceCount === "all"
                      ? "bg-emerald-600 text-white"
                      : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                  }`}
                >
                  All ({totalQuestions})
                </button>
              </div>
            </div>
            <Link
              href={practiceHref}
              className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Start Practice
            </Link>
          </div>

          {/* ── Exam ── */}
          <Link href={`${quizBase}?mode=exam`} className="group">
            <div className="bg-indigo-50 rounded-xl border-2 border-indigo-200 p-5 hover:border-indigo-500 hover:shadow-md transition-all cursor-pointer h-full flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🎓</span>
                <div>
                  <h3 className="font-bold text-indigo-900 text-lg group-hover:text-indigo-700">
                    Exam Simulation
                  </h3>
                  <span className="text-xs text-indigo-600 font-medium">
                    Real test conditions
                  </span>
                </div>
              </div>
              <p className="text-sm text-indigo-800 mb-3 leading-relaxed flex-1">
                {examQuestionCount} questions, no feedback until you submit.
                Pass with {passPercent}% or more.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-indigo-200 text-indigo-800 px-2 py-0.5 rounded-full">
                  {examQuestionCount} questions (fixed)
                </span>
                <span className="text-xs bg-indigo-200 text-indigo-800 px-2 py-0.5 rounded-full">
                  {passPercent}% to pass
                </span>
              </div>
            </div>
          </Link>

          {/* ── Weakest Questions ── */}
          {weakIds.length > 0 ? (
            <Link
              href={`${quizBase}?mode=practice&weak=${weakIds.join(",")}`}
              className="group"
            >
              <div className="bg-amber-50 rounded-xl border-2 border-amber-200 p-5 hover:border-amber-500 hover:shadow-md transition-all cursor-pointer h-full flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🎯</span>
                  <div>
                    <h3 className="font-bold text-amber-900 text-lg group-hover:text-amber-700">
                      Weakest Questions
                    </h3>
                    <span className="text-xs text-amber-600 font-medium">
                      Focus on what you get wrong
                    </span>
                  </div>
                </div>
                <p className="text-sm text-amber-800 mb-3 leading-relaxed flex-1">
                  Practice questions you&apos;ve answered incorrectly or never
                  seen, prioritized by lowest accuracy.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">
                    {weakIds.length} questions
                  </span>
                  <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">
                    Instant feedback
                  </span>
                </div>
              </div>
            </Link>
          ) : (
            <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 p-5 flex flex-col items-center justify-center text-center h-full">
              <span className="text-3xl mb-2">🎯</span>
              <h3 className="font-bold text-gray-400 text-lg">
                Weakest Questions
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Complete a practice or exam first to unlock this mode
              </p>
            </div>
          )}
        </div>

        {/* ── SECTION STATS + STUDY ────────────────────────────────── */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Study by section
        </h2>
        <div className="space-y-2 mb-8">
          {sectionBreakdown.map(({ section, total, answered, accuracy, mastered, failed, unanswered }) => (
            <Link
              key={section}
              href={`${quizBase}?mode=section&section=${encodeURIComponent(section)}`}
              className="group block"
            >
              <div className="bg-white rounded-lg border border-gray-200 p-4 hover:border-blue-400 hover:shadow-sm transition-all">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{sectionIcons[section] ?? "📌"}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-800 text-sm group-hover:text-blue-700 truncate">
                        {section}
                      </h3>
                      <span className="text-xs text-gray-500 ml-2 shrink-0">
                        {answered}/{total} attempted
                      </span>
                    </div>
                    {/* Accuracy bar */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-100 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all ${
                            accuracy >= 70
                              ? "bg-green-500"
                              : accuracy >= 50
                              ? "bg-amber-400"
                              : accuracy > 0
                              ? "bg-red-400"
                              : "bg-gray-200"
                          }`}
                          style={{ width: `${Math.max(accuracy, 2)}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono text-gray-600 w-10 text-right">
                        {answered > 0 ? `${accuracy}%` : "—"}
                      </span>
                    </div>
                    {/* Mastery mini-bar */}
                    <div className="flex items-center gap-2 mt-1.5">
                      <div className="flex rounded-full h-1.5 overflow-hidden bg-gray-100 flex-1">
                        {mastered > 0 && (
                          <div
                            className="bg-green-400"
                            style={{ width: `${(mastered / total) * 100}%` }}
                          />
                        )}
                        {failed > 0 && (
                          <div
                            className="bg-red-300"
                            style={{ width: `${(failed / total) * 100}%` }}
                          />
                        )}
                      </div>
                      <span className="text-[10px] text-gray-400 shrink-0">
                        {mastered}/{total} mastered
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── FULL STATISTICS LINK ─────────────────────────────────── */}
        <Link href="/stats" className="group block mb-8">
          <div className="bg-slate-50 rounded-xl border-2 border-slate-200 p-5 hover:border-slate-400 hover:shadow-md transition-all cursor-pointer">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div className="flex-1">
                <h3 className="font-bold text-slate-800 text-base group-hover:text-slate-600">
                  Full Statistics
                </h3>
                <p className="text-sm text-slate-500">
                  Detailed history, question-by-question accuracy, session records,
                  and mastery tracking
                </p>
              </div>
              <span className="text-slate-400 group-hover:text-slate-600 text-lg">
                →
              </span>
            </div>
          </div>
        </Link>

        {/* ── ABOUT ────────────────────────────────────────────────── */}
        {bank === "pstar" && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 mb-6">
            <h2 className="text-sm font-semibold text-gray-800 mb-2">
              About PSTAR
            </h2>
            <p className="text-gray-600 text-xs mb-2">
              {totalQuestions} questions from the official Transport Canada PSTAR
              study guide (TP 11919, 7th Edition). Required for the Student Pilot
              Permit. Pass mark: 90%.
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="https://tc.canada.ca/en/aviation/publications/transport-canada-aeronautical-information-manual-tc-aim-tp-14371" target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 hover:underline">
                TC AIM Index
              </a>
              <span className="text-gray-300">|</span>
              <a href="https://tc.canada.ca/sites/default/files/2026-03/aim-2026-1_rac_en.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 hover:underline">
                RAC
              </a>
              <span className="text-gray-300">|</span>
              <a href="https://tc.canada.ca/sites/default/files/2026-03/aim-2026-1_com_en.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 hover:underline">
                COM
              </a>
              <span className="text-gray-300">|</span>
              <a href="https://tc.canada.ca/sites/default/files/2026-03/aim-2026-1_gen_en.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 hover:underline">
                GEN
              </a>
            </div>
          </div>
        )}
        {bank === "license" && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 mb-6">
            <h2 className="text-sm font-semibold text-gray-800 mb-2">
              About CPL Helicopter Exam
            </h2>
            <p className="text-gray-600 text-xs mb-2">
              {totalQuestions} questions from Transport Canada TP 13728E (Sample
              Examination — Helicopter). Covers Air Law, Navigation, Meteorology,
              and Aeronautics. Pass mark: 60%.
            </p>
            <div className="flex gap-3">
              <a href="/pdfs/aim-2025-2_access_en.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                Open TC AIM 2025-2
              </a>
              <a href="/pdfs/examcanada.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                Open Sample Exam
              </a>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-gray-200 py-6 px-4 text-center text-xs text-gray-400">
        <p>
          Based on official Transport Canada publications. Unofficial study aid
          — information may become obsolete.
        </p>
        <p className="mt-1">
          Always consult current Transport Canada publications.
        </p>
      </footer>
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
          Loading...
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
}
