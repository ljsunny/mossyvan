"use client";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/lib/supabase/client";

type Props = {
  view?: "sign_in" | "sign_up";
};

export default function AuthForm({ view = "sign_in" }: Props) {
  return (
    <div className="mx-auto w-full max-w-md">
      <div className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur">
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            
            variables: {
              default: {
                colors: {
                  brand: "#c99a6e",
                  brandAccent: "#b98557",
                },
                radii: {
                  borderRadiusButton: "12px",
                  buttonBorderRadius: "12px",
                  inputBorderRadius: "12px",
                },
              },
            },
          }}
          theme="default"
          view={view}
          providers={["google"]}
          // 원하면 signup에서 email 확인 흐름도 켤 수 있음
        />
      </div>
    </div>
  );
}
