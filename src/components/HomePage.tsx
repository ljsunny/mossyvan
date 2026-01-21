"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { sortDeals } from "@/lib/sortDeals";
import { useDarkMode } from "@/app/providers/DarkModeProvider";
import { useNav } from "@/app/providers/NavProvider";
import Loading from "./ui/loading";
import { ExploreView } from "./views/ExploreView";
import { HomeView } from "./views/HomeView";
import { EmptyView } from "./views/EmptyView";
import { MobileHeader } from "./layout/MobileHeader";

export function HomePage() {
  const [deals, setDeals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { darkMode } = useDarkMode();
  const { activeNav } = useNav();

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
      {/* Mobile Header (always visible on mobile) */}
      <div className="lg:hidden">
        <MobileHeader
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          showSearch={activeNav === "Explore"}
        />
      </div>

      {activeNav === "Home" && <HomeView />}
      
      {activeNav === "Explore" && (
        <ExploreView
          deals={deals}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      )}
      
      {activeNav === "Favorites" && <EmptyView title="Saved Deals" />}
      
      {activeNav === "Profile" && <EmptyView title="Profile" />}
    </div>
  );
}
