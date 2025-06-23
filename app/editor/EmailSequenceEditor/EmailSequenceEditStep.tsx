import React from 'react';
import type { FC } from 'react';

interface EmailSequenceEditStepProps {
  className?: string,
}

const EmailSequenceEditStep: FC<EmailSequenceEditStepProps> = ({
  className = '',
}) => {

  return (
    <div
      className={ className }
    >
      EmailSequenceEditStep component
    </div>
  );
};

export default EmailSequenceEditStep;

export type { EmailSequenceEditStepProps };
