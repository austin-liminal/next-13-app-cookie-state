import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
  FC,
} from "react";

export type Theme = "synthwave" | "rugrats";

const ThemeSelectionContext = createContext<{
  currentTheme: Theme;
  updateTheme(value: Theme): void;
}>({
  currentTheme: "" as Theme,
  updateTheme() {},
});

export const ThemeSelectionProvider: FC<{
  initialTheme: Theme | (() => Theme);
  children: ReactNode;
}> = ({ initialTheme, children }) => {
  const [theme, updateTheme] = useState(initialTheme);
  useEffect(() => {
    console.log(
      "Theme state has changed in React! Triggering useEffect in <ThemePicker> component"
    );

    const rootSelector = window.document.querySelector(":root") as HTMLElement;
    const currentTheme = rootSelector.dataset.theme;

    if (theme !== currentTheme) {
      rootSelector.dataset.theme = theme;
      console.log(`Theme updated from ${currentTheme} to ${theme}!`);
    }
  }, [theme]);

  return (
    <ThemeSelectionContext.Provider
      value={{
        currentTheme: theme,
        updateTheme,
      }}
    >
      {children}
    </ThemeSelectionContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeSelectionContext);
};
