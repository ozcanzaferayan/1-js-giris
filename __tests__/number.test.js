const { test, expect } = require("@jest/globals");
const { numberOperations } = require("../javascript-giris");

test("Sayısal işlemler doğru çalışmalı", () => {
  const nums = numberOperations();
  expect(nums.a).toBe(10);
  expect(nums.b).toBe(20);
  expect(nums.c).toBe(20);
});
