import React from "react";
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import * as fixtures from "tests/fixtures";
import NewEmailSequenceEditStep from "~/pages/editor/NewEmailSequence/NewEmailSequenceEditStep";
import type { Email } from "~/types/email";

describe("NewEmailSequenceEditStep component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render a list of NewEmail components", () => {
    // Prepare data
    const emails = fixtures.emails;

    // Execute test
    render(<NewEmailSequenceEditStep emails={emails} />);

    // Assertions
    emails.forEach(({ title }) => {
      expect(screen.getByText(title!)).toBeTruthy();
    });

    const emailTitleTexts = screen.getAllByText(/title-/);
    expect(emailTitleTexts).toHaveLength(emails.length);
  });

  it("should render zero NewEmail components when no emails provided", () => {
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

  it("should render a single opened NewEmail component when 'openEmailId' prop is defined", () => {
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

  // ...

  // This is a demo on how to implement tests on components
  // TODO: Complete tests for all components, hooks and services
});
