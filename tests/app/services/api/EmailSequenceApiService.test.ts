import { afterEach, describe, it, expect, beforeAll, afterAll } from "vitest";
import { emailSequenceApiService } from "~/services/api/EmailSequenceApiService";
import { emailSequence } from "tests/fixtures";
import { mockApiServer } from "tests/mocks/api";

beforeAll(() => mockApiServer.listen());

afterEach(() => {
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

  // This is a demo on how to implement tests on logic, mocking API requests with MSW
  // TODO: Complete tests for all services

  // NOTE: I have only added different types of unittests to show skills, but in a real scenario
  // I would discuss what level of testing we want to implement and I would also value integration and end-to-end testing
  // depending on the phase of the company, size of the project, number of clients, speed required, QA team...
});
