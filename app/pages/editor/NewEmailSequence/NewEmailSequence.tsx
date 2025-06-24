import clsx from 'clsx';
import React, { useMemo } from 'react';
import type { FC } from 'react';
import Stepper from '~/components/layout/Stepper/Stepper';
import NewEmailSequenceEditStep from './NewEmailSequenceEditStep';
import NewEmailSequenceSummaryStep from './NewEmailSequenceSummaryStep';
import NewEmailSequenceCreateStep from './NewEmailSequenceCreateStep';
import type { Step } from '~/components/layout/Stepper/StepperController';

interface NewEmailSequenceProps {
  className?: string,
}



const NewEmailSequence: FC<NewEmailSequenceProps> = ({
  className = '',
}) => {
  const emailSequenceClassNames = clsx("w-full", className);

  const steps: Step[] = useMemo(() => [
    {
      label: 'Name & Product',
      description: 'Provide sequence name & product',
      node: (
        <NewEmailSequenceCreateStep />
      )
    },
    {
      label: 'Sequence steps',
      description: 'Create sequence steps for your sequence',
      node: (
        <NewEmailSequenceEditStep />
      )
    },
    {
      label: 'Summary',
      description: 'Summary of your sequence',
      node: (
        <NewEmailSequenceSummaryStep />
      )
    },
  ], []);

  return (
    <div
      className={ emailSequenceClassNames }
    >
      <Stepper 
        steps={ steps }
        initialStep={ 1 }
      />
    </div>
  );
};

export default NewEmailSequence;

export type { NewEmailSequenceProps };
