import { useMutation, useQuery } from "@tanstack/react-query";
import apiConfig from "~/config/api";
import { emailSequenceApiService } from "~/services/api/EmailSequenceApiService";
import type { EmailSequence } from "~/types/email";

interface UseApiEmailSequencesProps {
  onCreateSuccess?: (emailSequence?: EmailSequence) => void;
  onCreateError?: (error?: Error) => void;
}

// Hook to manage email sequence operations by using an API service
const useApiEmailSequences = (
  { onCreateSuccess, onCreateError }: UseApiEmailSequencesProps = {
    onCreateSuccess: () => {},
    onCreateError: () => {},
  },
) => {
  // Retrieve list of email sequences (GET)
  const { data, isLoading, isError } = useQuery({
    queryKey: [apiConfig.ENPOINTS.EMAIL_SEQUENCES],
    queryFn: emailSequenceApiService.getEmailSquences,
    enabled: false, // We don't need it now, jsut added for demo purposes
  });

  // Create new email sequences (POST)
  const create = useMutation({
    mutationFn: emailSequenceApiService.createEmailSequence,
    onSuccess: onCreateSuccess,
    onError: onCreateError,
  });

  return {
    emailSequences: data,
    isLoading,
    isError,
    createEmailSequence: create.mutate,
  };
};

export default useApiEmailSequences;
