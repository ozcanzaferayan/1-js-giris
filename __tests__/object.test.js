const { test, expect } = require("@jest/globals");
const { objectTest } = require("../javascript-giris");

test("Nesne işlemleri doğru çalışmalı", () => {
  expect(objectTest()).toEqual({ name: "Ali", city: "İstanbul" });
});
