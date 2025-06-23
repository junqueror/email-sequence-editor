import React from 'react';
import type { FC } from 'react';

interface EmailSequenceCreateStepProps {
  className?: string,
}

const EmailSequenceCreateStep: FC<EmailSequenceCreateStepProps> = ({
  className = '',
}) => {

  return (
    <div
      className={ className }
    >
      EmailSequenceCreateStep component
    </div>
  );
};

export default EmailSequenceCreateStep;

export type { EmailSequenceCreateStepProps };
