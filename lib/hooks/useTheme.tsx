import { useEffect } from "react";

export type Theme = "device" | "light" | "dark";

export const useTheme = (theme: Theme) => {
  useEffect(() => {
    console.log("theme", theme);
    if (theme === "device") {
      return;
    }
    const root = document?.documentElement;

    if (!root) {
      return;
    }

    root.setAttribute("data-bu-theme", theme);
    window?.localStorage?.setItem("bu-theme", theme);
  }, [theme]);
};
