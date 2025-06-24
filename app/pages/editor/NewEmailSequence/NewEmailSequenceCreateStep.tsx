import React from 'react';
import type { FC } from 'react';

interface NewEmailSequenceCreateStepProps {
  className?: string,
}

const NewEmailSequenceCreateStep: FC<NewEmailSequenceCreateStepProps> = ({
  className = '',
}) => {

  return (
    <div
      className={ className }
    >
      NewEmailSequenceCreateStep component
    </div>
  );
};

export default NewEmailSequenceCreateStep;

export type { NewEmailSequenceCreateStepProps };
