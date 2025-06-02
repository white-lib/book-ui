import { Children, Fragment, ReactElement, ReactNode } from "react";

function isFragment(child: ReactElement<any, any>): child is ReactElement<any> {
  return child.type === Fragment;
}

export function useCleanChildren(children: ReactNode | null): ReactNode | null {
  if (!children) {
    return null;
  }

  return isFragment(children as ReactElement)
    ? (Children.toArray(children)[0] as ReactElement<{ children: any }>).props
        ?.children
    : children;
}
