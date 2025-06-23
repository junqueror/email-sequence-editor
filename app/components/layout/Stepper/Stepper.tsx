import React, { useCallback, useMemo, useState } from 'react';
import type { FC } from 'react';
import StepperController from './StepperController';
import clsx from 'clsx';

interface StepperProps {
  children: React.ReactNode;
  className?: string,
}

const Stepper: FC<StepperProps> = ({
  children,
  className = '',
}) => {
  const [step, useStep] = useState<number>(0);

  const { renderChild, maxSteps } = useMemo(() => {
    const childrenArray = React.Children.toArray(children);
    
    return {
      renderChild: childrenArray[step],
      maxSteps: childrenArray.length,
    }
  }, [step]);

  const handleStepChange = useCallback((newStep: number) => {
    useStep(Math.max(0, Math.min(newStep, maxSteps - 1)));
  }, [maxSteps]);

  const stepperClassNames = clsx("w-full", className);

  return (
    <div
      className={ stepperClassNames }
    >
      <StepperController
        step={ step } 
        maxSteps={ maxSteps }
        onStepChange= { handleStepChange }
      />
      <div className='w-full'>
        { renderChild }
      </div>
    </div>
  );
};

export default Stepper;

export type { StepperProps };
