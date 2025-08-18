import { BaseProvider } from "../system/base.provider.tsx";

import { useCallback, useState } from "react";
import { Button } from "lib/stories/Inputs/Button";

export const BaseProviderDecorator = (
  Story: any,
  props: { viewMode?: string },
) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("bu-theme") === "dark",
  );

  const toggleTheme = useCallback(() => {
    const newTheme = isDark ? "light" : "dark";
    localStorage.setItem("bu-theme", newTheme);
    setIsDark(!isDark);
  }, [isDark]);

  return (
    <BaseProvider classPrefix="bu-" theme={isDark ? "dark" : "light"}>
      <Story />
      {props?.viewMode !== "docs" && (
        <Button
          size="xs"
          onClick={toggleTheme}
          style={{
            position: "fixed",
            top: "10px",
            right: "10px",
          }}
        >
          Theme
        </Button>
      )}
    </BaseProvider>
  );
};
