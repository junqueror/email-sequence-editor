import React, { useCallback, useMemo, useState } from "react";
import type { FC } from "react";
import clsx from "clsx";
import Stepper from "~/components/layout/Stepper/Stepper";
import NewEmailSequenceEditStep from "./NewEmailSequenceEditStep";
import NewEmailSequenceSummaryStep from "./NewEmailSequenceSummaryStep";
import NewEmailSequenceCreateStep from "./NewEmailSequenceCreateStep";
import type { Step } from "~/components/layout/Stepper/StepperController";
import useEmailList from "~/hooks/useEmailList";
import useApiEmailSequences from "~/hooks/api/useApiEmailSequences";
import type { Email } from "~/types/email";

const INITIAL_STEP = 1;
const INITIAL_EMAIL = {
  id: "initial-email",
  title: "Initial email",
};
const FOLLOW_UP_EMAIL = {
  title: "Follow-up email",
};
const DEFAULT_EMAIL_SEQUENCE_NAME = "Email Sequence";
const DEFAULT_EMAIL_SEQUENCE_PRODUCT = "Interview";

interface NewEmailSequenceProps {
  className?: string;
}

const NewEmailSequence: FC<NewEmailSequenceProps> = ({ className = "" }) => {
  const [step, setStep] = useState<number>(INITIAL_STEP);
  const [openEmailId, setOpenEmailId] = useState<Email["id"] | undefined>(
    INITIAL_EMAIL.id,
  );

  const resetEmailList = () => {
    // Clean email sequence, add initial email, return to editor step
    setEmails([INITIAL_EMAIL]);
    setOpenEmailId(INITIAL_EMAIL.id);
    setStep(INITIAL_STEP);
  };

  const { emails, addEmail, editEmail, setEmails } = useEmailList([
    INITIAL_EMAIL,
  ]);
  const { createEmailSequence } = useApiEmailSequences({
    // TODO: Update response/error handling to give user feedback with toast notifications or similar
    onCreateSuccess: resetEmailList,
    onCreateError: console.error,
  });

  const emailSequenceClassNames = clsx("w-full", className);

  const handleAddNewEmail = useCallback(() => {
    const isFirstEmail = !emails.length;
    const title = isFirstEmail
      ? INITIAL_EMAIL.title
      : `${FOLLOW_UP_EMAIL.title} ${emails.length}`;

    const newId = addEmail({ title });
    setOpenEmailId(newId);
  }, [emails]);

  const handleSave = useCallback(
    () =>
      createEmailSequence({
        name: DEFAULT_EMAIL_SEQUENCE_NAME,
        product: DEFAULT_EMAIL_SEQUENCE_PRODUCT,
        emails,
      }),
    [emails],
  );

  const steps: Step[] = useMemo(
    () => [
      {
        label: "Name & Product",
        description: "Provide sequence name & product",
        node: <NewEmailSequenceCreateStep />,
      },
      {
        label: "Sequence steps",
        description: "Create sequence steps for your sequence",
        node: (
          <NewEmailSequenceEditStep
            emails={emails}
            openEmailId={openEmailId}
            onAddNewEmail={handleAddNewEmail}
            onEditEmail={editEmail}
            onClickEmail={setOpenEmailId}
          />
        ),
      },
      {
        label: "Summary",
        description: "Summary of your sequence",
        node: (
          <NewEmailSequenceSummaryStep emails={emails} onSave={handleSave} />
        ),
      },
    ],
    [emails, handleAddNewEmail, editEmail, setOpenEmailId],
  );

  return (
    <div className={emailSequenceClassNames}>
      <Stepper step={step} steps={steps} onStepChange={setStep} />
    </div>
  );
};

export default NewEmailSequence;

export type { NewEmailSequenceProps };
