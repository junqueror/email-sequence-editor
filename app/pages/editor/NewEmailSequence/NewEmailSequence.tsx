import clsx from 'clsx';
import React, { useCallback, useMemo } from 'react';
import type { FC } from 'react';
import Stepper from '~/components/layout/Stepper/Stepper';
import NewEmailSequenceEditStep from './NewEmailSequenceEditStep';
import NewEmailSequenceSummaryStep from './NewEmailSequenceSummaryStep';
import NewEmailSequenceCreateStep from './NewEmailSequenceCreateStep';
import type { Step } from '~/components/layout/Stepper/StepperController';
import useEmailList from '~/hooks/useEmailList';
import type { Email } from '~/types/email';

interface NewEmailSequenceProps {
  className?: string,
}

const NewEmailSequence: FC<NewEmailSequenceProps> = ({
  className = '',
}) => {
  const { emails, addEmail, editEmail } = useEmailList();

  const emailSequenceClassNames = clsx("w-full", className);

  const handleAddnewEmail = useCallback(() => {
    const isFirstEmail = !emails.length;
    const title = isFirstEmail ? 'Initial email' : `Follow-up email ${emails.length}`;
    
    addEmail({ title });
  }, [emails]);

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
        <NewEmailSequenceEditStep 
          emails= { emails } 
          onAddNewEmail={ handleAddnewEmail }
          onEditEmail={ editEmail }
        />
      )
    },
    {
      label: 'Summary',
      description: 'Summary of your sequence',
      node: (
        <NewEmailSequenceSummaryStep emails= { emails } />
      )
    },
  ], [emails]);

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
