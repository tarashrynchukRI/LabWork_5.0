const k = require("./script.js");

test("Math.sin(2) / 1 + Math.cos(1) / (2 * 2) to equal 1.044", () => {
  expect(k(2, 1)).toBe("1.044");
});
