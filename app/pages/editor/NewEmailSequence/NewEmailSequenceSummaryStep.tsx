import clsx from 'clsx';
import React from 'react';
import type { FC } from 'react';
import Button from '~/components/elements/Button';
import type { Email } from '~/types/email';

interface NewEmailSequenceSummaryStepProps {
  emails?: Email[],
  className?: string,
  onSave?: () => void,
}

const NewEmailSequenceSummaryStep: FC<NewEmailSequenceSummaryStepProps> = ({
  emails = [],
  className = '',
  onSave = undefined,
}) => (
  <div className={ className }>
    <div className='flex gap-4 flex-col sm:flex-row'>
    <div className='min-w-[280px]'>
      <span className="text-gray-700 font-semibold">Sequence steps and details</span>
    </div>
      <div className='flex flex-col gap-8'>
        { emails.map(email => <div key={ email.subject }>
            <div className='text-gray-700 font-semibold'>
              <span>{ email.title }</span>
            </div>
            <div>
              <span>Subject: </span>
              <span>{ email.subject || '-'}</span>
            </div>
            <div className='flex flex-row items-start mt-4 gap-1'>
              <span>Content:</span>
              <p className='whitespace-pre-wrap'>{ email.content || '-'}</p>
            </div>
          </div>
        )}
      </div>
    </div>
    <div className='w-full flex justify-end mt-4'>
      { !!onSave && (
        <Button
        isAccent 
        isDisabled= { !emails.length }
        onClick={ onSave }
        >
          Save
        </Button>
      ) }
      </div>
  </div>
);

export default NewEmailSequenceSummaryStep;

export type { NewEmailSequenceSummaryStepProps };
