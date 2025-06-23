import clsx from 'clsx';
import React from 'react';
import type { FC } from 'react';
import Stepper from '~/components/layout/Stepper/Stepper';
import EmailSequenceEditStep from './EmailSequenceEditStep';
import EmailSequenceSummaryStep from './EmailSequenceSummaryStep';
import EmailSequenceCreateStep from './EmailSequenceCreateStep';

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
      <Stepper>
        <EmailSequenceCreateStep />
        <EmailSequenceEditStep />
        <EmailSequenceSummaryStep />
      </Stepper>
    </div>
  );
};

export default EmailSequenceEditor;

export type { EmailSequenceEditorProps };
