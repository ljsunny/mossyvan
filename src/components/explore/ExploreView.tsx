"use client";

import { useMemo, useState } from "react";
import { ExploreSidebar } from "./ExploreSidebar";
import { ExploreContent } from "./ExploreContent";
import { DealCard } from "../deals/DealCard";
import { useDarkMode } from "@/app/providers/DarkModeProvider";

const CATEGORIES = [
  { key: "alldeals", label: "All" },
  { key: "happyhour", label: "Happy Hour" },
  { key: "flashdeals", label: "Flash Deals" },
  { key: "weeklyspecials", label: "Weekly Specials" },
] as const;

type CategoryKey = typeof CATEGORIES[number]["key"];

interface ExploreViewProps {
  deals: any[];
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function ExploreView({ deals, searchTerm, onSearchChange }: ExploreViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("alldeals");
  const { darkMode } = useDarkMode();

  const filteredDeals = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return deals.filter((deal) => {
      const matchesCategory =
        selectedCategory === "alldeals" || deal.category === selectedCategory;

      const matchesSearch =
        !term ||
        deal.title?.toLowerCase().includes(term) ||
        deal.description?.toLowerCase().includes(term) ||
        deal.location?.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [deals, searchTerm, selectedCategory]);

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden lg:flex max-w-[1440px] mx-auto">
        <ExploreSidebar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
          categories={CATEGORIES}
        />
        <ExploreContent deals={filteredDeals} />
      </div>

      {/* Mobile / Tablet Layout */}
      <div className="lg:hidden">
        <div className="px-4 py-3 flex gap-2 overflow-x-auto">
          {CATEGORIES.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedCategory === key
                  ? "bg-[#c99a6e] text-white"
                  : darkMode
                    ? "bg-[#222] text-[#aaa]"
                    : "bg-white text-[#666]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <main className="px-4 space-y-4 pb-24">
          {filteredDeals.map((deal) => (
            <DealCard key={deal.id} deal={deal} darkMode={darkMode} />
          ))}
        </main>
      </div>
    </>
  );
}
