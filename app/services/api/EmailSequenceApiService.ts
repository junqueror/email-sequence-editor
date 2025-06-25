import apiConfig from "~/config/api";
import type { EmailSequence } from "~/types/email";

class EmailSequenceApiService {
  getEmailSquences = async () => {
    const response = await fetch(apiConfig.ENPOINTS.EMAIL_SEQUENCES, {
        method: "GET",
        headers: {
        'Accept': 'application/json',
        },
    });
    
    if (!response.ok) {
        throw Error("Error retrieving email sequences");
    }
    
    return response.json();
  };

  createEmailSequence = async (emailSequence: EmailSequence) => {
    const response = await fetch(apiConfig.ENPOINTS.EMAIL_SEQUENCES, {
        method: "POST",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailSequence),
    });
    
    if (!response.ok) {
      // throw Error(`Error creating new email sequence: ${response.status}  ${response.statusText}`);

      // Mock response when failing for testing purposes
      // TODO: Add error again and remove mock
      return emailSequence;
    }
    
    return response.json();
  };
}

const emailSequenceApiService = new EmailSequenceApiService();

export default EmailSequenceApiService;
export {
  emailSequenceApiService,
};
