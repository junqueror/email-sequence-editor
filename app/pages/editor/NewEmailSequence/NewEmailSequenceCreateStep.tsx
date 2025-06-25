import React from "react";
import type { FC } from "react";

interface NewEmailSequenceCreateStepProps {
  className?: string;
}

const NewEmailSequenceCreateStep: FC<NewEmailSequenceCreateStepProps> = ({
  className = "",
}) => (
  <div className={className}>
    {/* TODO: Complete create step of NewEmailSequuence component */}
    <span>NewEmailSequenceCreateStep component</span>
  </div>
);

export default NewEmailSequenceCreateStep;

export type { NewEmailSequenceCreateStepProps };
