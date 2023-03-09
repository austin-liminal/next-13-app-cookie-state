import { getServerTheme } from "@/core/server/theme";
import {
  CookiesThemePickerButton,
  CookiesThemePickerButtonList,
} from "./button";

export default function CookiesExample() {
  const theme = getServerTheme();
  return (
    <div>
      <h1 className="heading">Pick a theme:</h1>
      <CookiesThemePickerButtonList initialTheme={theme}>
        <li>
          <CookiesThemePickerButton value="synthwave" />
        </li>
        <li>
          <CookiesThemePickerButton value="rugrats" />
        </li>
      </CookiesThemePickerButtonList>
    </div>
  );
}
