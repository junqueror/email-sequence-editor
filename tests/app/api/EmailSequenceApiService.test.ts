import { afterEach, describe, it, expect, beforeAll, afterAll } from "vitest";
import { cleanup } from "@testing-library/react";
import { emailSequenceApiService } from "~/services/api/EmailSequenceApiService";
import { emailSequence } from "tests/fixtures";
import { mockApiServer } from "tests/mocks/api";

beforeAll(() => mockApiServer.listen());

afterEach(() => {
  cleanup();
  mockApiServer.resetHandlers();
});

afterAll(() => mockApiServer.close());

describe("EmailSequenceApiService service", () => {
  it("createEmailSequence method should return email sequence on request success", async () => {
    // NOTE: lthough it doesn't make much sense due to lack of logic, I have added this test to show how to hack an external service (API) with MSW.

    // Execute test
    const result =
      await emailSequenceApiService.createEmailSequence(emailSequence);

    // Assertions
    expect(result).toEqual(emailSequence);
  });

  // ...

  // This is a demo on how to implement tests on custom hooks
  // TODO: Complete tests for all components, hooks and services
});
