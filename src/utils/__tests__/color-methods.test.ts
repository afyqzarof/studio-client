import { describe, it, expect } from "vitest";
import {
  getAnalogousColors,
  getComplementaryColor,
  getTriadicColors,
} from "../color-methods";

describe("correct color methods", () => {
  it("should return analogous color", () => {
    const color = getComplementaryColor("#00ff00");
    expect(color).toBe("#ff00ff");
  });

  it("should return analogous colors", () => {
    const colors = getAnalogousColors("#00ff00");
    expect(colors).toStrictEqual(["#00ff80", "#00ffff", "#0080ff"]);
  });

  it("should return triadic colors", () => {
    const colors = getTriadicColors("#00ff00");
    console.log(colors);
    expect(colors).toStrictEqual(["#0000ff", "#ff0000"]);
  });
});
