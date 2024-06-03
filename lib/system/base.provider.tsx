import { createContext, PropsWithChildren, ReactElement } from "react";
import useContextWrapper from "../hooks/useContextWrapper.tsx";

type BaseContextType = {
  Link: ReactElement<HTMLAnchorElement>;
};

const BaseContext = createContext<BaseContextType | null>(null);

export const useBaseContext = () =>
  useContextWrapper(BaseContext, {
    contextName: useBaseContext.name,
    providerName: BaseProvider.name,
  });

export default function BaseProvider({
  children,
  Link,
}: PropsWithChildren<BaseContextType>) {
  return (
    <BaseContext.Provider
      value={{
        Link: Link || ("a" as unknown as ReactElement<HTMLAnchorElement>),
      }}
    >
      {children}
    </BaseContext.Provider>
  );
}
