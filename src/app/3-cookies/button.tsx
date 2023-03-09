"use client";

import {
  ThemePickerButton,
  ClientThemePickerButtonList,
} from "@/core/client/button";
import { Theme, themeStoragekey } from "@/core/constants";
import { useTheme } from "@/core/client/useTheme";
import { FC, ReactNode, useCallback } from "react";

const persistTheme = (value: Theme) => {
  if (typeof window === "undefined") {
    return;
  }

  document.cookie = [
    `${themeStoragekey}=${value}`,
    "path=/",
    `expires=Fri, 31 Dec 9999 23:59:59 GMT`,
  ].join("; ");
};

export const CookiesThemePickerButton: FC<{ value: Theme }> = ({ value }) => {
  const { updateTheme } = useTheme();
  const handleThemePicked = useCallback(
    (value: Theme) => {
      updateTheme(value);
      persistTheme(value);
    },
    [updateTheme]
  );

  return <ThemePickerButton value={value} onClick={handleThemePicked} />;
};

export const CookiesThemePickerButtonList: FC<{
  initialTheme: Theme;
  children: ReactNode;
}> = ({ initialTheme, children }) => {
  return (
    <ClientThemePickerButtonList initialValue={initialTheme}>
      {children}
    </ClientThemePickerButtonList>
  );
};
