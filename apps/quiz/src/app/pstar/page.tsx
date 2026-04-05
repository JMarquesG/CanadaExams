"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PSTAR_SECTIONS, pstarQuestions } from "@/data/pstar-questions";
import { loadPstarStats, getWeakQuestionIds } from "@/lib/stats";

export default function PstarHomePage() {
  const totalQuestions = pstarQuestions.length;
  const sectionCounts = PSTAR_SECTIONS.map((section) => ({
    section,
    count: pstarQuestions.filter((q) => q.section === section).length,
  }));

  const [weakCount, setWeakCount] = useState(0);
  const [weakIds, setWeakIds] = useState<number[]>([]);

  useEffect(() => {
    const stats = loadPstarStats();
    const ids = getWeakQuestionIds(stats, pstarQuestions.map((q) => q.id), 50);
    setWeakIds(ids);
    setWeakCount(ids.length);
  }, []);

  const sectionIcons: Record<string, string> = {
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
      <header className="bg-indigo-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-indigo-300 hover:text-white text-sm">
            ← All Exams
          </Link>
          <div className="text-sm text-indigo-300 mb-1 mt-3">
            Transport Canada — TP 11919
          </div>
          <h1 className="text-3xl font-bold mb-2">
            PSTAR Exam Practice
          </h1>
          <p className="text-indigo-200 text-sm">
            Pre-Solo Test of Air Regulations — Student Pilot Permit
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10">
        {/* Info card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-10">
          <h2 className="text-base font-semibold text-gray-800 mb-2">
            About this exam bank
          </h2>
          <p className="text-gray-600 text-sm mb-3">
            {totalQuestions} questions from the official Transport Canada PSTAR
            study guide (TP 11919, 7th Edition). The PSTAR is required for the
            Student Pilot Permit and covers Canadian Aviation Regulations
            (CARs), the Aeronautical Information Manual (AIM), and related
            publications.
          </p>
          <div className="border-t border-gray-100 pt-3">
            <p className="text-xs text-gray-500 font-medium mb-2">
              Reference material (TC AIM 2026-1)
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="https://www.canada.ca/sites/default/files/2026-03/aim-2026-1_access_en.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 hover:underline">
                Full TC AIM PDF
              </a>
              <span className="text-gray-300">|</span>
              <a href="https://www.canada.ca/sites/default/files/2026-03/aim-2026-1_com_en.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 hover:underline">
                COM — Communications
              </a>
              <span className="text-gray-300">|</span>
              <a href="https://www.canada.ca/sites/default/files/2026-03/aim-2026-1_rac_en.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 hover:underline">
                RAC — Rules of the Air
              </a>
              <span className="text-gray-300">|</span>
              <a href="https://www.canada.ca/sites/default/files/2026-03/aim-2026-1_gen_en.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 hover:underline">
                GEN — General
              </a>
              <span className="text-gray-300">|</span>
              <a href="https://www.canada.ca/sites/default/files/2026-03/aim-2026-1_aga_en.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 hover:underline">
                AGA — Aerodromes
              </a>
              <span className="text-gray-300">|</span>
              <a href="https://www.canada.ca/sites/default/files/2026-03/aim-2026-1_air_en.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 hover:underline">
                AIR — Airmanship
              </a>
              <span className="text-gray-300">|</span>
              <a href="https://www.canada.ca/sites/default/files/2026-03/aim-2026-1_met_en.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 hover:underline">
                MET — Meteorology
              </a>
              <span className="text-gray-300">|</span>
              <a href="https://www.canada.ca/sites/default/files/2026-03/aim-2026-1_sar_en.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 hover:underline">
                SAR — Search &amp; Rescue
              </a>
              <span className="text-gray-300">|</span>
              <a href="https://www.canada.ca/sites/default/files/2026-03/aim-2026-1_map_en.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 hover:underline">
                MAP — Charts &amp; Pubs
              </a>
              <span className="text-gray-300">|</span>
              <a href="https://www.canada.ca/sites/default/files/2026-03/aim-2026-1_lra_en.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 hover:underline">
                LRA — Licensing
              </a>
            </div>
          </div>
        </div>

        {/* ── PRIMARY MODES ─────────────────────────────────────────── */}
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          Choose a mode
        </h2>
        <p className="text-sm text-gray-500 mb-5">
          Practice gives instant feedback. Exam simulates the real test.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {/* ── Practice ── */}
          <Link href="/pstar/quiz?mode=practice" className="group">
            <div className="bg-emerald-50 rounded-xl border-2 border-emerald-200 p-6 hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer h-full">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">⚡</span>
                <div>
                  <h3 className="font-bold text-emerald-900 text-lg group-hover:text-emerald-700">
                    Practice
                  </h3>
                  <span className="text-xs text-emerald-600 font-medium">
                    Recommended for studying
                  </span>
                </div>
              </div>
              <p className="text-sm text-emerald-800 mb-3 leading-relaxed">
                All {totalQuestions} questions in random order. Select an answer
                and{" "}
                <strong>immediately see if you&apos;re right or wrong</strong>{" "}
                with CAR/AIM references.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded-full">
                  {totalQuestions} questions
                </span>
                <span className="text-xs bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded-full">
                  Instant feedback
                </span>
                <span className="text-xs bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded-full">
                  CAR references
                </span>
              </div>
            </div>
          </Link>

          {/* ── Exam ── */}
          <Link href="/pstar/quiz?mode=exam" className="group">
            <div className="bg-indigo-50 rounded-xl border-2 border-indigo-200 p-6 hover:border-indigo-500 hover:shadow-md transition-all cursor-pointer h-full">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🎓</span>
                <div>
                  <h3 className="font-bold text-indigo-900 text-lg group-hover:text-indigo-700">
                    Exam Simulation
                  </h3>
                  <span className="text-xs text-indigo-600 font-medium">
                    Test yourself under exam conditions
                  </span>
                </div>
              </div>
              <p className="text-sm text-indigo-800 mb-3 leading-relaxed">
                50 random questions drawn from all sections.{" "}
                <strong>No feedback until you submit.</strong> Pass with 90% or
                more (official PSTAR pass mark).
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-indigo-200 text-indigo-800 px-2 py-0.5 rounded-full">
                  50 questions
                </span>
                <span className="text-xs bg-indigo-200 text-indigo-800 px-2 py-0.5 rounded-full">
                  90% to pass
                </span>
                <span className="text-xs bg-indigo-200 text-indigo-800 px-2 py-0.5 rounded-full">
                  All sections
                </span>
              </div>
            </div>
          </Link>

          {/* ── Weakest Questions ── */}
          {weakCount > 0 ? (
            <Link href={`/pstar/quiz?mode=practice&weak=${weakIds.join(",")}`} className="group">
              <div className="bg-amber-50 rounded-xl border-2 border-amber-200 p-6 hover:border-amber-500 hover:shadow-md transition-all cursor-pointer h-full">
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
                <p className="text-sm text-amber-800 mb-3 leading-relaxed">
                  Practice the questions you&apos;ve answered incorrectly or
                  never seen. <strong>Prioritized by lowest accuracy.</strong>
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">
                    {weakCount} questions
                  </span>
                  <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">
                    Instant feedback
                  </span>
                  <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">
                    Adaptive
                  </span>
                </div>
              </div>
            </Link>
          ) : (
            <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 p-6 flex flex-col items-center justify-center text-center h-full">
              <span className="text-3xl mb-2">🎯</span>
              <h3 className="font-bold text-gray-400 text-lg">Weakest Questions</h3>
              <p className="text-sm text-gray-400 mt-1">
                Complete a practice or exam first to unlock this mode
              </p>
            </div>
          )}
        </div>

        {/* ── STATISTICS ──────────────────────────────────────────── */}
        <Link href="/stats" className="group block mb-10">
          <div className="bg-slate-50 rounded-xl border-2 border-slate-200 p-5 hover:border-slate-400 hover:shadow-md transition-all cursor-pointer">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div className="flex-1">
                <h3 className="font-bold text-slate-800 text-base group-hover:text-slate-600">
                  Your Statistics
                </h3>
                <p className="text-sm text-slate-500">
                  View your full history, question-by-question accuracy, session
                  records, and weakest areas
                </p>
              </div>
              <span className="text-slate-400 group-hover:text-slate-600 text-lg">
                →
              </span>
            </div>
          </div>
        </Link>

        {/* ── BY SECTION ────────────────────────────────────────────── */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Study by section
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sectionCounts.map(({ section, count }) => (
            <Link
              key={section}
              href={`/pstar/quiz?mode=section&section=${encodeURIComponent(section)}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:border-indigo-400 hover:shadow-md transition-all cursor-pointer h-full">
                <div className="text-2xl mb-2">
                  {sectionIcons[section] ?? "📌"}
                </div>
                <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-indigo-700">
                  {section}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  Study {section.toLowerCase()} questions only
                </p>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                  {count} question{count !== 1 ? "s" : ""}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="mt-16 border-t border-gray-200 py-6 px-4 text-center text-xs text-gray-400">
        <p>
          Based on Transport Canada TP 11919 (PSTAR Study Guide, 7th Edition).
        </p>
        <p className="mt-1">
          Unofficial study aid — information may become obsolete. Always consult
          current Transport Canada publications.
        </p>
      </footer>
    </div>
  );
}
