import React from "react";
import { ThemeContextProvider } from "./context/ThemeContext";
import { useThemeContext } from "./context/useThemeContext";

function App1() {
  return (
    <ThemeContextProvider>
      <Title />
      <Button />
    </ThemeContextProvider>
  );
}

function Button() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button className={theme} onClick={toggleTheme}>
      Switch theme
    </button>
  );
}
function Title() {
  const { theme } = useThemeContext();
  return <h1>Current theme: {theme}</h1>;
}
export default App1;
