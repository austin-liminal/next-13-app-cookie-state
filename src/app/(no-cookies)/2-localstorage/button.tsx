"use client";

import {
  ClientThemePickerButtonList,
  ThemePickerButton,
} from "@/core/client/button";
import { useTheme } from "@/core/client/useTheme";
import { defaultTheme, Theme, themeStoragekey } from "@/core/constants";
import { FC, ReactNode, useCallback, useEffect } from "react";

const getPersistedTheme = () => {
  if (typeof window === "undefined") {
    return defaultTheme;
  }

  return window.localStorage.getItem(themeStoragekey) as Theme;
};

const persistTheme = (value: Theme) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(themeStoragekey, value);
};

export const LocalStorageThemePickerButton: FC<{ value: Theme }> = ({
  value,
}) => {
  const { updateTheme } = useTheme();
  const handleThemePicked = useCallback(() => {
    updateTheme(value);
    persistTheme(value);
  }, [updateTheme, value]);
  return <ThemePickerButton value={value} onClick={handleThemePicked} />;
};

const StorageInitializer = () => {
  const { updateTheme } = useTheme();

  useEffect(() => {
    updateTheme(getPersistedTheme());
  }, [updateTheme]);

  return null;
};

export const LocalStorageThemePickerButtonList: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <ClientThemePickerButtonList initialValue={"" as Theme}>
      <StorageInitializer />
      {children}
    </ClientThemePickerButtonList>
  );
};
