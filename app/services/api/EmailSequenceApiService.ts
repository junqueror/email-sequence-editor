import apiConfig from "~/config/api";
import type { EmailSequence } from "~/types/email";

// Service for peforming API operations related with email sequences
class EmailSequenceApiService {
  getEmailSquences = async (): Promise<EmailSequence> => {
    const response = await fetch(apiConfig.ENPOINTS.EMAIL_SEQUENCES, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw Error("Error retrieving email sequences");
    }

    const result = await response.json();

    return result as EmailSequence;
  };

  createEmailSequence = async (
    emailSequence: EmailSequence,
  ): Promise<EmailSequence> => {
    const response = await fetch(apiConfig.ENPOINTS.EMAIL_SEQUENCES, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailSequence),
    });

    if (!response.ok) {
      // throw Error(`Error creating new email sequence: ${response.status}  ${response.statusText}`);

      // Mock response when failing for testing purposes
      // TODO: Add error again and remove mock
      return emailSequence as EmailSequence;
    }

    const result = await response.json();

    return result as EmailSequence;
  };
}

const emailSequenceApiService = new EmailSequenceApiService();

export default EmailSequenceApiService;
export { emailSequenceApiService };
