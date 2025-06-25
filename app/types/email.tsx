interface Email {
    id: string
    title?: string
    subject?: string,
    content?: string,
};

interface EmailSequence {
    id?: string,
    name: string,
    product: string,
    emails: Email[],
} 

export type {
    Email,
    EmailSequence,
};
