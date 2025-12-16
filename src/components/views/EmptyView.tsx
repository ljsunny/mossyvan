"use client";

import { useDarkMode } from "@/app/providers/DarkModeProvider";

interface EmptyViewProps {
  title: string;
}

export function EmptyView({ title }: EmptyViewProps) {
  const { darkMode } = useDarkMode();

  return (
    <div className="hidden lg:flex max-w-[1440px] mx-auto items-center justify-center min-h-[calc(100vh-73px)]">
      <div className={`text-center ${darkMode ? "text-[#a0a0a0]" : "text-[#6b6b6b]"}`}>
        <h2 className="text-2xl mb-2">{title}</h2>
        <p>Coming soon...</p>
      </div>
    </div>
  );
}

