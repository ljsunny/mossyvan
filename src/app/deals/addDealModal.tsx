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
import AddDealForm from "./AddDealForm";

export default function AddDealModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 bg-[#c99a6e] hover:bg-[#a67c52] text-white rounded-xl">
          <Plus className="w-4 h-4" />
          Add Deal
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] rounded-2xl bg-white">
        <DialogHeader>
          <DialogTitle>Add New Deal</DialogTitle>
        </DialogHeader>

        <AddDealForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
