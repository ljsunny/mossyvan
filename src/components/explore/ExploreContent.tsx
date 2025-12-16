"use client";

import { DealCard } from "../deals/DealCard";
import { useDarkMode } from "@/app/providers/DarkModeProvider";

interface ExploreContentProps {
  deals: any[];
}

export function ExploreContent({ deals }: ExploreContentProps) {
  const { darkMode } = useDarkMode();

  return (
    <main className="flex-1 p-6">

      <div className="max-w-2xl mx-auto space-y-6">
        {deals.map((deal) => (
          <DealCard key={deal.id} deal={deal} darkMode={darkMode} />
        ))}
      </div>
    </main>
  );
}

