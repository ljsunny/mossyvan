"use client";

import { useEffect, useState } from "react";
import { Logo1 } from "./logos";
import { supabase } from "@/lib/supabase";
import { Search, Sun, Moon, Home, Compass, Plus, Heart, User } from "lucide-react";
import { DealCard } from "./DealCard";
import { sortDeals } from "@/lib/sortDeals";
import Loading from "./ui/loading";

interface HomePageProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

const categories = ["All Deals", "Happy Hour", "Flash Deals", "Weekly Specials"];

export function HomePage({ darkMode, onToggleDarkMode }: HomePageProps) {
  const [selectedCategory, setSelectedCategory] = useState("All Deals");
  const [activeNav, setActiveNav] = useState("Home");

  const [deals, setDeals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDeals() {
      const { data, error } = await supabase
        .from("deals")
        .select("*")
        .order("end_date", { ascending: true })
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Supabase error:", error);
      } else if (data) {
        setDeals(sortDeals(data));
      }

      setLoading(false);
    }

    loadDeals();
  }, []);

  // --- simple loading UI ---
  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-[#1a1a1a]" : "bg-[#faf9f7]"}`}>
        <Loading/>
      </div>
    );
  }

  return (
    
    <div className={`min-h-screen transition-colors duration-300 lg:pb-0 pb-20 ${
      darkMode ? "bg-[#1a1a1a]" : "bg-[#faf9f7]"
    }`}>

      {/* Desktop Top Navigation */}
      <nav className={`hidden lg:block sticky top-0 z-20 backdrop-blur-lg border-b ${
        darkMode ? "bg-[#1a1a1a]/95 border-[#2a2a2a]" : "bg-[#faf9f7]/95 border-[#e8e5e0]"
      }`}>
        <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
          <Logo1 type="combined" darkMode={darkMode} size={28} />
          <div className="flex items-center gap-8">
            <DesktopNavButton
              icon={<Home className="w-5 h-5" />}
              label="Home"
              active={activeNav === "Home"}
              darkMode={darkMode}
              onClick={() => setActiveNav("Home")}
            />
            <DesktopNavButton
              icon={<Compass className="w-5 h-5" />}
              label="Explore"
              active={activeNav === "Explore"}
              darkMode={darkMode}
              onClick={() => setActiveNav("Explore")}
            />
            <DesktopNavButton
              icon={<Heart className="w-5 h-5" />}
              label="Saved"
              active={activeNav === "Favorites"}
              darkMode={darkMode}
              onClick={() => setActiveNav("Favorites")}
            />
            <DesktopNavButton
              icon={<User className="w-5 h-5" />}
              label="Profile"
              active={activeNav === "Profile"}
              darkMode={darkMode}
              onClick={() => setActiveNav("Profile")}
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              className="px-6 py-2.5 rounded-xl bg-[#c99a6e] text-white hover:bg-[#a67c52] flex items-center gap-2"
              onClick={() => setActiveNav("Add")}
            >
              <Plus className="w-5 h-5" />
              Add Deal
            </button>
            <button
              onClick={onToggleDarkMode}
              className={`p-2.5 rounded-xl ${
                darkMode
                  ? "bg-[#2a2a2a] text-white hover:bg-[#333333]"
                  : "bg-[#f0ede8] text-[#2a2a2a] hover:bg-[#e8e5e0]"
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Desktop Layout */}
      <div className="hidden lg:flex max-w-[1440px] mx-auto">

        {/* Left Sidebar */}
        <aside className={`w-64 sticky top-[73px] h-[calc(100vh-73px)] p-6 border-r ${
          darkMode ? "bg-[#1a1a1a] border-[#2a2a2a]" : "bg-[#faf9f7] border-[#e8e5e0]"
        }`}>
          <h2 className={`mb-1 ${darkMode ? "text-white" : "text-[#2a2a2a]"}`}>Vancouver, BC</h2>
          <p className={`${darkMode ? "text-[#a0a0a0]" : "text-[#6b6b6b]"} mb-4`}>Explore local deals</p>

          {/* Search */}
          <div className="relative mb-6">
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
              darkMode ? "text-[#808080]" : "text-[#999999]"
            }`} />
            <input
              type="text"
              placeholder="Search..."
              className={`w-full pl-10 pr-3 py-2.5 rounded-xl border ${
                darkMode
                  ? "bg-[#222222] text-white border-[#2a2a2a] placeholder:text-[#808080]"
                  : "bg-white text-[#2a2a2a] border-[#e8e5e0] placeholder:text-[#999999]"
              }`}
            />
          </div>

          {/* Category Filter */}
          <div>
            <h3 className={`mb-3 ${darkMode ? "text-[#a0a0a0]" : "text-[#6b6b6b]"}`}>Categories</h3>

            <div className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl transition-all ${
                    selectedCategory === category
                      ? "bg-[#c99a6e] text-white"
                      : darkMode
                        ? "text-[#a0a0a0] hover:bg-[#222222]"
                        : "text-[#6b6b6b] hover:bg-[#f0ede8]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          <h2 className={`mb-6 ${darkMode ? "text-white" : "text-[#2a2a2a]"}`}>
            This week's top deals
          </h2>

          <div className="grid grid-cols-2 xl:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <DealCard key={deal.id} deal={deal} darkMode={darkMode} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

/* ---------- Reusable Buttons ---------- */

function NavButton({ icon, label, active, darkMode, onClick, isCenter }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 ${
        active ? "text-[#c99a6e]" : darkMode ? "text-[#808080]" : "text-[#999999]"
      }`}
    >
      {icon}
      {!isCenter && <span className="text-xs">{label}</span>}
    </button>
  );
}

function DesktopNavButton({ icon, label, active, darkMode, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 rounded-xl ${
        active
          ? "text-[#c99a6e] bg-[#c99a6e]/10"
          : darkMode
            ? "text-[#a0a0a0] hover:bg-[#222222]"
            : "text-[#6b6b6b] hover:bg-[#f0ede8]"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
