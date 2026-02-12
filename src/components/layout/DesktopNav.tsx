"use client";

import { Home, Compass, Heart, User, Sun, Moon } from "lucide-react";
import { Logo1 } from "../logos";
import { useDarkMode } from "@/app/providers/DarkModeProvider";
import { useNav } from "@/app/providers/NavProvider";
import AddDealModal from "@/components/deals/AddDealModal";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

export function DesktopNav() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { activeNav, setActiveNav } = useNav();

  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    // 현재 세션 체크
    supabase.auth.getSession().then(({ data }) => {
      setIsAuthed(!!data.session);
    });

    // 로그인 상태 변경 감지
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsAuthed(!!session);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);


  return (
    <nav className={`hidden lg:block sticky top-0 z-20 backdrop-blur-lg border-b ${
      darkMode ? "bg-[#1a1a1a]/95 border-[#2a2a2a]" : "bg-[#faf9f7]/95 border-[#e8e5e0]"
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
        <Logo1 type="combined" darkMode={darkMode} size={28} />
        <div className="flex items-center gap-8">
          <DesktopNavButton
            icon={<Home className="w-5 h-5" />}
            label="Home"
            active={activeNav === "Home"}
            darkMode={darkMode}
            onClick={() => setActiveNav("Home")}
          />
          <DesktopNavButton
            icon={<Compass className="w-5 h-5" />}
            label="Explore"
            active={activeNav === "Explore"}
            darkMode={darkMode}
            onClick={() => setActiveNav("Explore")}
          />
          <DesktopNavButton
            icon={<Heart className="w-5 h-5" />}
            label="Saved"
            active={activeNav === "Favorites"}
            darkMode={darkMode}
            onClick={() => setActiveNav("Favorites")}
          />
          <DesktopNavButton
            icon={<User className="w-5 h-5" />}
            label="Profile"
            active={activeNav === "Profile"}
            darkMode={darkMode}
            onClick={() => setActiveNav("Profile")}
          />
        </div>
        <div className="flex items-center gap-3">
          <AddDealModal />
          {isAuthed ? (
            <button
              onClick={async () => {
                await supabase.auth.signOut();
              }}
            >
              Logout
            </button>
          ) : (
            <Link href="/login">Login</Link>
          )}

          <button
            onClick={toggleDarkMode}
            className={`p-2.5 rounded-xl ${
              darkMode
                ? "bg-[#2a2a2a] text-white hover:bg-[#333333]"
                : "bg-[#f0ede8] text-[#2a2a2a] hover:bg-[#e8e5e0]"
            }`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
}

function DesktopNavButton({ icon, label, active, darkMode, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 rounded-xl ${
        active
          ? "text-[#c99a6e] bg-[#c99a6e]/10"
          : darkMode
            ? "text-[#a0a0a0] hover:bg-[#222222]"
            : "text-[#6b6b6b] hover:bg-[#f0ede8]"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

