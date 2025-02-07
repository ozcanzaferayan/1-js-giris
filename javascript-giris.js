// 1. Değişken Tanımlama Fonksiyonu
function variableTest() {
  // x, y ve z değişkenlerini teste uygun değerlerle tanımlayınız
  var x = undefined;
  let y = undefined;
  const z = undefined;
  return { x, y, z };
}

// 2. Sayısal İşlemler Fonksiyonu
function numberOperations() {
  // Aşağıdaki sayılara teste uygun değerleri atayınız
  let a = 5 + undefined;
  let b = 10 * undefined;
  let c = 40 - undefined;
  return { a, b, c };
}

// 3. Dizi İşlemleri Fonksiyonu
function arrayTest() {
  // Diziyi teste uygun değerlerle tanımlayınız
  let arr = [undefined, undefined, undefined, undefined, undefined];
  // 0 yerine uygun değerleri atayınız
  arr.push(undefined);
  arr.shift();
  return arr;
}

// 4. Nesne İşlemleri Fonksiyonu
function objectTest() {
  // Nesneyi teste uygun değerlerle tanımlayınız
  let obj = { name: undefined, age: undefined };
  // Uygun değerleri atayınız
  obj.city = undefined;
  delete obj.age;
  return obj;
}

// 5. String İşlemleri Fonksiyonu
function stringTest() {
  // Uygun değerleri atayınız
  let text = "JavaScript";
  // undefined yerine uygun metodu kullanınız
  let upper = text.undefined();
  // undefined yerine uygun metodu kullanınız
  let lower = text.undefined();
  return { upper, lower };
}

// Modül Olarak Dışa Aktarma
module.exports = {
  variableTest,
  numberOperations,
  arrayTest,
  objectTest,
  stringTest,
};
