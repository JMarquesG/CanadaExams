"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GanderHomePage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/?bank=gander");
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-gray-400 text-sm">Redirecting...</div>
    </div>
  );
}
