import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import * as fixtures from "tests/fixtures";
import NewEmailSequenceEditStep from "~/pages/editor/NewEmailSequence/NewEmailSequenceEditStep";
import type { Email } from "~/types/email";

describe("NewEmailSequenceEditStep component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render a list of EmailEditor components", () => {
    // Prepare data
    const emails = fixtures.emails;

    // Execute test
    render(<NewEmailSequenceEditStep emails={emails} />);

    // Assertions
    const emailTitleTexts = screen.getAllByText(/title-/);
    expect(emailTitleTexts).toHaveLength(emails.length);
  });

  it("should render zero EmailEditor components when no emails provided", () => {
    // Prepare data
    const emails: Email[] = [];

    // Execute test
    render(<NewEmailSequenceEditStep emails={emails} />);

    // Assertions
    const emailTitleTexts = screen.queryAllByText(/title-/);
    expect(emailTitleTexts).toHaveLength(0);
  });

  it("should render a single 'Add new step' button when 'onAddNewEmail' prop is defined", () => {
    // Prepare data
    const emails = fixtures.emails;

    // Execute test
    render(
      <NewEmailSequenceEditStep emails={emails} onAddNewEmail={() => {}} />,
    );

    // Assertions
    const addNewEmailButton = screen.getByRole("button");
    expect(addNewEmailButton).toBeDefined();
  });

  it("should not render a single 'Add new step' button when 'onAddNewEmail' prop is not defined", () => {
    // Prepare data
    const emails = fixtures.emails;

    // Execute test
    render(<NewEmailSequenceEditStep emails={emails} />);

    // Assertions
    const addNewEmailButton = screen.queryByRole("button");
    expect(addNewEmailButton).toBeNull();
  });

  it("should onAddNewEmail callback when clicking Add new step' button", () => {
    // Prepare data
    const emails = fixtures.emails;

    // Prepare environment
    const onAddNewEmailCallbackSpy = vi.fn();

    // Execute test
    render(
      <NewEmailSequenceEditStep
        emails={emails}
        onAddNewEmail={onAddNewEmailCallbackSpy}
      />,
    );

    const addNewEmailButton = screen.getByRole("button");
    fireEvent.click(addNewEmailButton);

    // Assertions
    expect(onAddNewEmailCallbackSpy).toHaveBeenCalled();
  });

  it("should render a single opened EmailEditor component when 'openEmailId' prop is defined", () => {
    // Prepare data
    const emails = fixtures.emails;

    // Execute test
    render(
      <NewEmailSequenceEditStep emails={emails} openEmailId={emails[2].id} />,
    );

    // Assertions
    const emailTitleTexts = screen.queryAllByText(/title-/);
    expect(emailTitleTexts).toHaveLength(3);

    const emailSubjectInputs = screen.queryAllByPlaceholderText("Subject");
    expect(emailSubjectInputs).toHaveLength(1);
  });

  // This is a demo on how to implement tests on a React component, using fixtures, spies and different props to test different scenarios
  // TODO: Complete tests for all services

  // NOTE: I have only added different types of unittests to show skills, but in a real scenario
  // I would discuss what level of testing we want to implement and I would also value integration and end-to-end testing
  // depending on the phase of the company, size of the project, number of clients, speed required, QA team...
});
