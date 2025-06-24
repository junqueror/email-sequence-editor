import React from 'react';
import type { FC } from 'react';
import type { Email } from '~/types/email';

interface NewEmailSequenceSummaryStepProps {
  emails?: Email[],
  className?: string,
}

const NewEmailSequenceSummaryStep: FC<NewEmailSequenceSummaryStepProps> = ({
  emails = [],
  className = '',
}) => {
  return (
    <div
      className={ className }
    >
      { emails.map(email => <div key={ email.subject }>{ email.subject }</div>)}
    </div>
  );
};

export default NewEmailSequenceSummaryStep;

export type { NewEmailSequenceSummaryStepProps };
