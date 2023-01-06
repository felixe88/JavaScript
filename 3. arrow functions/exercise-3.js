let arrowSum=(a,b)=>{
  return a+b;
}
let arrowSub=(a,b)=>{
  return a-b;
}
let arrowMul=(a,b)=>{
  return a*b;
}
let arrowDiv=(a,b)=>{
  return a/b;
}

let a=arrowSum(2,4);
let b=arrowSum(5,2);
let c=arrowMul(a,b);
let d=arrowSub(c,2)
console.log(result=arrowDiv(d,5));
// const sum = function (a, b) {
//   return a + b;
// }

// const subtract = function (a, b) {
//   return a - b;
// }

// const multiply = function (a, b) {
//   return a * b;
// }

// const divide = function (a, b) {
//   return a / b;
// }

// const log = function (value) {
//   console.log(value);
// }