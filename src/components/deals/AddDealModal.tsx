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
import AddDealForm from "./AddDealForm";

export default function AddDealModal() {
  const [open, setOpen] = useState(false);
  const { darkMode } = useDarkMode();
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 bg-[#c99a6e] hover:bg-[#a67c52] text-white rounded-xl">
          <Plus className="w-4 h-4" />
          Add Deal
        </Button>
      </DialogTrigger>

      <DialogContent 
        className={`max-h-[80vh] overflow-y-auto sm:max-w-[500px] rounded-2xl ${
          darkMode ? 
          "bg-[#1a1a1a]/95 border-[#2a2a2a]" 
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

