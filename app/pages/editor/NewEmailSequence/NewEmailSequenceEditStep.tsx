import React from 'react';
import type { FC } from 'react';

interface NewEmailSequenceEditStepProps {
  className?: string,
}

const NewEmailSequenceEditStep: FC<NewEmailSequenceEditStepProps> = ({
  className = '',
}) => {

  return (
    <div
      className={ className }
    >
      NewEmailSequenceEditStep component
    </div>
  );
};

export default NewEmailSequenceEditStep;

export type { NewEmailSequenceEditStepProps };
