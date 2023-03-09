import { Theme, useTheme } from "@/core/useTheme";

const THEME_KEY = "AppTheme";

const getPersistedTheme = () => {
  return localStorage.getItem(THEME_KEY) as Theme;
};

const persistTheme = (value: Theme) => {
  localStorage.setItem(THEME_KEY, value);
};

export default function ClientWithLocalStorageExample() {
  const { theme, updateTheme } = useTheme(getPersistedTheme);

  const handleThemeChanged = (value: Theme) => {
    updateTheme(value);
    persistTheme(value);
  };

  return (
    <div>
      <h1>Pick a theme:</h1>
      <ul className="btn-list">
        <li>
          <button
            className={`btn btn-lg ${theme === "synthwave" && "btn-selected"}`}
            onClick={() => handleThemeChanged("synthwave")}
          >
            Synthwave
          </button>
        </li>
        <li>
          <button
            className={`btn btn-lg ${theme === "rugrats" && "btn-selected"}`}
            onClick={() => handleThemeChanged("rugrats")}
          >
            Rugrats
          </button>
        </li>
      </ul>
    </div>
  );
}
