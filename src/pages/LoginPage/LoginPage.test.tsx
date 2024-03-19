import { fireEvent, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import renderWithRouter from "../../__tests__/utils/renderWithRouter";
import LoginPage from "./LoginPage";

describe("login page tests", () => {
  it("renders correctly", () => {
    renderWithRouter(<LoginPage />);
    expect(screen.getByText(/about/)).toBeInTheDocument();
    expect(
      screen.getByText(/project boards/, { selector: "h2" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/explore page/, { selector: "h2" })
    ).toBeInTheDocument();
  });

  it("shows login on btn press", () => {
    renderWithRouter(<LoginPage />);
    const loginBox = screen.getByTestId("login-box");
    expect(loginBox).toHaveClass("login-box");

    fireEvent.click(screen.getByText(/log in/));
    expect(loginBox).toHaveClass("login-box--shown");
  });
});
