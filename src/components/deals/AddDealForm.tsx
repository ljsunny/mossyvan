"use client";

import { useMemo, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useDarkMode } from "@/app/providers/DarkModeProvider";
import { DealPhotoUploader } from "./DealsPhotoUploader";

interface Props {
  onSuccess: () => void;
}

type Category = "always" | "happyhour" | "flashdeals" | "weeklyspecials";
type DealType = "grocery" | "restaurant" | "coffee";

const CATEGORY_OPTIONS: { label: string; value: Category }[] = [
  { label: "Always", value: "always" },
  { label: "Happy Hour", value: "happyhour" },
  { label: "Flash", value: "flashdeals" },
  { label: "Weekly", value: "weeklyspecials" },
];

const TYPE_OPTIONS: { label: string; value: DealType }[] = [
  { label: "Grocery", value: "grocery" },
  { label: "Restaurant", value: "restaurant" },
  { label: "Coffee", value: "coffee" },
];

const QUICK_PICKS = [
  "Safeway Crazy Deal! : $3 Pasta sauce",
  "$6 cocktails 4–6pm",
  "Free miso soup",
  "Buy 1 Get 1 coffee",
  "2 for $12 strawberries",
];

export default function AddDealForm({ onSuccess }: Props) {
  const router = useRouter();
  const { darkMode } = useDarkMode();

  const [loading, setLoading] = useState(false);

  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<Category>("happyhour");
  const [type, setType] = useState<DealType>("restaurant");
  const [location, setLocation] = useState("");

  // always 토글은 UI 편의용. 실제 저장은 category="always"로 처리
  const always = category === "always";
  const [startDate, setStartDate] = useState(""); // yyyy-mm-dd
  const [endDate, setEndDate] = useState(""); // yyyy-mm-dd

  const inputTheme = useMemo(() => {
    return {
      style: {
        backgroundColor: darkMode ? "#222222" : "#ffffff",
        borderColor: darkMode ? "#2a2a2a" : "#e8e5e0",
        color: darkMode ? "#ffffff" : "#2a2a2a",
      } as React.CSSProperties,
      className: `rounded-xl ${
        darkMode
          ? "!bg-[#222222] !border-[#2a2a2a] !text-white placeholder:!text-[#808080]"
          : "!bg-white !border-[#e8e5e0] !text-[#2a2a2a] placeholder:!text-[#999999]"
      }`,
      labelClass: `text-sm font-medium ${darkMode ? "text-white" : "text-[#2a2a2a]"}`,
      hintClass: `text-xs ${darkMode ? "text-white/60" : "text-[#777]"}`,
    };
  }, [darkMode]);

  const pillBase = "rounded-xl px-3 py-2 text-sm border transition";
  const pillInactive = darkMode
    ? "bg-[#222222] border-[#2a2a2a] text-white/80 hover:text-white"
    : "bg-white border-[#e8e5e0] text-[#2a2a2a] hover:bg-[#faf9f7]";
  const pillActive = "bg-[#c99a6e] border-[#c99a6e] text-white";

  const datesValid = always || (!always && startDate && endDate && endDate >= startDate);

  const canSubmit =
  imageUrl.trim() &&
  title.trim() &&
  !!type &&
  !!category &&
  datesValid;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setLoading(true);

      // ✅ 1) 현재 로그인 유저 가져오기
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
  
    if (userError || !user) {
      setLoading(false);
      alert("Please sign in to add a deal.");
      return;
    }

    const payload = {
      user_id: user.id, // ✅ 2) RLS 통과 핵심
      title: title.trim(),
      category, // always | happyhour | flashdeals | weeklyspecials
      type, // grocery | restaurant | coffee
      image_url: imageUrl.trim(),
      location: location.trim(),
      // v1: description/price/original_price/discount_label/tags는 안 넣음 (null)
      start_date: always ? null : startDate || null,
      end_date: always ? null : endDate || null,
    };

    const { error } = await supabase.from("deals").insert(payload);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    onSuccess();
    router.refresh();
  }

  console.log("supabase url:", process.env.NEXT_PUBLIC_SUPABASE_URL);

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Image URL (v1) */}
      <div className="space-y-1">
        <Label className={inputTheme.labelClass}>Photo (required)</Label>
        <DealPhotoUploader value={imageUrl} onChange={setImageUrl} />
      </div>

      {/* Title + Quick picks */}
      <div className="space-y-2">
        <Label className={inputTheme.labelClass}>Title</Label>
        <Input
          placeholder="e.g. Safeway Crazy Deal! / Free drink / 2 for $12 strawberries"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={inputTheme.style}
          className={inputTheme.className}
        />

        <div className="space-y-2">
          <div className={inputTheme.hintClass}>Quick picks (click to fill)</div>
          <div className="flex flex-wrap gap-2">
            {QUICK_PICKS.map((pick) => (
              <button
                key={pick}
                type="button"
                onClick={() => setTitle(pick)}
                className={`rounded-full px-3 py-1 text-sm border ${
                  darkMode
                    ? "border-[#2a2a2a] bg-[#1f1f1f] text-white/80 hover:text-white"
                    : "border-[#e8e5e0] bg-white text-[#2a2a2a] hover:bg-[#faf9f7]"
                }`}
              >
                {pick}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Type pills */}
      <div className="space-y-2">
        <Label className={inputTheme.labelClass}>Type</Label>
        <div className="flex flex-wrap gap-2">
          {TYPE_OPTIONS.map((opt) => {
            const active = type === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => setType(opt.value)}
                className={`${pillBase} ${active ? pillActive : pillInactive}`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Category pills (includes Always) */}
      <div className="space-y-2">
        <Label className={inputTheme.labelClass}>Category</Label>
        <div className="flex flex-wrap gap-2">
          {CATEGORY_OPTIONS.map((opt) => {
            const active = category === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => setCategory(opt.value)}
                className={`${pillBase} ${active ? pillActive : pillInactive}`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Location */}
      <div className="space-y-1">
        <Label className={inputTheme.labelClass}>Location</Label>
        <Input
          placeholder="e.g. Richmond / Downtown / Metrotown"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={inputTheme.style}
          className={inputTheme.className}
        />
      </div>

      {/* Dates (only if not always) */}
      {!always && (
        <div className="space-y-2">
          <div className={inputTheme.hintClass}>Dates (optional but recommended)</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label className={`${inputTheme.labelClass} text-xs`}>Start date</Label>
              <Input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                style={inputTheme.style}
                className={inputTheme.className}
              />
            </div>
            <div className="space-y-1">
              <Label className={`${inputTheme.labelClass} text-xs`}>End date</Label>
              <Input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                style={inputTheme.style}
                className={inputTheme.className}
              />
              {startDate && endDate && endDate < startDate && (
                <div className="text-xs text-red-500">End date must be after start date.</div>
              )}
            </div>
          </div>
        </div>
      )}

      <Button
        type="submit"
        disabled={loading || !canSubmit}
        className="w-full rounded-xl bg-[#c99a6e] hover:bg-[#a67c52] text-white"
      >
        {loading ? "Saving..." : "Add Deal"}
      </Button>
    </form>
  );
}
