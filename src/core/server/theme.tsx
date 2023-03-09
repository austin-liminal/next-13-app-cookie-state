import { cookies } from "next/headers";
import { defaultTheme, Theme, themeStoragekey } from "../constants";

export const getServerTheme = (): Theme => {
  const cookieStore = cookies();
  const cookie = cookieStore.get(themeStoragekey);
  return (cookie?.value as Theme) ?? defaultTheme;
};
