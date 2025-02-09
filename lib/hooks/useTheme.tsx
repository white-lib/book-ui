import { useEffect } from "react";

export type Theme = "light" | "dark";

export const useTheme = (theme: Theme) => {
  useEffect(() => {
    const root = document?.documentElement;

    if (!root) {
      return;
    }

    root.setAttribute("data-bu-theme", theme);
    window?.localStorage?.setItem("bu-theme", theme);
  }, [theme]);
};
