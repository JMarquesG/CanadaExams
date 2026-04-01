"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import QuizClient from "@/components/QuizClient";
import PracticeClient from "@/components/PracticeClient";
import ExamClient from "@/components/ExamClient";

function QuizRouter() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") ?? "all";

  if (mode === "practice") return <PracticeClient />;
  if (mode === "exam") return <ExamClient />;
  return <QuizClient />;
}

export default function QuizPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
          Loading…
        </div>
      }
    >
      <QuizRouter />
    </Suspense>
  );
}
