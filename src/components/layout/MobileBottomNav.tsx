"use client";

import { Home, Compass, Heart, User } from "lucide-react";
import { useDarkMode } from "@/app/providers/DarkModeProvider";
import { useNav } from "@/app/providers/NavProvider";

export function MobileBottomNav() {
  const { darkMode } = useDarkMode();
  const { activeNav, setActiveNav } = useNav();

  const items = [
    { key: "Home", label: "Home", icon: <Home className="w-5 h-5" /> },
    { key: "Explore", label: "Explore", icon: <Compass className="w-5 h-5" /> },
    { key: "Favorites", label: "Saved", icon: <Heart className="w-5 h-5" /> },
    { key: "Profile", label: "Profile", icon: <User className="w-5 h-5" /> },
  ];

  return (
    <nav
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-30 border-t ${
        darkMode
          ? "bg-[#1a1a1a]/95 border-[#2a2a2a]"
          : "bg-white/95 border-[#e8e5e0]"
      } backdrop-blur supports-[backdrop-filter]:bg-opacity-90`}
    >
      <div className="flex justify-around px-2 py-3">
        {items.map((item) => {
          const active = activeNav === item.key;
          return (
            <button
              key={item.key}
              onClick={() => setActiveNav(item.key)}
              className={`flex flex-col items-center gap-1 text-xs ${
                active
                  ? "text-[#c99a6e]"
                  : darkMode
                    ? "text-[#a0a0a0]"
                    : "text-[#6b6b6b]"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

