"use client";

import Link from "next/link";
import { SECTIONS, questions } from "@/data/questions";

export default function HelicopterHomePage() {
  const totalQuestions = questions.length;
  const sectionCounts = SECTIONS.map((section) => ({
    section,
    count: questions.filter((q) => q.section === section).length,
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-blue-300 hover:text-white text-sm">
            ← All Exams
          </Link>
          <div className="text-sm text-blue-300 mb-1 mt-3">Transport Canada</div>
          <h1 className="text-3xl font-bold mb-2">
            Canada Helicopter Pilot Exam
          </h1>
          <p className="text-blue-200 text-sm">
            Practice Questions — Private &amp; Commercial Pilot Licences
            (Helicopter)
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10">
        {/* Info card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-10">
          <h2 className="text-base font-semibold text-gray-800 mb-2">
            About this practice app
          </h2>
          <p className="text-gray-600 text-sm mb-2">
            {totalQuestions} questions from Transport Canada TP 13728E (Sample
            Examination — Helicopter). Explanations reference TC AIM 2025-2
            (TP 14371E). All text is extracted verbatim from the source PDFs.
          </p>
          <div className="flex gap-3 mt-3">
            <a
              href="/pdfs/aim-2025-2_access_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline"
            >
              Open TC AIM 2025-2
            </a>
            <a
              href="/pdfs/examcanada.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline"
            >
              Open Sample Exam
            </a>
          </div>
        </div>

        {/* ── PRIMARY MODES ─────────────────────────────────────────── */}
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          Choose a mode
        </h2>
        <p className="text-sm text-gray-500 mb-5">
          Practice gives instant feedback. Exam simulates the real test.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {/* ── Practice ── */}
          <Link href="/helicopter/quiz?mode=practice" className="group">
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
                <strong>immediately see if you&apos;re right or wrong</strong>,
                plus the full AIM explanation and a direct link to the source
                PDF.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded-full">
                  {totalQuestions} questions
                </span>
                <span className="text-xs bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded-full">
                  Instant feedback
                </span>
                <span className="text-xs bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded-full">
                  AIM PDF links
                </span>
              </div>
            </div>
          </Link>

          {/* ── Exam ── */}
          <Link href="/helicopter/quiz?mode=exam" className="group">
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
                50 random questions drawn proportionally from all sections.{" "}
                <strong>No feedback until you submit.</strong> Pass with 60% or
                more. Full review with explanations after submission.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-indigo-200 text-indigo-800 px-2 py-0.5 rounded-full">
                  50 questions
                </span>
                <span className="text-xs bg-indigo-200 text-indigo-800 px-2 py-0.5 rounded-full">
                  60% to pass
                </span>
                <span className="text-xs bg-indigo-200 text-indigo-800 px-2 py-0.5 rounded-full">
                  All sections
                </span>
              </div>
            </div>
          </Link>
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
          {sectionCounts.map(({ section, count }) => {
            const icons: Record<string, string> = {
              "Air Law": "⚖️",
              Navigation: "🧭",
              Meteorology: "🌤️",
              "Aeronautics - General Knowledge": "✈️",
            };
            return (
              <Link
                key={section}
                href={`/helicopter/quiz?mode=section&section=${encodeURIComponent(section)}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer h-full">
                  <div className="text-2xl mb-2">{icons[section] ?? "📌"}</div>
                  <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-700">
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
            );
          })}
        </div>
      </main>

      <footer className="mt-16 border-t border-gray-200 py-6 px-4 text-center text-xs text-gray-400">
        <p>
          Based on Transport Canada TP 13728E (Sample Examination — Helicopter)
          and TC AIM 2025-2 (TP 14371E).
        </p>
        <p className="mt-1">
          Unofficial study aid — information may become obsolete. Always consult
          current Transport Canada publications.
        </p>
      </footer>
    </div>
  );
}
