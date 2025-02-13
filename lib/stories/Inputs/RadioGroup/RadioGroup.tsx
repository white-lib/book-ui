"use client";

import {
  ChangeEvent,
  Children,
  cloneElement,
  DetailedHTMLProps,
  FC,
  FieldsetHTMLAttributes,
  ReactElement,
  useCallback,
  useState,
} from "react";
import classnames from "classnames";

import styles from "./RadioGroup.module.css";

import { withClassPrefix } from "lib/helpers/classNames.tsx";

type Props = {
  name: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string | number) => void;
} & Omit<
  DetailedHTMLProps<
    FieldsetHTMLAttributes<HTMLFieldSetElement>,
    HTMLFieldSetElement
  >,
  "onChange"
>;

export const RadioGroup: FC<Props> = ({
  name,
  defaultValue,
  value,
  onChange,
  children,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState<string | number | null>(
    defaultValue || null,
  );

  const classNameVal = classnames(withClassPrefix("rg"), styles.main);

  const onChangeInner = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!value) {
        setSelectedValue(e?.target?.value);
      }
      onChange?.(e?.target?.value);
    },
    [value, setSelectedValue],
  );

  return (
    <fieldset {...props} id={name} className={classNameVal}>
      {Children.map(children, (child) =>
        cloneElement(child as ReactElement<any>, {
          name,
          selectedValue: value || selectedValue,
          onChange: onChangeInner,
        }),
      )}
    </fieldset>
  );
};
