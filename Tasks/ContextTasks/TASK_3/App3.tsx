import React from "react";
import { ThemeContextProvider1 } from "./ThemeContext/ThemeContext";
import { useThemeContext1 } from "./ThemeContext/useThemeContext";
import { LanguageContextProvider } from "./LanguageContext/LanguageContext";
import { useLanguageContext } from "./LanguageContext/useLanguageContext";

function App3() {
  return (
    <LanguageContextProvider>
      <ThemeContextProvider1>
        <ThemeButton />
        <LanguageButton />
      </ThemeContextProvider1>
    </LanguageContextProvider>
  );
}

function ThemeButton() {
  const { theme, toggleTheme } = useThemeContext1();
  return (
    <>
      <h1>Current theme: {theme}</h1>
      <button onClick={toggleTheme}>Switch theme</button>
    </>
  );
}

function LanguageButton() {
  const { language, switchLanguage } = useLanguageContext();
  return (
    <>
      <h1>Current language: {language}</h1>
      <button onClick={switchLanguage}>Switch language</button>
    </>
  );
}

export default App3;
