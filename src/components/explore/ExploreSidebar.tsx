"use client";

import { Search } from "lucide-react";
import { useDarkMode } from "@/app/providers/DarkModeProvider";

type Categories = readonly { key: string; label: string }[];
type CategoryKey<T extends Categories> = T[number]["key"];

interface ExploreSidebarProps<T extends Categories> {
  categories: T;
  selectedCategory: CategoryKey<T>;
  onCategoryChange: (category: CategoryKey<T>) => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function ExploreSidebar<T extends Categories>({
  categories,
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
}: ExploreSidebarProps<T>) {
  const { darkMode } = useDarkMode();

  return (
    <aside
      className={`w-64 sticky top-[73px] h-[calc(100vh-73px)] p-6 border-r ${
        darkMode ? "bg-[#1a1a1a] border-[#2a2a2a]" : "bg-[#faf9f7] border-[#e8e5e0]"
      }`}
    >
      <h2 className={`mb-1 ${darkMode ? "text-white" : "text-[#2a2a2a]"}`}>
        Vancouver, BC
      </h2>
      <p className={`${darkMode ? "text-[#a0a0a0]" : "text-[#6b6b6b]"} mb-4`}>
        Explore local deals
      </p>

      {/* Search */}
      <div className="relative mb-6">
        <Search
          className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
            darkMode ? "text-[#808080]" : "text-[#999999]"
          }`}
        />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className={`w-full pl-10 pr-3 py-2.5 rounded-xl border ${
            darkMode
              ? "bg-[#222222] text-white border-[#2a2a2a] placeholder:text-[#808080]"
              : "bg-white text-[#2a2a2a] border-[#e8e5e0] placeholder:text-[#999999]"
          }`}
        />
      </div>

      {/* Category Filter */}
      <div>
        <h3 className={`mb-3 ${darkMode ? "text-[#a0a0a0]" : "text-[#6b6b6b]"}`}>
          Categories
        </h3>

        <div className="space-y-1">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => onCategoryChange(key as CategoryKey<T>)}
              className={`w-full text-left px-4 py-2.5 rounded-xl transition-all ${
                selectedCategory === key
                  ? "bg-[#c99a6e] text-white"
                  : darkMode
                  ? "text-[#a0a0a0] hover:bg-[#222222]"
                  : "text-[#6b6b6b] hover:bg-[#f0ede8]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
