import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vitest } from "vitest";
import Input from "./Input";

const onChangeMock = vitest.fn();
const renderDefaultInput = () => {
  render(
    <Input
      name="username"
      label="enter username"
      handleChange={onChangeMock}
      placeholder="enter username"
      disabled={false}
      msg=""
    />
  );
};

describe("input test", () => {
  it("renders default input", () => {
    renderDefaultInput();
    expect(screen.getByLabelText(/username/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter username/)).toBeInTheDocument();
  });

  it("responds to change event", () => {
    renderDefaultInput();
    const event = {
      preventDefault() {},
      target: { value: "test username" },
    };
    const input = screen.getByPlaceholderText(/enter username/);
    act(() => {
      fireEvent.change(input, event);
    });
    expect(screen.getByDisplayValue(/test username/)).toBeInTheDocument();
  });

  it("renders error message", () => {
    render(
      <Input
        name="username"
        label="enter username"
        handleChange={onChangeMock}
        placeholder="enter username"
        disabled={false}
        msg="test error message"
      />
    );
    expect(screen.getByText(/test error message/)).toBeInTheDocument();
  });
});
