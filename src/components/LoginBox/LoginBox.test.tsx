import { fireEvent, screen } from "@testing-library/react";
import { describe, expect, it, vitest } from "vitest";
import LoginBox from "./LoginBox";
import renderWithRouter from "../../__tests__/utils/renderWithRouter";
import axios from "axios";
vitest.mock("axios");
axios.get = vitest.fn();

describe("LoginBox tests", () => {
  it("should render", () => {
    renderWithRouter(<LoginBox />);
    expect(screen.getByText(/are you new around here?/)).toBeInTheDocument();
  });

  it("displays 4 errors when 4 empty inputs", () => {
    renderWithRouter(<LoginBox />);

    const submitBtn = screen.getByText(/login/);
    fireEvent.click(submitBtn);
    const errors = screen.getAllByText(/this field is required/);

    expect(errors.length).toBe(4);
  });
});
