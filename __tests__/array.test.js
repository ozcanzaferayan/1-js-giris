const { test, expect } = require("@jest/globals");
const { arrayTest } = require("../javascript-giris");

test("Dizi işlemleri doğru çalışmalı", () => {
  expect(arrayTest()).toEqual([2, 3, 4, 5, 6]);
});
