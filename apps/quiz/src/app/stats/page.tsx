"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  loadStats,
  loadPstarStats,
  clearStats,
  clearPstarStats,
  getAggregateStats,
  deleteSession,
  deletePstarSession,
  StatsData,
  SessionRecord,
} from "@/lib/stats";
import { questions, SECTIONS } from "@/data/questions";
import { pstarQuestions, PSTAR_SECTIONS } from "@/data/pstar-questions";

type ExamBank = "helicopter" | "pstar";
type Tab = "overview" | "questions" | "sessions";
type QuestionSort = "id" | "answered" | "accuracy" | "viewed";

export default function StatsPage() {
  const [bank, setBank] = useState<ExamBank>("helicopter");
  const [heliData, setHeliData] = useState<StatsData | null>(null);
  const [pstarData, setPstarData] = useState<StatsData | null>(null);
  const [tab, setTab] = useState<Tab>("overview");
  const [questionSort, setQuestionSort] = useState<QuestionSort>("id");
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  useEffect(() => {
    setHeliData(loadStats());
    setPstarData(loadPstarStats());
  }, []);

  const data = bank === "helicopter" ? heliData : pstarData;
  const allQuestions = bank === "helicopter" ? questions : pstarQuestions;
  const sections = bank === "helicopter" ? SECTIONS : PSTAR_SECTIONS;
  const passPercent = bank === "helicopter" ? 60 : 90;

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-400 text-sm">Loading statistics...</div>
      </div>
    );
  }

  const agg = getAggregateStats(data);
  // Override exams passed calculation for PSTAR (90% pass mark)
  const examsPassed =
    bank === "pstar"
      ? data.sessions
          .filter((s) => s.finishedAt && s.mode === "exam")
          .filter(
            (s) =>
              s.totalQuestions > 0 &&
              (s.correct / s.totalQuestions) * 100 >= 90
          ).length
      : agg.examsPassed;

  const totalQuestions = allQuestions.length;

  const handleClear = () => {
    if (bank === "helicopter") {
      clearStats();
      setHeliData(loadStats());
    } else {
      clearPstarStats();
      setPstarData(loadPstarStats());
    }
    setShowClearConfirm(false);
  };

  // ─── Per-question data for the table ─────────────────────────────────────
  const questionRows = allQuestions.map((q) => {
    const qs = data.questionStats[q.id];
    return {
      id: q.id,
      section: q.section,
      question: q.question.split("\n")[0].slice(0, 80),
      timesViewed: qs?.timesViewed ?? 0,
      timesAnswered: qs?.timesAnswered ?? 0,
      timesCorrect: qs?.timesCorrect ?? 0,
      accuracy:
        qs && qs.timesAnswered > 0
          ? Math.round((qs.timesCorrect / qs.timesAnswered) * 100)
          : -1,
      lastAnsweredAt: qs?.lastAnsweredAt ?? null,
    };
  });

  const sortedRows = [...questionRows].sort((a, b) => {
    if (questionSort === "id") return a.id - b.id;
    if (questionSort === "answered") return b.timesAnswered - a.timesAnswered;
    if (questionSort === "accuracy") return b.accuracy - a.accuracy;
    if (questionSort === "viewed") return b.timesViewed - a.timesViewed;
    return 0;
  });

  // ─── Section breakdown ───────────────────────────────────────────────────
  const sectionBreakdown = sections.map((section) => {
    const sectionQs = allQuestions.filter((q) => q.section === section);
    const sectionStats = sectionQs
      .map((q) => data.questionStats[q.id])
      .filter(Boolean);
    const answered = sectionStats.filter((s) => s.timesAnswered > 0).length;
    const totalAns = sectionStats.reduce((s, q) => s + q.timesAnswered, 0);
    const totalCorr = sectionStats.reduce((s, q) => s + q.timesCorrect, 0);
    return {
      section,
      total: sectionQs.length,
      answered,
      totalAnswers: totalAns,
      totalCorrect: totalCorr,
      accuracy: totalAns > 0 ? Math.round((totalCorr / totalAns) * 100) : 0,
    };
  });

  // ─── Format date helper ──────────────────────────────────────────────────
  const fmtDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("en-CA", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const modeLabel = (s: SessionRecord) => {
    if (s.mode === "exam") return "Exam";
    if (s.mode === "practice") return "Practice";
    return `Section: ${s.section ?? "?"}`;
  };

  const accentColor = bank === "helicopter" ? "blue" : "indigo";
  const headerBg =
    bank === "helicopter" ? "bg-slate-800" : "bg-indigo-900";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`${headerBg} text-white py-6 px-4`}>
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <Link
                href="/"
                className="text-slate-400 hover:text-white text-sm"
              >
                ← Home
              </Link>
            </div>
            <h1 className="text-2xl font-bold">Your Statistics</h1>
            <p className="text-slate-400 text-sm mt-1">
              Full history of your practice and exam sessions
            </p>
          </div>
          <div>
            {!showClearConfirm ? (
              <button
                onClick={() => setShowClearConfirm(true)}
                className="text-xs text-slate-400 hover:text-red-400 transition-colors"
              >
                Clear {bank === "helicopter" ? "License" : "PSTAR"} data
              </button>
            ) : (
              <div className="flex gap-2 items-center">
                <span className="text-xs text-red-400">Are you sure?</span>
                <button
                  onClick={handleClear}
                  className="text-xs bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                >
                  Yes, clear
                </button>
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="text-xs bg-slate-600 hover:bg-slate-500 text-white px-3 py-1 rounded"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Exam bank toggle */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 flex items-center gap-6">
          <div className="flex gap-1 py-2">
            <button
              onClick={() => {
                setBank("helicopter");
                setTab("overview");
                setShowClearConfirm(false);
              }}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                bank === "helicopter"
                  ? "bg-blue-100 text-blue-800"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              License (CPL Helicopter)
            </button>
            <button
              onClick={() => {
                setBank("pstar");
                setTab("overview");
                setShowClearConfirm(false);
              }}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                bank === "pstar"
                  ? "bg-indigo-100 text-indigo-800"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              ✈️ PSTAR
            </button>
          </div>

          <div className="h-6 w-px bg-gray-200" />

          {/* Tabs */}
          <div className="flex gap-1">
            {(
              [
                { key: "overview", label: "Overview" },
                { key: "questions", label: "Questions" },
                { key: "sessions", label: "Session History" },
              ] as { key: Tab; label: string }[]
            ).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  tab === key
                    ? "border-slate-800 text-slate-800"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* ═══ OVERVIEW TAB ═══════════════════════════════════════════════ */}
        {tab === "overview" && (
          <>
            {/* Top stats cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <StatCard
                label="Questions Seen"
                value={`${agg.totalQuestionsViewed} / ${totalQuestions}`}
                sub={`${totalQuestions > 0 ? Math.round((agg.totalQuestionsViewed / totalQuestions) * 100) : 0}% coverage`}
                color="blue"
              />
              <StatCard
                label="Total Answers"
                value={String(agg.totalAnswers)}
                sub={`${agg.totalCorrect} correct`}
                color="green"
              />
              <StatCard
                label="Overall Accuracy"
                value={`${agg.overallAccuracy}%`}
                sub={`${agg.totalCorrect} / ${agg.totalAnswers}`}
                color={agg.overallAccuracy >= passPercent ? "green" : "amber"}
              />
              <StatCard
                label="Sessions"
                value={String(agg.completedSessions)}
                sub={`${agg.totalSessions - agg.completedSessions} in progress`}
                color="purple"
              />
            </div>

            {/* Session type breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-5">
                <div className="text-3xl font-bold text-indigo-700">
                  {agg.examSessions}
                </div>
                <div className="text-sm text-indigo-600 font-medium">
                  Exams Completed
                </div>
                <div className="text-xs text-indigo-500 mt-1">
                  {examsPassed} passed (
                  {agg.examSessions > 0
                    ? Math.round((examsPassed / agg.examSessions) * 100)
                    : 0}
                  %) — pass mark: {passPercent}%
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5">
                <div className="text-3xl font-bold text-emerald-700">
                  {agg.practiceSessions}
                </div>
                <div className="text-sm text-emerald-600 font-medium">
                  Practice Sessions
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                <div className="text-3xl font-bold text-blue-700">
                  {agg.sectionSessions}
                </div>
                <div className="text-sm text-blue-600 font-medium">
                  Section Studies
                </div>
              </div>
            </div>

            {/* Section breakdown */}
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Accuracy by Section
            </h2>
            <div className="bg-white border border-gray-200 rounded-lg divide-y divide-gray-100">
              {sectionBreakdown.map((s) => (
                <div
                  key={s.section}
                  className="flex items-center gap-4 px-5 py-4"
                >
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-800">
                      {s.section}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {s.answered}/{s.total} questions attempted
                      {s.totalAnswers > 0 &&
                        ` · ${s.totalAnswers} total answers`}
                    </div>
                  </div>
                  <div className="w-32">
                    <div className="bg-gray-100 rounded-full h-2 mb-1">
                      <div
                        className={`h-2 rounded-full ${
                          s.accuracy >= 70
                            ? "bg-green-500"
                            : s.accuracy >= 50
                            ? "bg-amber-400"
                            : "bg-red-400"
                        }`}
                        style={{ width: `${Math.max(s.accuracy, 2)}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-sm font-mono text-gray-600 w-12 text-right">
                    {s.totalAnswers > 0 ? `${s.accuracy}%` : "—"}
                  </div>
                </div>
              ))}
            </div>

            {/* Weakest questions */}
            {(() => {
              const weak = questionRows
                .filter((q) => q.timesAnswered >= 2 && q.accuracy < 60)
                .sort((a, b) => a.accuracy - b.accuracy)
                .slice(0, 10);
              if (weak.length === 0) return null;
              return (
                <>
                  <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4">
                    Weakest Questions
                  </h2>
                  <div className="bg-white border border-gray-200 rounded-lg divide-y divide-gray-100">
                    {weak.map((q) => (
                      <div
                        key={q.id}
                        className="flex items-center gap-3 px-5 py-3"
                      >
                        <span className="text-xs font-mono text-gray-400 w-8">
                          Q{q.id}
                        </span>
                        <span className="text-sm text-gray-700 flex-1 truncate">
                          {q.question}
                        </span>
                        <span className="text-xs text-gray-500">
                          {q.timesCorrect}/{q.timesAnswered}
                        </span>
                        <span
                          className={`text-xs font-bold w-10 text-right ${
                            q.accuracy < 30
                              ? "text-red-600"
                              : "text-amber-600"
                          }`}
                        >
                          {q.accuracy}%
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              );
            })()}

            {/* Never seen questions */}
            {(() => {
              const unseen = questionRows.filter((q) => q.timesViewed === 0);
              if (unseen.length === 0) return null;
              return (
                <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-5">
                  <h3 className="text-sm font-semibold text-amber-800 mb-1">
                    {unseen.length} question
                    {unseen.length !== 1 ? "s" : ""} never seen
                  </h3>
                  <p className="text-xs text-amber-600">
                    IDs: {unseen.map((q) => q.id).join(", ")}
                  </p>
                </div>
              );
            })()}
          </>
        )}

        {/* ═══ QUESTIONS TAB ═════════════════════════════════════════════ */}
        {tab === "questions" && (
          <>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-gray-500">Sort by:</span>
              {(
                [
                  { key: "id", label: "ID" },
                  { key: "answered", label: "Most Answered" },
                  { key: "accuracy", label: "Accuracy" },
                  { key: "viewed", label: "Most Viewed" },
                ] as { key: QuestionSort; label: string }[]
              ).map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setQuestionSort(key)}
                  className={`px-3 py-1 text-xs rounded-full transition-colors ${
                    questionSort === key
                      ? "bg-slate-800 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-12 gap-2 px-4 py-2 bg-gray-50 text-xs font-medium text-gray-500 border-b border-gray-200">
                <div className="col-span-1">ID</div>
                <div className="col-span-2">Section</div>
                <div className="col-span-3">Question</div>
                <div className="col-span-1 text-center">Viewed</div>
                <div className="col-span-1 text-center">Answered</div>
                <div className="col-span-1 text-center">Correct</div>
                <div className="col-span-1 text-center">Accuracy</div>
                <div className="col-span-2 text-right">Last Answer</div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-gray-50">
                {sortedRows.map((q) => (
                  <div
                    key={q.id}
                    className="grid grid-cols-12 gap-2 px-4 py-2.5 text-xs hover:bg-gray-50 items-center"
                  >
                    <div className="col-span-1 font-mono text-gray-500">
                      {q.id}
                    </div>
                    <div className="col-span-2 text-gray-600 truncate">
                      {q.section}
                    </div>
                    <div className="col-span-3 text-gray-700 truncate">
                      {q.question}
                    </div>
                    <div className="col-span-1 text-center text-gray-500">
                      {q.timesViewed || "—"}
                    </div>
                    <div className="col-span-1 text-center text-gray-500">
                      {q.timesAnswered || "—"}
                    </div>
                    <div className="col-span-1 text-center text-gray-500">
                      {q.timesCorrect || "—"}
                    </div>
                    <div className="col-span-1 text-center">
                      {q.accuracy >= 0 ? (
                        <span
                          className={`font-bold ${
                            q.accuracy >= 70
                              ? "text-green-600"
                              : q.accuracy >= 50
                              ? "text-amber-600"
                              : "text-red-600"
                          }`}
                        >
                          {q.accuracy}%
                        </span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </div>
                    <div className="col-span-2 text-right text-gray-400">
                      {q.lastAnsweredAt ? fmtDate(q.lastAnsweredAt) : "—"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ═══ SESSIONS TAB ══════════════════════════════════════════════ */}
        {tab === "sessions" && (
          <>
            {data.sessions.length === 0 ? (
              <div className="text-center py-16 text-gray-400 text-sm">
                No sessions yet. Start a practice or exam to see your history
                here.
              </div>
            ) : (
              <div className="space-y-3">
                {[...data.sessions].reverse().map((s) => {
                  const pct =
                    s.totalQuestions > 0
                      ? Math.round((s.correct / s.totalQuestions) * 100)
                      : 0;
                  const isFinished = !!s.finishedAt;
                  const passMark = passPercent;
                  const quizBase = bank === "helicopter" ? "/helicopter/quiz" : "/pstar/quiz";
                  const modeParam = s.mode === "exam" ? "exam" : s.mode === "practice" ? "practice" : `section&section=${encodeURIComponent(s.section ?? "")}`;
                  const sessionUrl = `${quizBase}?mode=${modeParam}&session=${s.id}`;

                  return (
                    <div
                      key={s.id}
                      className={`bg-white border rounded-lg p-5 ${
                        !isFinished
                          ? "border-amber-200"
                          : pct >= passMark
                          ? "border-green-200"
                          : "border-red-200"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span
                            className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                              s.mode === "exam"
                                ? "bg-indigo-100 text-indigo-700"
                                : s.mode === "practice"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {modeLabel(s)}
                          </span>
                          {!isFinished && (
                            <span className="text-xs text-amber-600 font-medium">
                              In progress
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-400">
                          {fmtDate(s.startedAt)}
                        </span>
                      </div>

                      {isFinished ? (
                        <>
                          <div className="flex items-center gap-4">
                            <span
                              className={`text-2xl font-bold ${
                                pct >= passMark
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                            >
                              {pct}%
                            </span>
                            <div className="flex-1">
                              <div className="bg-gray-100 rounded-full h-2">
                                <div
                                  className={`h-2 rounded-full ${
                                    pct >= passMark
                                      ? "bg-green-500"
                                      : "bg-red-400"
                                  }`}
                                  style={{ width: `${pct}%` }}
                                />
                              </div>
                            </div>
                            <span className="text-xs text-gray-500">
                              {s.correct}/{s.answered} correct
                              {s.answered < s.totalQuestions &&
                                ` (${s.totalQuestions - s.answered} skipped)`}
                            </span>
                            {s.mode === "exam" && (
                              <span
                                className={`text-xs font-bold ${
                                  pct >= passMark
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              >
                                {pct >= passMark ? "PASS" : "FAIL"}
                              </span>
                            )}
                          </div>
                          {/* Review button for completed sessions */}
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <Link
                              href={sessionUrl}
                              className="text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                            >
                              Review answers →
                            </Link>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-xs text-gray-500 mb-3">
                            {s.answered}/{s.totalQuestions} answered · started{" "}
                            {fmtDate(s.startedAt)}
                          </div>
                          {/* Continue / Delete for in-progress sessions */}
                          <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                            <Link
                              href={sessionUrl}
                              className="text-xs font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg transition-colors"
                            >
                              Continue →
                            </Link>
                            <button
                              onClick={() => {
                                if (bank === "helicopter") {
                                  deleteSession(s.id);
                                  setHeliData(loadStats());
                                } else {
                                  deletePstarSession(s.id);
                                  setPstarData(loadPstarStats());
                                }
                              }}
                              className="text-xs text-red-500 hover:text-red-700 transition-colors"
                            >
                              Delete
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

// ─── Small stat card component ─────────────────────────────────────────────
function StatCard({
  label,
  value,
  sub,
  color,
}: {
  label: string;
  value: string;
  sub: string;
  color: "blue" | "green" | "amber" | "purple";
}) {
  const colors = {
    blue: "bg-blue-50 border-blue-200 text-blue-700",
    green: "bg-green-50 border-green-200 text-green-700",
    amber: "bg-amber-50 border-amber-200 text-amber-700",
    purple: "bg-purple-50 border-purple-200 text-purple-700",
  };
  return (
    <div className={`border rounded-lg p-4 ${colors[color]}`}>
      <div className="text-xs font-medium opacity-75 mb-1">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs opacity-60 mt-0.5">{sub}</div>
    </div>
  );
}
