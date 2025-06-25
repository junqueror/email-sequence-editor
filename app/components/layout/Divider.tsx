import clsx from "clsx";
import React from "react";
import type { FC } from "react";

interface DividerProps {
  className?: string;
}

const Divider: FC<DividerProps> = ({ className = "" }) => {
  const dividerClassNames = clsx(
    "w-full border-b border-gray-200 my-4",
    className,
  );

  return <div className={dividerClassNames} />;
};

export default Divider;

export type { DividerProps };
