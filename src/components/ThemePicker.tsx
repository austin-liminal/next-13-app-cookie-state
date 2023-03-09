"use client";

import { FC, useEffect, useState } from "react";

export const ThemePicker: FC = () => {
  const [theme, setTheme] = useState("synthwave");
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
    <div>
      <h1>Pick a theme:</h1>
      <ul className="btn-list">
        <li>
          <button
            className={`btn btn-lg ${theme === "synthwave" && "btn-selected"}`}
            onClick={() => setTheme("synthwave")}
          >
            Synthwave
          </button>
        </li>
        <li>
          <button
            className={`btn btn-lg ${theme === "rugrats" && "btn-selected"}`}
            onClick={() => setTheme("rugrats")}
          >
            Rugrats
          </button>
        </li>
      </ul>
    </div>
  );
};
