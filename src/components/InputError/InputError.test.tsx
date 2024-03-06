import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import InputError from "./InputError";

describe("input error tests", () => {
  it("should render", () => {
    render(<InputError msg="test error message" />);
    expect(screen.getByText("test error message")).toBeInTheDocument();
  });
});
