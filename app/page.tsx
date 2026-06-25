import type { Metadata } from "next";
import { Counter } from "@/components/Counter";

export const metadata: Metadata = {
  title: "Next.js学習ページ",
  description: "Next.jsの基本機能を学習するページです。",
};

export default function Home() {
  return (
    <main>
      <h1>Server and Client Components</h1>

      <p>この部分はServer Componentです。</p>

      <Counter />
    </main>
  );
}
