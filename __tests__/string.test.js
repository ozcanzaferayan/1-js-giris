const { test, expect } = require("@jest/globals");
const { stringTest } = require("../javascript-giris");

test("String işlemleri doğru çalışmalı", () => {
  const result = stringTest();
  expect(result.upper).toBe("JAVASCRIPT");
  expect(result.lower).toBe("javascript");
});
