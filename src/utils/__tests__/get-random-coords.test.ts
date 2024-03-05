import { describe, expect, it } from "vitest";
import getRandomCoords from "../get-random-coords";

describe("get random coordinates", () => {
  it("return coordinates", () => {
    const coordinates = getRandomCoords();

    expect(typeof coordinates.x).toBe("number");
    expect(typeof coordinates.y).toBe("number");
  });
});
