import { render, screen } from "@testing-library/react";
import LoginForm from "../LoginForm";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("LoginForm", () => {
  test("renders the login form", () => {
    render(<LoginForm />);
    const submitButton = screen.getByText("Login");
    expect(submitButton).toBeInTheDocument();
  });
  test("shows validation messages on invalid input", async () => {
    render(<LoginForm />);

    // Find the username and password fields and the submit button
    const usernameInput = screen.getByPlaceholderText("Enter your username");
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    const submitButton = screen.getByRole("button", { name: "Login" });

    // Initially, no validation errors should be displayed
    expect(screen.queryByText("required")).not.toBeInTheDocument();

    // Submit the form with empty fields
    await userEvent.click(submitButton);

    // // Check for validation messages
    expect(screen.getByText("Username is required")).toBeInTheDocument();
    expect(screen.getByText("Password is required")).toBeInTheDocument();

    // // Enter invalid data and submit
    await userEvent.type(passwordInput, "short");
    await userEvent.click(submitButton);

    // // Check for specific validation messages for short inputs
    expect(screen.getByText("Username is required")).toBeInTheDocument();
    expect(screen.getByText("Password is required")).toBeInTheDocument();

    // // Enter valid data
    await userEvent.clear(usernameInput);
    await userEvent.type(usernameInput, "validusername");
    await userEvent.clear(passwordInput);
    await userEvent.type(passwordInput, "validpassword123");
    await userEvent.click(submitButton);

    // // Ensure validation errors are gone
    expect(screen.queryByText("Username is required")).not.toBeInTheDocument();
    expect(screen.queryByText("Password is required")).not.toBeInTheDocument();
  });
});
