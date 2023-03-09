"use client";

import { FC, ReactNode, useCallback } from "react";
import { ThemeSelectionProvider, useTheme } from "@/core/client/useTheme";
import { Theme } from "../constants";

interface ThemePickerButtonProps {
  value: Theme;
  onClick(value: Theme): void;
}

export const ThemePickerButton: FC<ThemePickerButtonProps> = ({
  value,
  onClick,
}) => {
  const { currentTheme } = useTheme();
  const onClickHandler = useCallback(() => onClick(value), [value, onClick]);

  return (
    <button
      className={`btn btn-lg ${currentTheme === value && "btn-selected"}`}
      onClick={onClickHandler}
    >
      {`${value[0].toUpperCase()}${value.slice(1)}`}
    </button>
  );
};

interface ThemePickerButtonListProps {
  initialValue: Theme | (() => Theme);
  children: ReactNode;
}

export const ClientThemePickerButtonList: FC<ThemePickerButtonListProps> = ({
  initialValue,
  children,
}) => {
  return (
    <ThemeSelectionProvider initialTheme={initialValue}>
      <ul className="btn-list">{children}</ul>
    </ThemeSelectionProvider>
  );
};
