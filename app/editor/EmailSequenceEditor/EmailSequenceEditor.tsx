import clsx from 'clsx';
import React from 'react';
import type { FC } from 'react';
import Stepper from '~/components/layout/Stepper/Stepper';

interface EmailSequenceEditorProps {
  className?: string,
}

const EmailSequenceEditor: FC<EmailSequenceEditorProps> = ({
  className = '',
}) => {

  const emailSequenceClassNames = clsx("w-full", className);

  return (
    <div
      className={ emailSequenceClassNames }
    >
      EmailSequenceEditor component
      <Stepper />
    </div>
  );
};

export default EmailSequenceEditor;

export type { EmailSequenceEditorProps };
