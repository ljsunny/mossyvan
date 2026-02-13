"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { useDarkMode } from "@/app/providers/DarkModeProvider";
import type { Deal } from "@/types/deal";
import Loading from "@/components/ui/loading";
import { DealCard } from "@/components/deals/DealCard";

type FavoriteRow = {
  deal: Deal | null;
};

export function SavedView() {
  const { darkMode } = useDarkMode();

  const [loading, setLoading] = useState(true);
  const [savedDeals, setSavedDeals] = useState<Deal[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;

    const loadSaved = async () => {
      setLoading(true);
      setError(null);

      const { data: sessionData } = await supabase.auth.getSession();
      const user = sessionData.session?.user;

      // 로그인 안 했으면 그냥 빈 상태로
      if (!user) {
        if (!alive) return;
        setSavedDeals([]);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("favorite_deals")
        .select(
          `
          created_at,
          deal:deals (*)
        `
        )
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (!alive) return;

      if (error) {
        console.error(error);
        setError(error.message);
        setSavedDeals([]);
        setLoading(false);
        return;
      }

      const rows = (data ?? []) as FavoriteRow[];
      const deals = rows
        .map((r) => r.deal)
        .filter((d): d is Deal => Boolean(d));

      setSavedDeals(deals);
      setLoading(false);
    };

    loadSaved();

    // ✅ 찜 변경(다른 컴포넌트에서 토글)하면 자동 갱신하고 싶으면:
    // - 나중에 이벤트 버스/Context로 처리하는게 깔끔
    // - 일단은 Saved 탭 들어올 때만 로드해도 충분

    return () => {
      alive = false;
    };
  }, []);

  if (loading) {
    return (
      <div className={`min-h-[60vh] flex items-center justify-center ${darkMode ? "text-white" : "text-black"}`}>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className={`max-w-3xl mx-auto px-6 py-10 ${darkMode ? "text-white" : "text-[#2a2a2a]"}`}>
        <h2 className="text-xl font-semibold mb-2">Saved Deals</h2>
        <p className={darkMode ? "text-white/70" : "text-black/60"}>Failed to load saved deals.</p>
        <p className="mt-3 text-sm opacity-70">{error}</p>
      </div>
    );
  }

  if (savedDeals.length === 0) {
    return (
      <div className={`max-w-3xl mx-auto px-6 py-10 ${darkMode ? "text-white" : "text-[#2a2a2a]"}`}>
        <h2 className="text-xl font-semibold mb-2">Saved Deals</h2>
        <p className={darkMode ? "text-white/70" : "text-black/60"}>
          You haven’t saved any deals yet.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8">
      <div className="mb-6">
        <h2 className={`text-2xl font-semibold ${darkMode ? "text-white" : "text-[#2a2a2a]"}`}>
          Saved Deals
        </h2>
        <p className={darkMode ? "text-white/60" : "text-black/50"}>
          Your saved deals in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedDeals.map((deal) => (
          <DealCard key={deal.id} deal={deal} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
}
