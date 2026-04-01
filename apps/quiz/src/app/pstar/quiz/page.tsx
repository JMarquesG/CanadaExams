"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PstarQuizClient from "@/components/PstarQuizClient";
import PstarPracticeClient from "@/components/PstarPracticeClient";
import PstarExamClient from "@/components/PstarExamClient";

function PstarQuizRouter() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") ?? "all";
  const sessionId = searchParams.get("session") ?? undefined;

  if (mode === "practice") return <PstarPracticeClient sessionId={sessionId} />;
  if (mode === "exam") return <PstarExamClient sessionId={sessionId} />;
  return <PstarQuizClient sessionId={sessionId} />;
}

export default function PstarQuizPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
          Loading…
        </div>
      }
    >
      <PstarQuizRouter />
    </Suspense>
  );
}
