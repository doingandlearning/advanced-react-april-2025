import { add } from "./maths";
import { test, expect, describe } from "vitest";

describe("adds two numbers correctly", () => {
  const testCases = [
    { a: 2, b: 3, expected: 5 },
    { a: -1, b: -1, expected: -2 },
    { a: 0.1, b: 0.3, expected: 0.4 },
    { a: 2_000_000, b: 3_000_000, expected: 5_000_000 },
  ];

  for (const { a, b, expected } of testCases) {
    test(`Testing that ${a} + ${b} === ${expected}`, () => {
      // Arrange: Given
      // Act : When
      const actual = add(a, b);

      // Assert: Then ...
      expect(actual).toBe(expected);
    });
  }

  test.each(testCases)(`Testing that %s`, ({ a, b, expected }) => {
    const actual = add(a, b);
    expect(actual).toBe(expected);
  });
});

test("doesn't add non-numbers", () => {
  expect(() => add("a" as any, true as any)).toThrow();
  expect(() =>
    add("a" as any, true as any)
  ).toThrowErrorMatchingInlineSnapshot(`[TypeError: Both arguments should be numbers]`);
});
