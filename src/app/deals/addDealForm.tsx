"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

interface Props {
  onSuccess: () => void;
}

export default function AddDealForm({ onSuccess }: Props) {
  const router = useRouter();

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
    router.refresh(); // App Router 핵심
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Title */}
      <div className="space-y-1">
        <Label>Deal title</Label>
        <Input
          placeholder="e.g. 20% off cocktails"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      {/* Discount */}
      <div className="space-y-1">
        <Label>Discount</Label>
        <Input
          placeholder="20%"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          required
        />
      </div>

      {/* Category */}
      <div className="space-y-1">
        <Label>Category</Label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded-xl px-3 py-2"
        >
          <option>Happy Hour</option>
          <option>Flash Deals</option>
          <option>Weekly Specials</option>
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
