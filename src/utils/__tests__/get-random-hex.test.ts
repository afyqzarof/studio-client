import { describe, expect, it } from "vitest";
import getRandomHex from "../get-random-hex";

describe("get random hex", () => {
  it("return correct format", () => {
    const hex = getRandomHex();

    expect(hex.match(/#/));
    expect(hex.length).toBe(7);
  });
});
