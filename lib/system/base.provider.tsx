"use client";
import { createContext, PropsWithChildren, ReactElement } from "react";
import useContextWrapper from "../hooks/useContextWrapper.tsx";
import { singletonStorage } from "./singletonStorage.tsx";
import { Theme, useTheme } from "../hooks/useTheme.tsx";

type BaseContextType = {
  theme?: Theme;
  classPrefix?: string;
  Link?: any;
  Img?: any;
};

const BaseContext = createContext<BaseContextType | null>(null);

export const useBaseContext = () =>
  useContextWrapper(BaseContext, {
    contextName: useBaseContext.name,
    providerName: BaseProvider.name,
  });

export function BaseProvider({
  children,
  theme = "device",
  classPrefix = "",
  Link = "a",
  Img = "img",
}: PropsWithChildren<BaseContextType>) {
  singletonStorage.classPrefix = classPrefix;

  useTheme(theme);

  return (
    <BaseContext.Provider
      value={{
        Img: Img || ("img" as unknown as ReactElement<HTMLImageElement>),
        Link: Link || ("a" as unknown as ReactElement<HTMLAnchorElement>),
      }}
    >
      {children}
    </BaseContext.Provider>
  );
}
