import { addons } from "@storybook/preview-api";

import { BaseProvider } from "../system/base.provider.tsx";

import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";
import { useEffect, useState } from "react";

const channel = addons.getChannel();

export const BaseProviderDecorator = (Story: any) => {
  const [isDark, setDark] = useState(
    localStorage.getItem("bu-theme") === "dark",
  );

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setDark);
    return () => channel.removeListener(DARK_MODE_EVENT_NAME, setDark);
  }, [channel, setDark]);

  return (
    <BaseProvider classPrefix="bu-" theme={isDark ? "dark" : "light"}>
      <Story />
    </BaseProvider>
  );
};
