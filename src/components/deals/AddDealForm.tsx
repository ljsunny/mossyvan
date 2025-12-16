"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useDarkMode } from "@/app/providers/DarkModeProvider";

interface Props {
  onSuccess: () => void;
}

export default function AddDealForm({ onSuccess }: Props) {
  const router = useRouter();
  const { darkMode } = useDarkMode();

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [discount, setDiscount] = useState("");
  const [category, setCategory] = useState("Happy Hour");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("deals").insert({
      title,
      discount,
      category,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    onSuccess();
    router.refresh();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      {/* Title */}
      <div className="space-y-1">
        <Label className={`text-sm font-medium ${darkMode ? "text-white" : "text-[#2a2a2a]"}`}>
          Deal title
        </Label>
        <Input
          placeholder="e.g. 20% off cocktails"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            backgroundColor: darkMode ? "#222222" : "#ffffff",
            borderColor: darkMode ? "#2a2a2a" : "#e8e5e0",
            color: darkMode ? "#ffffff" : "#2a2a2a",
          }}
          className={`rounded-xl ${
            darkMode
              ? "!bg-[#222222] !border-[#2a2a2a] !text-white placeholder:!text-[#808080]"
              : "!bg-white !border-[#e8e5e0] !text-[#2a2a2a] placeholder:!text-[#999999]"
          }`}
        />
      </div>

      {/* Discount */}
      <div className="space-y-1">
        <Label className={`text-sm font-medium ${darkMode ? "text-white" : "text-[#2a2a2a]"}`}>
          Discount
        </Label>
        <Input
          placeholder="20%"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          required
          style={{
            backgroundColor: darkMode ? "#222222" : "#ffffff",
            borderColor: darkMode ? "#2a2a2a" : "#e8e5e0",
            color: darkMode ? "#ffffff" : "#2a2a2a",
          }}
          className={`rounded-xl ${
            darkMode
              ? "!bg-[#222222] !border-[#2a2a2a] !text-white placeholder:!text-[#808080]"
              : "!bg-white !border-[#e8e5e0] !text-[#2a2a2a] placeholder:!text-[#999999]"
          }`}
        />
      </div>

      {/* Category */}
      <div className="space-y-1">
        <Label className={`text-sm font-medium ${darkMode ? "text-white" : "text-[#2a2a2a]"}`}>
          Category
        </Label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            backgroundColor: darkMode ? "#222222" : "#ffffff",
            borderColor: darkMode ? "#2a2a2a" : "#e8e5e0",
            color: darkMode ? "#ffffff" : "#2a2a2a",
          }}
          className={`w-full rounded-xl px-3 py-2 border text-sm ${
            darkMode
              ? "!bg-[#222222] !border-[#2a2a2a] !text-white"
              : "!bg-white !border-[#e8e5e0] !text-[#2a2a2a]"
          }`}
        >
          <option value="Happy Hour" style={{ backgroundColor: darkMode ? "#222222" : "#ffffff", color: darkMode ? "#ffffff" : "#2a2a2a" }}>
            Happy Hour
          </option>
          <option value="Flash Deals" style={{ backgroundColor: darkMode ? "#222222" : "#ffffff", color: darkMode ? "#ffffff" : "#2a2a2a" }}>
            Flash Deals
          </option>
          <option value="Weekly Specials" style={{ backgroundColor: darkMode ? "#222222" : "#ffffff", color: darkMode ? "#ffffff" : "#2a2a2a" }}>
            Weekly Specials
          </option>
        </select>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-[#c99a6e] hover:bg-[#a67c52] text-white"
      >
        {loading ? "Saving..." : "Add Deal"}
      </Button>
    </form>
  );
}

