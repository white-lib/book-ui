export type ColorTheme = "dark" | "light";
export type ColorType = "primary" | "secondary" | "gray" | "common";
export type ComponentState = "default" | "hover" | "active" | "checked";

export type ShadeValue = number | string | null;

export type VarColor = {
  type: ColorType;
  shade: ShadeValue;
};
