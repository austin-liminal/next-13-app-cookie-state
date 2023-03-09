"use client";

import { ThemePickerButton } from "@/core/button";
import { Theme, useTheme } from "@/core/useTheme";
import { FC } from "react";

export const ClientInMemoryThemePickerButton: FC<{ value: Theme }> = ({
  value,
}) => {
  const { updateTheme } = useTheme();
  return <ThemePickerButton value={value} onClick={updateTheme} />;
};
