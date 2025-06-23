import React from 'react';
import type { FC } from 'react';

interface EmailSequenceStepProps {
  className?: string,
}

const EmailSequenceStep: FC<EmailSequenceStepProps> = ({
  className = '',
}) => {

  return (
    <div
      className={ className }
    >
      EmailSequenceStep component
    </div>
  );
};

export default EmailSequenceStep;

export type { EmailSequenceStepProps };
