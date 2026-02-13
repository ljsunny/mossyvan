"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { sortDeals } from "@/lib/sortDeals";
import { useDarkMode } from "@/app/providers/DarkModeProvider";
import { useNav } from "@/app/providers/NavProvider";
import Loading from "@/components/ui/loading";
import { ExploreView } from "./views/ExploreView";
import { HomeView } from "./views/HomeView";
import { SavedView } from "./views/SavedView";
import { EmptyView } from "./views/EmptyView";
import { MobileHeader } from "./layout/MobileHeader";

export function HomePage() {
  const [deals, setDeals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const searchParams = useSearchParams();
  const { darkMode } = useDarkMode();
  const { activeNav, setActiveNav } = useNav(); // ✅ setActiveNav 추가

  // ✅ URL 쿼리로 탭 선택 (/?tab=explore)
  useEffect(() => {
    const tab = searchParams.get("tab");

    if (tab === "explore") {
      setActiveNav("Explore");
    } else if (tab === "home" || tab === null) {
      // 기본값은 Home
      setActiveNav("Home");
    }
  }, [searchParams, setActiveNav]);

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

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-[#1a1a1a]" : "bg-[#faf9f7]"}`}>
        <Loading />
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 lg:pb-0 pb-20 ${
        darkMode ? "bg-[#1a1a1a]" : "bg-[#faf9f7]"
      }`}
    >
      <div className="lg:hidden">
        <MobileHeader
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          showSearch={activeNav === "Explore"}
        />
      </div>

      {activeNav === "Home" && <HomeView />}

      {activeNav === "Explore" && (
        <ExploreView deals={deals} searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      )}

      {activeNav === "Favorites" && (
        <SavedView/>
      )}

      {activeNav === "Profile" && <EmptyView title="Profile" />}
    </div>
  );
}
