import React from 'react';
import type { FC } from 'react';
import Button from '~/components/elements/Button';

interface StepperControllerProps {
  step: number,
  maxSteps: number,
  onStepChange: (_step: number) => void,
  className?: string,
}

const StepperController: FC<StepperControllerProps> = ({
  step,
  maxSteps,
  onStepChange,
  className = '',
}) => {

  // There is no need to add useCallback here,
  // since memoization will add complexity and overhead for such lightweight functions
  const handlePrevClick = () => onStepChange(step - 1);
  const handleNextClick = () => onStepChange(step + 1);

  return (
    <div
      className={ className }
    >
      <div className='flex gap-4 justify-between my-4'>
        <div>
          <span className='block text-gray-700 text-lg font-semibold'>Sequence steps</span>
          <span className='block size-sm' >Create steps for your sequence</span>
        </div>
        <div className='flex gap-4'>
          <Button 
            isDisabled={ step <= 0 }
            onClick={ handlePrevClick }
          >
            Previous
          </Button>
          <Button
            isAccent
            isDisabled={ step >= maxSteps - 1}
            onClick={ handleNextClick }
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StepperController;

export type { StepperControllerProps };
