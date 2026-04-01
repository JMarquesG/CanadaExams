"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sm text-blue-300 mb-2">Transport Canada</div>
          <h1 className="text-3xl font-bold mb-3">
            Canada Aviation Exam Practice
          </h1>
          <p className="text-blue-200 text-sm max-w-xl mx-auto">
            Practice for Transport Canada written examinations. Choose an exam
            bank below to start studying.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Select an exam bank
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Helicopter Exam */}
          <Link href="/helicopter" className="group">
            <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🚁</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-700">
                    Helicopter Pilot Exam
                  </h3>
                  <span className="text-xs text-gray-500 font-medium">
                    TP 13728E — Sample Examination
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                100 questions from the official Transport Canada sample
                examination for Private &amp; Commercial Pilot Licences
                (Helicopter). Covers Air Law, Navigation, Meteorology, and
                Aeronautics.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                  100 questions
                </span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                  4 sections
                </span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                  AIM explanations
                </span>
              </div>
            </div>
          </Link>

          {/* PSTAR Exam */}
          <Link href="/pstar" className="group">
            <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-indigo-500 hover:shadow-lg transition-all cursor-pointer h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">✈️</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-indigo-700">
                    PSTAR Exam
                  </h3>
                  <span className="text-xs text-gray-500 font-medium">
                    TP 11919 — Student Pilot Permit
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                192 questions from the official Transport Canada PSTAR study
                guide. Required for the Student Pilot Permit or Private Pilot
                Licence for Foreign and Military Applicants.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">
                  192 questions
                </span>
                <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">
                  14 sections
                </span>
                <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">
                  CAR references
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Statistics link */}
        <div className="mt-10">
          <Link href="/stats" className="group block">
            <div className="bg-slate-50 rounded-xl border-2 border-slate-200 p-5 hover:border-slate-400 hover:shadow-md transition-all cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-800 text-base group-hover:text-slate-600">
                    Your Statistics
                  </h3>
                  <p className="text-sm text-slate-500">
                    View your full history, question-by-question accuracy, and
                    weakest areas
                  </p>
                </div>
                <span className="text-slate-400 group-hover:text-slate-600 text-lg">
                  →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </main>

      <footer className="mt-16 border-t border-gray-200 py-6 px-4 text-center text-xs text-gray-400">
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
