let t = [true, false]; // Saty
let f = [false, true]; // Mithya
let b = [true, true]; // Shradhha
let n = [false, false]; // Shuny

var And = (x, y) => [Math.min(x[0], y[0]), Math.max(x[1], y[1])];

var Or = (x, y) => [Math.max(x[0], y[0]), Math.min(x[1], y[1])];

var Not = input => [input[1], input[0]];

var Min = Math.min;

console.log(And(t, Not(t)));