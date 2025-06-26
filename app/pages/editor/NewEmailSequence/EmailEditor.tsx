import clsx from "clsx";
import React, { lazy, Suspense } from "react";
import type { FC } from "react";
import Divider from "~/components/layout/Divider";
import MailIcon from "~/assets/icons/Mail.svg?react";

import type { Email } from "~/types/email";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = lazy(() => import("react-quill-new"));

interface EmailEditorProps {
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

const EmailEditor: FC<EmailEditorProps> = ({
  email,
  className = "",
  isOpen = false,
  onClick = undefined,
  onEditEmail = undefined,
}) => {
  const handleClick = () => onClick?.(email.id);

  const editSubject = (event: React.ChangeEvent<HTMLInputElement>) => {
    onEditEmail?.({ id: email.id, subject: event?.target?.value });
  };

  const editContent = (value: string) => {
    onEditEmail?.({ id: email.id, content: value });
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
              {/* NOTE: Using an external library for content editor is the best choice. I've implemented styles as close as possible to design */}
              <ReactQuill
                className={clsx(
                  "[&>.ql-toolbar.ql-snow]:!border-0", // toolbar
                  "[&>.ql-toolbar.ql-snow_svg_*]:!stroke-gray-400", // toolbar-heading
                  "[&>.ql-toolbar.ql-snow_.ql-picker-label]:!text-gray-400", // toolbar-icons
                  "[&>.ql-container.ql-snow]:!border-0 [&>.ql-container.ql-snow]:min-h-[200px]", // container
                  "[&>.ql-container.ql-snow>.ql-editor]:min-h-[200px]", // editor
                )}
                theme="snow"
                modules={{
                  toolbar: [
                    "bold",
                    "italic",
                    { header: [1, 2, true] },
                    "blockquote",
                    "link",
                    "image",
                    { list: "bullet" },
                    { list: "ordered" },
                  ],
                }}
                value={email.content}
                onChange={editContent}
              />
            </Suspense>
          </div>
        </>
      )}
    </div>
  );
};

export default EmailEditor;

export type { EmailEditorProps };
