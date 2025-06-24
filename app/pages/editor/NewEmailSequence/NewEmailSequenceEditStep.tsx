import React from 'react';
import type { FC } from 'react';
import type { Email } from '~/types/email';
import NewEmail from './NewEmail';
import Button from '~/components/elements/Button';
import clsx from 'clsx';

interface NewEmailSequenceEditStepProps {
  emails?: Email[],
  onAddNewEmail?: () => void,
  onEditEmail?: ({ id, subject, content }: { id: Email['id'], subject?: Email['subject'], content?: Email['content']}) => void,
  className?: string,
}

const NewEmailSequenceEditStep: FC<NewEmailSequenceEditStepProps> = ({
  emails = [],
  className = '',
  onAddNewEmail = undefined,
  onEditEmail = undefined,
}) => {
  const newEmailSequenceEditStepClassNames = clsx('w-full', className);
  
  return (
    <div className={ newEmailSequenceEditStepClassNames }>
      <div className='flex flex-col gap-4'>
        { emails.map(email => (
          <NewEmail 
            email={ email }
            key={ email.title }
            onEditEmail={ onEditEmail }
          /> 
          )) }
      </div>
      { !!onAddNewEmail && (
        <div className='my-4 text-center'>
          <Button 
            className='p-2'
            onClick={ onAddNewEmail }
          >
            + Add new step
          </Button>
        </div>
      ) }
    </div>
  );
}

export default NewEmailSequenceEditStep;

export type { NewEmailSequenceEditStepProps };
