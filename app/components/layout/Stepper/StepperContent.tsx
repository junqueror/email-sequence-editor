import React from 'react';
import type { FC } from 'react';

interface StepperContentProps {
  className?: string,
}

const StepperContent: FC<StepperContentProps> = ({
  className = '',
}) => {

  return (
    <div
      className={ className }
    >
      StepperContent component
    </div>
  );
};

export default StepperContent;

export type { StepperContentProps };
