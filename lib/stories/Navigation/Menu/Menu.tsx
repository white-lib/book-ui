import {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  Children,
  cloneElement,
  ReactElement,
  useCallback,
  useState,
  useRef,
} from "react";
import classnames from "classnames";

import styles from "./Menu.module.css";

import { withClassPrefix } from "lib/helpers/classNames.tsx";
import { BaseContextType } from "lib/system/base.provider.tsx";
import { Box } from "lib/stories/Layout/Box";
import { useOutsideClick } from "lib/hooks/useOutsideClick.tsx";
import { useCleanChildren } from "lib/hooks/useCleanChildren.tsx";

type Props = { disabled?: boolean } & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  BaseContextType["Link"];

export const Menu: FC<Props> = ({
  children,
  className,
  disabled,
  onClick,
  ...props
}) => {
  const classNameVal = classnames(
    withClassPrefix("link"),
    styles.main,
    className,
  );

  const ref = useRef(null);

  const [open, setOpen] = useState<boolean>(false);

  const onMenuTriggerClick = useCallback(() => {
    if (disabled) {
      return;
    }

    setOpen((value) => !value);
  }, [disabled, open]);

  const onOutsideClick = useCallback(() => {
    setOpen(false);
  }, []);

  useOutsideClick(ref, onOutsideClick, open);

  const neededChildren = useCleanChildren(children);

  return (
    <Box className={classNameVal} {...props} ref={ref}>
      {Children.map(neededChildren, (child) =>
        cloneElement(child as ReactElement<any>, {
          ...props,
          disabled,
          onMenuTriggerClick,
          open,
          onOutsideClick,
          menuChildren: neededChildren,
        }),
      )}
    </Box>
  );
};
