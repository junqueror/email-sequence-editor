import React from 'react';
import type { FC } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  className?: string,
  isAccent?: true,
  children?: React.ReactNode;
  onClick: () => void,
}

const Button: FC<ButtonProps> = ({
  className = '',
  isAccent = false,
  children,
  onClick,
}) => {
  const buttonClassNames = clsx("border border-gray-300 rounded-xl px-4 py-[10px] text-gray-700 font-semibold w-content", {
    "bg-purple border-0 text-white": isAccent,
  },
  className);

  return (
    <button
      className={ buttonClassNames }
      onClick={ onClick }
      type='button'
    >
      { children }
    </button>
  );
};

export default Button;

export type { ButtonProps };
