/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */

let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);

function composition(a, b) {
    return a + b;
}
let one = 1;
let four = 4;
let a = composition(one, four);
console.log(a);

function division(a, b) {
    return a / b;
}
let four = 4;
let two = 2;
let b = division(four, two);
console.log(b);

function substraction(a, b) {
    return a - b;
  }
  let three = 3;
  let two = 2;
  let c = substraction(three, two);
  console.log(c);

  function multiplication(a, b) {
    return a * b;
  }
  let five = 5;
  let two = 2;
  let d = multiplication(five, two);
  console.log(d);