import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Canada Aviation Exam Practice",
  description:
    "Practice for Transport Canada written examinations: Helicopter Pilot Exam (TP 13728E) and PSTAR (TP 11919).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">{children}</body>
    </html>
  );
}
