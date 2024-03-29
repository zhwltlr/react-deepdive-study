import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern React Deep Dive Study",
  description: "모던 리액트 딥다이브 스터디",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-slate-900 text-white max-w-3xl mx-auto py-20 px-4 "
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
