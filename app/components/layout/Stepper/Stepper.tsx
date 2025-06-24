import React, { useCallback, useState } from 'react';
import type { FC } from 'react';
import StepperController from './StepperController';
import type { Step } from './StepperController';
import clsx from 'clsx';
import Divider from '../Divider';

interface StepperProps {
  steps: Step[];
  initialStep?: number,
  className?: string,
}

// NOTE: The logic and responsibilities for managing the steps are best separated from the email sequence editor.
// Therefore, I take the change to create a generic Stepper component, and remove the complexity of the email sequence editor.
// This type of stepper is likely to be used accross the application and other functionality
// In case of a tight deadline, this can be implemented faster with only the required functionality.

const Stepper: FC<StepperProps> = ({
  steps,
  initialStep = 0,
  className = '',
}) => {
  const [step, useStep] = useState<number>(initialStep);

  const maxSteps = steps.length;

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
        onStepChange= { handleStepChange }
        steps={ steps }
      />
      <Divider />
      <div className='w-full my-4'>
        { steps[step].node }
      </div>
    </div>
  );
};

export default Stepper;

export type { StepperProps };
