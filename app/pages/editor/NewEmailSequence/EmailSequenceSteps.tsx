import React from 'react';
import type { FC } from 'react';

interface EmailSequenceStepsProps {
  className?: string,
}

const EmailSequenceSteps: FC<EmailSequenceStepsProps> = ({
  className = '',
}) => {

  return (
    <div
      className={ className }
    >
      EmailSequenceSteps component
    </div>
  );
};

export default EmailSequenceSteps;

export type { EmailSequenceStepsProps };
