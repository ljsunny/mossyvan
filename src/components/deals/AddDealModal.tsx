"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useDarkMode } from "@/app/providers/DarkModeProvider";
import { supabase } from "@/lib/supabase/client";
import AddDealForm from "./AddDealForm";
import { useRouter } from "next/navigation";

export default function AddDealModal() {
  const [open, setOpen] = useState(false);
  const { darkMode } = useDarkMode();
  const router = useRouter();

  const handleOpen = async () => {
    const { data } = await supabase.auth.getSession();

    if (!data.session) {
      router.push("/login");
      return;
    }

    setOpen(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* ✅ trigger를 버튼 onClick으로 제어 */}
      <DialogTrigger asChild>
        <Button
          onClick={(e) => {
            e.preventDefault(); // DialogTrigger 기본 동작 방지
            handleOpen();
          }}
          className="gap-2 bg-[#c99a6e] hover:bg-[#a67c52] text-white rounded-xl"
        >
          <Plus className="w-4 h-4" />
          Add Deal
        </Button>
      </DialogTrigger>

      <DialogContent
        className={`max-h-[80vh] overflow-y-auto sm:max-w-[500px] rounded-2xl ${
          darkMode
            ? "bg-[#1a1a1a]/95 border-[#2a2a2a]"
            : "bg-[#faf9f7]/95 border-[#e8e5e0]"
        }`}
      >
        <DialogHeader>
          <DialogTitle className={darkMode ? "text-white" : "text-[#2a2a2a]"}>
            Add New Deal
          </DialogTitle>
        </DialogHeader>

        <AddDealForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
