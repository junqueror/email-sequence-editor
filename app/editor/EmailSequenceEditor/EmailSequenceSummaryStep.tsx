import React from 'react';
import type { FC } from 'react';

interface EmailSequenceSummaryStepProps {
  className?: string,
}

const EmailSequenceSummaryStep: FC<EmailSequenceSummaryStepProps> = ({
  className = '',
}) => {

  return (
    <div
      className={ className }
    >
      EmailSequenceSummaryStep component
    </div>
  );
};

export default EmailSequenceSummaryStep;

export type { EmailSequenceSummaryStepProps };
