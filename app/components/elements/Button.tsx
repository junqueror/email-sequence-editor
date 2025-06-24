import React from 'react';
import type { FC } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children?: React.ReactNode;
  className?: string,
  isAccent?: boolean,
  isDisabled?: boolean,
  onClick?: () => void,
}

const Button: FC<ButtonProps> = ({
  className = '',
  children,
  isAccent = false,
  isDisabled = false,
  onClick = () => {},
}) => {
  const buttonClassNames = clsx("border border-gray-300 rounded-lg px-3 py-2 font-semibold h-fit w-fit", {
    "cursor-pointer": !isDisabled,
    "cursor-not-allowed": isDisabled,
    "text-gray-700": !isDisabled && !isAccent,
    "bg-primary border-0 text-white": !isDisabled && isAccent,
    "text-gray-300": isDisabled && !isAccent,
    "bg-gray-300 text-white": isDisabled && isAccent,
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
