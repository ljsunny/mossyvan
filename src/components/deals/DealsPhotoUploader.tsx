"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { useDarkMode } from "@/app/providers/DarkModeProvider";

export function DealPhotoUploader({
  value,
  onChange,
}: {
  value: string;
  onChange: (url: string) => void;
}) {
  const { darkMode } = useDarkMode();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [uploading, setUploading] = useState(false);
  const [localPreview, setLocalPreview] = useState("");

  const previewSrc = value || localPreview;

  useEffect(() => {
    return () => {
      if (localPreview) URL.revokeObjectURL(localPreview);
    };
  }, [localPreview]);

  const openPicker = () => {
    if (uploading) return;
    inputRef.current?.click();
  };

  async function uploadFile(file: File) {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      alert("Please paste/select an image.");
      return;
    }

    const maxMB = 8;
    if (file.size > maxMB * 1024 * 1024) {
      alert(`Image is too large. Please use a file under ${maxMB}MB.`);
      return;
    }

    // local preview immediately
    const previewUrl = URL.createObjectURL(file);
    setLocalPreview(previewUrl);

    setUploading(true);
    try {
      const ext = file.name.split(".").pop() || "png";
      const path = `deals/${crypto.randomUUID()}.${ext}`;

      const { error } = await supabase.storage
        .from("deal-images")
        .upload(path, file, {
          upsert: false,
          contentType: file.type,
          cacheControl: "3600",
        });

      if (error) throw error;

      const { data } = supabase.storage.from("deal-images").getPublicUrl(path);
      onChange(data.publicUrl);
    } catch (err: any) {
      console.error(err);
      alert(err?.message ?? "Upload failed.");
      setLocalPreview("");
      onChange("");
    } finally {
      setUploading(false);
    }
  }

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    await uploadFile(file);
    e.target.value = "";
  }

  async function handlePaste(e: React.ClipboardEvent<HTMLDivElement>) {
    if (uploading) return;

    const items = e.clipboardData?.items;
    if (!items || items.length === 0) return;

    // find first image in clipboard
    const imageItem = Array.from(items).find((it) => it.type.startsWith("image/"));
    if (!imageItem) return;

    e.preventDefault(); // prevent random text paste behavior
    const file = imageItem.getAsFile();
    if (!file) return;

    await uploadFile(file);
  }

  return (
    <div
      tabIndex={0}
      onPaste={handlePaste}
      className={`w-full rounded-2xl border p-4 outline-none ${
        darkMode ? "border-[#2a2a2a] bg-[#1f1f1f]" : "border-[#e8e5e0] bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className={`text-sm font-medium ${darkMode ? "text-white" : "text-[#2a2a2a]"}`}>
            Photo (required)
          </div>
          <div className={`mt-1 text-xs ${darkMode ? "text-white/60" : "text-[#777]"}`}>
            Click Upload or paste an image (Ctrl/Cmd+V).
          </div>
        </div>

        <div className="shrink-0">
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <Button
            type="button"
            onClick={openPicker}
            disabled={uploading}
            className="rounded-xl bg-[#c99a6e] hover:bg-[#a67c52] text-white"
          >
            {uploading ? "Uploading..." : previewSrc ? "Change" : "Upload"}
          </Button>
        </div>
      </div>

      <div className="mt-4">
        {previewSrc ? (
          <div className="relative w-full overflow-hidden rounded-2xl border border-black/10">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={previewSrc}
                alt="Deal photo preview"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          </div>
        ) : (
          <div
            className={`rounded-2xl border border-dashed p-6 text-sm ${
              darkMode ? "border-[#2a2a2a] text-white/60" : "border-[#e8e5e0] text-[#777]"
            }`}
          >
            No photo selected yet. (Tip: click this box, then paste.)
          </div>
        )}
      </div>
    </div>
  );
}
