import React from 'react';
import type { FC } from 'react';
import StepperController from './StepperController';
import StepperContent from './StepperContent';

interface StepperProps {
  className?: string,
}

const Stepper: FC<StepperProps> = ({
  className = '',
}) => {

  return (
    <div
      className={ className }
    >
      Stepper component
      <StepperController />
      <StepperContent />
    </div>
  );
};

export default Stepper;

export type { StepperProps };
