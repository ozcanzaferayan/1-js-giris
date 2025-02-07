const { test, expect } = require("@jest/globals");
const { variableTest } = require("../javascript-giris");

test("var, let ve const değişkenleri doğru tanımlanmalı", () => {
  const vars = variableTest();
  expect(vars.x).toBe(10);
  expect(vars.y).toBe(20);
  expect(vars.z).toBe(30);
});
