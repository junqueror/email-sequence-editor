import React from "react";
import type { FC } from "react";
import DOMPurify from "dompurify";
import type { Email } from "~/types/email";

const DEFAULT_EMAIL_VALUE = "<p><br></p>";

interface EmailSummaryProps {
  email: Email;
  className?: string;
}

const EmailSummary: FC<EmailSummaryProps> = ({ email, className = "" }) => (
  <div className={className}>
    <div className="text-gray-700 font-semibold">
      <span>{email.title}</span>
    </div>
    <div>
      <span>Subject: </span>
      <span>{email.subject || "-"}</span>
    </div>
    <div className="gap-1">
      <span>Content:</span>
      {!email.content || email.content === DEFAULT_EMAIL_VALUE ? (
        <span>-</span>
      ) : (
        <p
          className="whitespace-pre-wrap"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(email.content),
          }}
        />
      )}
    </div>
  </div>
);

export default EmailSummary;

export type { EmailSummaryProps };
