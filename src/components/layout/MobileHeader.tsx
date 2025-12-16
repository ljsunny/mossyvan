"use client";

import { Search, Sun, Moon } from "lucide-react";
import { Logo1 } from "../logos";
import { useDarkMode } from "@/app/providers/DarkModeProvider";
import AddDealModal from "@/components/deals/AddDealModal";

interface MobileHeaderProps {
  searchTerm?: string;
  onSearchChange?: (value: string) => void;
  showSearch?: boolean;
}

export function MobileHeader({
  searchTerm = "",
  onSearchChange,
  showSearch = true,
}: MobileHeaderProps) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={`sticky top-0 z-10 backdrop-blur-lg border-b ${
      darkMode ? "bg-[#1a1a1a]/95 border-[#2a2a2a]" : "bg-[#faf9f7]/95 border-[#e8e5e0]"
    }`}>
      <div className="px-4 py-4 flex items-center justify-between">
        <Logo1 type="combined" darkMode={darkMode} size={28} />
        <div className="flex items-center gap-2">
          <AddDealModal />
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-xl ${
              darkMode ? "bg-[#2a2a2a] text-white" : "bg-[#f0ede8]"
            }`}
          >
            {darkMode ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
        </div>
      </div>
          
      {/* Search */}
      {showSearch && onSearchChange && (
        <div className="px-4 pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999]" />
            <input
              placeholder="Search deals..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className={`w-full pl-10 pr-3 py-2.5 rounded-xl border ${
                darkMode
                  ? "bg-[#222] border-[#2a2a2a] text-white"
                  : "bg-white border-[#e8e5e0]"
              }`}
            />
          </div>
        </div>
      )}
    </header>
  );
}

