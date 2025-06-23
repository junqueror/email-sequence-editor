import React from 'react';
import type { FC } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children?: React.ReactNode;
  className?: string,
  isAccent?: boolean,
  isDisabled?: boolean,
  onClick: () => void,
}

const Button: FC<ButtonProps> = ({
  className = '',
  children,
  isAccent = false,
  isDisabled = false,
  onClick,
}) => {
  const buttonClassNames = clsx("border border-gray-300 rounded-xl px-4 py-[10px] text-gray-700 font-semibold h-fit w-fit", {
    "bg-purple border-0 text-white": isAccent,
    "cursor-pointer": !isDisabled,
    "cursor-not-allowed": isDisabled,
  },
  className);

  return (
    <button
      className={ buttonClassNames }
      onClick={ onClick }
      type='button'
      disabled={ isDisabled }
    >
      { children }
    </button>
  );
};

export default Button;

export type { ButtonProps };
