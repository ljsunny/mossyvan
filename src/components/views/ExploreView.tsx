"use client";

import { useState } from "react";
import { ExploreSidebar } from "../explore/ExploreSidebar";
import { ExploreContent } from "../explore/ExploreContent";
import { DealCard } from "../deals/DealCard";
import { useDarkMode } from "@/app/providers/DarkModeProvider";

const categories = ["alldeals", "happyhour", "flashdeals", "weeklyspecials"];

interface ExploreViewProps {
  deals: any[];
}

export function ExploreView({ deals }: ExploreViewProps) {
  const [selectedCategory, setSelectedCategory] = useState("all Deals");
  const { darkMode } = useDarkMode();
  console.log(categories)
  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden lg:flex max-w-[1440px] mx-auto">
        <ExploreSidebar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <ExploreContent deals={deals} />
      </div>

      {/* Mobile / Tablet Layout */}
      <div className="lg:hidden">
        {/* Category Pills */}
        <div className="px-4 py-3 flex gap-2 overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-[#c99a6e] text-white"
                  : darkMode
                    ? "bg-[#222] text-[#aaa]"
                    : "bg-white text-[#666]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
          
        {/* Deals */}
        <main className="px-4 space-y-4 pb-24">
          {deals.map(deal => (
            <DealCard key={deal.id} deal={deal} darkMode={darkMode} />
          ))}
        </main>
      </div>
    </>
  );
}

