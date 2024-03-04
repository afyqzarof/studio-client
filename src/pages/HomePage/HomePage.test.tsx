import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("should render", async () => {
    render(<HomePage />, { wrapper: BrowserRouter });
    expect(screen.getByText(/articulate/)).toBeInTheDocument();
  });
});
