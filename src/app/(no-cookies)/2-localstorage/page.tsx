import {
  LocalStorageThemePickerButton,
  LocalStorageThemePickerButtonList,
} from "./button";

export default function LocalStorageExample() {
  return (
    <div>
      <h1 className="heading">Pick a theme:</h1>
      <LocalStorageThemePickerButtonList>
        <li>
          <LocalStorageThemePickerButton value="synthwave" />
        </li>
        <li>
          <LocalStorageThemePickerButton value="rugrats" />
        </li>
      </LocalStorageThemePickerButtonList>
    </div>
  );
}
