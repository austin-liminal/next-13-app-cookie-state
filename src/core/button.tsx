"use client";

import { Theme, ThemeSelectionProvider, useTheme } from "@/core/useTheme";
import { FC, ReactNode, useCallback } from "react";

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
  initialValue: Theme;
  children: ReactNode;
}

export const ThemePickerButtonList: FC<ThemePickerButtonListProps> = ({
  initialValue,
  children,
}) => {
  return (
    <ThemeSelectionProvider initialTheme={"synthwave"}>
      <ul className="btn-list">{children}</ul>
    </ThemeSelectionProvider>
  );
};
