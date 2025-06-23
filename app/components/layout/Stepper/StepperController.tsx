import React from 'react';
import type { FC } from 'react';
import Button from '~/components/elements/Button';

interface StepperControllerProps {
  className?: string,
}

const StepperController: FC<StepperControllerProps> = ({
  className = '',
}) => {

  return (
    <div
      className={ className }
    >
      <div className='flex gap-4'>
      <Button onClick={ () => console.log("Previous")}>
        Previous
      </Button>
      <Button
       isAccent
       onClick={ () => console.log("Next") }
       >
        Next
      </Button>
      </div>
    </div>
  );
};

export default StepperController;

export type { StepperControllerProps };
