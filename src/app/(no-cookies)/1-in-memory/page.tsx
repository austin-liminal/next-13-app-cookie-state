import { ClientThemePickerButtonList } from "@/core/client/button";
import { InMemoryThemePickerButton } from "./button";

export default function InMemoryThemePickerExample() {
  return (
    <div>
      <h1 className="heading">Pick a theme:</h1>
      <ClientThemePickerButtonList initialValue="synthwave">
        <li>
          <InMemoryThemePickerButton value="synthwave" />
        </li>
        <li>
          <InMemoryThemePickerButton value="rugrats" />
        </li>
      </ClientThemePickerButtonList>
    </div>
  );
}
