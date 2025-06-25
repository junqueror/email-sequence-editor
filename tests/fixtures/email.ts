import type { Email, EmailSequence } from "~/types/email";

const emails: Email[] = [
  {
    id: "email-1",
    title: "title-1",
    subject: "subject-1",
    content: "content-1",
  },
  {
    id: "email-2",
    title: "title-2",
    subject: "subject-2",
    content: "content-2",
  },
  {
    id: "email-3",
    title: "title-3",
    subject: "subject-3",
    content: "content-3",
  },
];

const emailSequence: EmailSequence = {
  id: "email-sequence-1",
  name: "email-name-1",
  product: "email-product-1",
  emails: emails,
};

export { emails, emailSequence };
