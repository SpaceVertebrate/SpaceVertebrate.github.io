import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { BaseProvider, DarkTheme, LightTheme } from "baseui";
import { ThemeProvider } from "styled-components";
import { whiteSpectrumNightTheme, whiteSpectrumTheme } from "./theme";
import { GlobalStyles } from "./global";

const THEME_STORAGE_KEY = "portfolio-theme-mode";

function getInitialThemeMode() {
  if (typeof window === "undefined") {
    return "day";
  }

  const storedThemeMode = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedThemeMode === "day" || storedThemeMode === "night") {
    return storedThemeMode;
  }

  if (
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "night";
  }

  return "day";
}

function App() {
  const [themeMode, setThemeMode] = useState(getInitialThemeMode);
  const isNightTheme = themeMode === "night";
  const activeTheme = isNightTheme
    ? whiteSpectrumNightTheme
    : whiteSpectrumTheme;

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, themeMode);
  }, [themeMode]);

  function handleThemeToggle() {
    setThemeMode((currentThemeMode) =>
      currentThemeMode === "night" ? "day" : "night"
    );
  }

  return (
    <BaseProvider theme={isNightTheme ? DarkTheme : LightTheme}>
      <ThemeProvider theme={activeTheme}>
        <>
          <GlobalStyles />
          <div>
            <Main
              theme={activeTheme}
              onToggle={handleThemeToggle}
              isNightTheme={isNightTheme}
            />
          </div>
        </>
      </ThemeProvider>
    </BaseProvider>
  );
}

export default App;
