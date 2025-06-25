import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, renderHook, waitFor } from "@testing-library/react";
import useApiEmailSequences from "~/hooks/api/useApiEmailSequences";
import { emailSequence } from "tests/fixtures";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { emailSequenceApiService } from "~/services/api/EmailSequenceApiService";
import type { EmailSequence } from "~/types/email";

describe("useApiEmailSequences hook", () => {
  afterEach(() => {
    cleanup();
  });

  it("should call 'onCreateSuccess' callback when creation succeeds", async () => {
    // Prepare environment
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const successCallbackSpy = vi.fn();
    const apiServiceSpy = vi
      .spyOn(emailSequenceApiService, "createEmailSequence")
      .mockImplementation(() => Promise.resolve({} as EmailSequence));

    // Execute test
    const { result } = renderHook(
      () =>
        useApiEmailSequences({
          onCreateSuccess: successCallbackSpy,
        }),
      { wrapper },
    );

    const { createEmailSequence } = result.current;

    createEmailSequence(emailSequence);

    // Assertions
    await waitFor(() => {
      expect(successCallbackSpy).toHaveBeenCalled();
      expect(apiServiceSpy).toHaveBeenCalled();
    });
  });

  it("should call 'onCreateError' callback when creation fails", async () => {
    // Prepare environment
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const errorCallbackSpy = vi.fn();
    const apiServiceSpy = vi
      .spyOn(emailSequenceApiService, "createEmailSequence")
      .mockImplementation(() => Promise.reject());

    // Execute test
    const { result } = renderHook(
      () =>
        useApiEmailSequences({
          onCreateError: errorCallbackSpy,
        }),
      { wrapper },
    );

    const { createEmailSequence } = result.current;

    createEmailSequence(emailSequence);

    // Assertions
    await waitFor(() => {
      expect(errorCallbackSpy).toHaveBeenCalled();
      expect(apiServiceSpy).toHaveBeenCalled();
    });
  });

  // ...

  // This is a demo on how to implement tests on custom hooks
  // TODO: Complete tests for all components, hooks and services
});
