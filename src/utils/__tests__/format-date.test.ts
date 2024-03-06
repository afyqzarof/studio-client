import { describe, expect, it } from "vitest";
import formatDate from "../format-date";

describe("date methods", () => {
  it("return correct date format", () => {
    const date = formatDate("Tue Mar 05 2024 15:57:47 GMT+0000");
    expect(date).toBe("05.03.24");
  });
});
