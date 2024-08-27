import React, { createContext, useState } from "react";

export type LanguageContextType = {
  language: string;
  switchLanguage: () => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  switchLanguage: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const LanguageContextProvider = ({ children }: Props) => {
  const [language, setLanguage] = useState("en");

  const switchLanguage = () => {
    setLanguage(language === "en" ? "ua" : "en");
  };

  const languageValue = { language, switchLanguage };
  return (
    <LanguageContext.Provider value={languageValue}>{children}</LanguageContext.Provider>
  );
};
