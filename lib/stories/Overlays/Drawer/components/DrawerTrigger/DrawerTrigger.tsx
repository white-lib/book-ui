import {
  Children,
  cloneElement,
  FC,
  PropsWithChildren,
  ReactElement,
} from "react";

type Props = PropsWithChildren;

export const DrawerTrigger: FC<Props> = ({ children, ...props }) => {
  return (
    <>
      {Children.map(children, (child) => {
        return cloneElement(child as ReactElement<any>, props);
      })}
    </>
  );
};
