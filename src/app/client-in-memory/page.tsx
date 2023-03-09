import { ThemePickerButtonList } from "@/core/button";
import { ClientInMemoryThemePickerButton } from "./button";

export default function InMemoryThemePickerExample() {
  return (
    <div>
      <h1>Pick a theme:</h1>
      <ThemePickerButtonList initialValue="synthwave">
        <li>
          <ClientInMemoryThemePickerButton value="synthwave" />
        </li>
        <li>
          <ClientInMemoryThemePickerButton value="rugrats" />
        </li>
      </ThemePickerButtonList>
    </div>
  );
}
