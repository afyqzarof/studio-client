import { describe, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("should render", async () => {
    render(<HomePage />);
  });
});
