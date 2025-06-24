import React from 'react';
import type { FC } from 'react';

interface NewEmailSequenceSummaryStepProps {
  className?: string,
}

const NewEmailSequenceSummaryStep: FC<NewEmailSequenceSummaryStepProps> = ({
  className = '',
}) => {

  return (
    <div
      className={ className }
    >
      NewEmailSequenceSummaryStep component
    </div>
  );
};

export default NewEmailSequenceSummaryStep;

export type { NewEmailSequenceSummaryStepProps };
