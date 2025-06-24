import React from 'react';
import type { FC } from 'react';
import Button from '~/components/elements/Button';
import DotIcon from '~/assets/icons/Dot.svg?react';
import TickIcon from '~/assets/icons/Tick.svg?react';
import clsx from 'clsx';
interface Step {
  label: string;
  node: React.ReactNode;
  description?: string;
}

interface StepperControllerProps {
  step: number,
  steps: Step[],
  onStepChange: (_step: number) => void,
  className?: string,
}

const StepperController: FC<StepperControllerProps> = ({
  step,
  steps,
  onStepChange,
  className = '',
}) => {
  const handlePrevClick = () => onStepChange(step - 1);
  const handleNextClick = () => onStepChange(step + 1);

  return (
    <div className={className}>
      {/* Progress Bar */}
      <div className="w-full flex flex-col items-center mb-8">
        <div className="flex w-full items-center justify-between px-2">
          {steps.map((_step, idx) => {
            const isPrevStep = idx < step;
            const isCurrentStep = idx === step;
            const isPrevOrCurrentStep = isPrevStep || isCurrentStep;
            const isNextStep = idx > step;
            const isNextOrCurrentStep = isNextStep || isCurrentStep;
                        
            return (
              <div key={_step.label} className={ clsx("flex-1 flex flex-col items-center relative", {

              }) }>
                {/* Left line */}
                {idx !== 0 && (
                  <div className='absolute left-0 top-4 -translate-y-1/2 w-1/2 h-0.5 z-0 pr-2.5'>
                    <div className={ clsx(`w-full border`, {
                      'border-primary': isPrevOrCurrentStep,
                      'border-gray-200': isNextStep,
                    } )} />
                  </div>
                )}
                {/* Right line */}
                {idx !== steps.length - 1 && (
                   <div className='absolute right-0 top-4 -translate-y-1/2 w-1/2 h-0.5 z-0 pl-2.5'>
                    <div className={ clsx(`w-full border`, {
                      'border-primary': isPrevStep,
                      'border-gray-200': isNextOrCurrentStep,
                    } )} />
                  </div>
                )}
                {/* Icon */}
                <div className={ clsx('relative z-20 flex items-center justify-center size-8 rounded-full',
                  '', {
                  '!bg-purple-100': isCurrentStep,
                } ) }>
                  <div className={ clsx('flex items-center justify-center size-6 rounded-full border-[2px] bg-transparent', {
                    'border-primary': isPrevOrCurrentStep,
                    'border-gray-200': isNextStep,
                  } ) }>
                    { isPrevStep ? (
                      <TickIcon className="size-3 text-primary ml-0.25"/>
                    ) : (
                      <DotIcon className= { clsx('size-2', {
                        'text-primary': isCurrentStep,
                        'text-gray-200': isNextStep,
                      } ) }/> 
                    ) }
                  </div>
                </div>
                {/* Label & Description */}
                <div className="mt-4 text-center">
                  <span className={ clsx('block text-base font-semibold', {
                    'text-primary': isCurrentStep,
                  } ) }>
                    {_step.label}
                  </span>
                  {_step.description && (
                    <span className={ clsx('block text-sm text-gray-600', {
                        'text-primary': isCurrentStep,
                      } ) }>
                        {_step.description}
                    </span>
                  )}
                </div>
              </div>
          );
          })}
        </div>
      </div>
      {/* Stepper Buttons */}
      <div className='flex gap-4 justify-end my-4'>
        <Button 
          isDisabled={ step <= 0 }
          onClick={ handlePrevClick }
        >
          Previous
        </Button>
        <Button
          isAccent
          isDisabled={ step >= steps.length - 1}
          onClick={ handleNextClick }
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepperController;

export type { StepperControllerProps, Step };
