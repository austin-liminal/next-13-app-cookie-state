"use client";

import { ThemePickerButton } from "@/core/client/button";
import { Theme } from "@/core/constants";
import { useTheme } from "@/core/client/useTheme";
import { FC } from "react";

export const InMemoryThemePickerButton: FC<{ value: Theme }> = ({ value }) => {
  const { updateTheme } = useTheme();
  return <ThemePickerButton value={value} onClick={updateTheme} />;
};
