"use client";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/lib/supabase"; // 네 경로에 맞게

type Props = {
  view?: "sign_in" | "sign_up";
};

export default function AuthForm({ view = "sign_in" }: Props) {
  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      view={view}
      providers={["google"]} // 원하면 제거/추가
    />
  );
}
