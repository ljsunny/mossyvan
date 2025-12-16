"use client";

import { createContext, useContext, useState } from "react";

type NavContextType = {
  activeNav: string;
  setActiveNav: (value: string) => void;
};

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: React.ReactNode }) {
  const [activeNav, setActiveNav] = useState("Home");

  return (
    <NavContext.Provider value={{ activeNav, setActiveNav }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  const ctx = useContext(NavContext);
  if (!ctx) {
    throw new Error("useNav must be used within NavProvider");
  }
  return ctx;
}

