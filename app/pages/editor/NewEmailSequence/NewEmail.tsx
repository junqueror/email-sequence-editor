import clsx from "clsx";
import React, { lazy, Suspense, useState } from "react";
import type { FC } from "react";
import Divider from "~/components/layout/Divider";
import MailIcon from "~/assets/icons/Mail.svg?react";

import type { Email } from "~/types/email";
import "easymde/dist/easymde.min.css";

const SimpleMDEEditor = lazy(() => import("react-simplemde-editor"));

interface NewEmailProps {
  email: Email;
  className?: string;
  isOpen?: boolean;
  onClick?: (id: Email["id"]) => void;
  onEditEmail?: ({
    id,
    subject,
    content,
  }: {
    id: Email["id"];
    subject?: Email["subject"];
    content?: Email["content"];
  }) => void;
}

const NewEmail: FC<NewEmailProps> = ({
  email,
  className = "",
  isOpen = false,
  onClick = undefined,
  onEditEmail = undefined,
}) => {
  const [smdeAutofocus, setSmdeAutofocus] = useState(false);

  const handleClick = () => onClick?.(email.id);

  const editSubject = (event: React.ChangeEvent<HTMLInputElement>) => {
    onEditEmail?.({ id: email.id, subject: event?.target?.value });
    setSmdeAutofocus(false);
  };

  const editContent = (value: string) => {
    onEditEmail?.({ id: email.id, content: value });
    setSmdeAutofocus(true);
  };

  const newEmailClassNames = clsx(
    "border border-gray-200 rounded-xl",
    {
      "cursor-pointer": !isOpen && !!onClick,
    },
    className,
  );

  return (
    <div className={newEmailClassNames} onClick={handleClick}>
      <div className="flex flex-row gap-4 items-center my-4 mx-6">
        <div className="border border-gray-200 rounded-md p-3">
          <MailIcon className="size-5" />
        </div>
        <span className="font-semibold text-xl text-gray-900">
          {email.title}
        </span>
      </div>
      {isOpen && (
        <>
          <Divider />
          <input
            className="mx-6 w-full outline-none text-lg"
            type="text"
            name="subject"
            placeholder="Subject"
            value={email.subject}
            onChange={editSubject}
          />
          <Divider />
          <div className="mx-2 my-1">
            <Suspense fallback={null}>
              {/* NOTE: This MD editor does not work well, it has some focus related problems 
                  I decided to open/close mails to have only one MD editor present at a time 
                  TODO: When there is more time, I would look for a more consistent replacement from another library 
              */}
              <SimpleMDEEditor
                className={clsx(
                  "[&>.EasyMDEContainer]:!border-0", // wrapper
                  "[&>.EasyMDEContainer>.CodeMirror]:!border-0", // CodeMirror // FIXME: CodeMirror from SimpleMDEEditor doesn't allow to remove min height => Change by another Markdown editor?
                  "[&>.EasyMDEContainer>.editor-preview-side]:!hidden", // preview
                  "[&>.EasyMDEContainer>.editor-toolbar]:!border-0 [&>.EasyMDEContainer>.editor-toolbar_i]:text-gray-400 [&>.EasyMDEContainer>.editor-toolbar_button:after]:text-gray-400", // toolbar
                  "[&>.EasyMDEContainer>.editor-statusbar]:hidden", // statusbar
                )}
                value={email.content}
                onChange={editContent}
                options={{
                  autofocus: smdeAutofocus,
                  spellChecker: false,
                  toolbar: [
                    "bold",
                    "italic",
                    "heading-bigger",
                    "heading-smaller",
                    "quote",
                    "link",
                    "image",
                    "unordered-list",
                    "ordered-list",
                  ],
                }}
              />
            </Suspense>
          </div>
        </>
      )}
    </div>
  );
};

export default NewEmail;

export type { NewEmailProps };
