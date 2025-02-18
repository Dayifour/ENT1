"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface SettingsContextProps {
  language: string;
  theme: string;
  setLanguage: (language: string) => void;
  setTheme: (theme: string) => void;
}

const SettingsContext = createContext<SettingsContextProps | undefined>(
  undefined
);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("Français");
  const [theme, setTheme] = useState("Clair");

  return (
    <SettingsContext.Provider
      value={{ language, theme, setLanguage, setTheme }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
