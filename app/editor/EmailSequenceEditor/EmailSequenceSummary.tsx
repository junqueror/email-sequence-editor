import React from 'react';
import type { FC } from 'react';

interface EmailSequenceSummaryProps {
  className?: string,
}

const EmailSequenceSummary: FC<EmailSequenceSummaryProps> = ({
  className = '',
}) => {

  return (
    <div
      className={ className }
    >
      EmailSequenceSummary component
    </div>
  );
};

export default EmailSequenceSummary;

export type { EmailSequenceSummaryProps };
