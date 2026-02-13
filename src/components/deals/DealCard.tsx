import { Clock } from "lucide-react";
import { getDealTimeLabel } from "@/lib/deal-time";
import { useEffect, useState } from "react";
import type { Deal } from "@/types/deal";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

interface DealCardProps {
  deal: Deal;
  darkMode: boolean;
}

export function DealCard({ deal, darkMode }: DealCardProps) {
  const router = useRouter();

  const [isSaved, setIsSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "grocery":
        return "#c99a6e";
      case "restaurant":
        return "#2a2a2a";
      case "coffee":
        return "#a8b5a0";
      default:
        return "#6b6b6b";
    }
  };

  const timeLeft = getDealTimeLabel(deal);

  // ✅ (선택) 카드 렌더 시 "이미 저장했는지" 체크해서 초기 isSaved 세팅
  useEffect(() => {
    let alive = true;

    const checkSaved = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      const user = sessionData.session?.user;
      if (!user) return;

      const { data } = await supabase
        .from("favorite_deals")
        .select("id")
        .eq("deal_id", deal.id)
        .eq("user_id", user.id)
        .maybeSingle();

      if (alive) setIsSaved(!!data);
    };

    checkSaved();

    return () => {
      alive = false;
    };
  }, [deal.id]);

  const toggleFavorite = async () => {
    if (saving) return;

    const { data: sessionData } = await supabase.auth.getSession();
    const user = sessionData.session?.user;

    if (!user) {
      router.push("/login");
      return;
    }

    setSaving(true);

    // ✅ Optimistic UI
    const next = !isSaved;
    setIsSaved(next);

    try {
      if (next) {
        // 찜 추가
        const { error } = await supabase.from("favorite_deals").insert({
          deal_id: deal.id,
          user_id: user.id,
        });

        // 유니크 충돌 같은 경우가 날 수 있어서 처리
        if (error) throw error;
      } else {
        // 찜 해제 (row delete)
        const { error } = await supabase
          .from("favorite_deals")
          .delete()
          .eq("deal_id", deal.id)
          .eq("user_id", user.id);

        if (error) throw error;
      }
    } catch (err) {
      console.error("toggleFavorite error:", err);
      // 실패하면 UI 롤백
      setIsSaved(!next);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      onClick={() => {
        console.log("Opening deal:", deal.id);
      }}
      className={`rounded-2xl overflow-hidden transition-all cursor-pointer w-full max-w-sm mx-auto aspect-[4/7] flex flex-col ${
        darkMode ? "bg-[#222222] hover:bg-[#2a2a2a]" : "bg-white hover:shadow-lg"
      } ${isSaved ? "ring-2 ring-[#c99a6e]" : ""}`}
    >
      {/* Deal Image */}
      <div className="relative w-full flex-1 overflow-hidden flex-shrink-0">
        <img
          src={deal.image_url ?? "/images/deal-placeholder.jpg"}
          alt={deal.title}
          className="w-full h-full object-cover"
        />

        {/* Tag Badge */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-sm backdrop-blur-sm"
          style={{ backgroundColor: `${getTagColor(deal.type)}CC` }}
        >
          {deal.type}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col flex-shrink-0">
        <div className="mb-3 flex-1">
          <h3 className={`mb-1 ${darkMode ? "text-white" : "text-[#2a2a2a]"}`}>{deal.title}</h3>
          <p className={darkMode ? "text-[#a0a0a0]" : "text-[#6b6b6b]"}>{deal.description}</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
          <div className={`flex items-center gap-1 ${darkMode ? "text-[#808080]" : "text-[#999999]"}`}>
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm">{timeLeft}</span>
          </div>

          <div className={`text-sm ${darkMode ? "text-[#808080]" : "text-[#999999]"}`}>{deal.location}</div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite();
          }}
          disabled={saving}
          className={`w-full py-2 rounded-xl transition-all ${
            isSaved
              ? "bg-[#c99a6e] text-white"
              : darkMode
              ? "bg-[#2a2a2a] text-[#a0a0a0] hover:bg-[#333333]"
              : "bg-[#f0ede8] text-[#6b6b6b] hover:bg-[#e8e5e0]"
          } ${saving ? "opacity-70 cursor-not-allowed" : ""}`}
        >
          {saving ? "Saving..." : isSaved ? "Saved" : "Save Deal"}
        </button>
      </div>
    </div>
  );
}
