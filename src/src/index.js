let t = [true, false]; // Saty [1,0]
let f = [false, true]; // Mithya [0,1]
let b = [true, true]; // Shradhha [1,1]
let n = [false, false]; // Shuny [0,0]

var and = (x, y) => [Math.min(x[0], y[0]), Math.max(x[1], y[1])];

var or = (x, y) => [Math.max(x[0], y[0]), Math.min(x[1], y[1])];

var not = input => [input[1], input[0]];

var min = Math.min;

// AND Test
/* console.log('and(t, t) :', and(t, t));
console.log('and(t, f) :', and(t, f));
console.log('and(t, b) :', and(t, b));
console.log('and(t, n) :', and(t, n));

console.log('and(f, t) :', and(f, t));
console.log('and(f, f) :', and(f, f));
console.log('and(f, b) :', and(f, b));
console.log('and(f, n) :', and(f, n));

console.log('and(b, t) :', and(b, t));
console.log('and(b, f) :', and(b, f));
console.log('and(b, b) :', and(b, b));
console.log('and(b, n) :', and(b, n));

console.log('and(n, t) :', and(n, t));
console.log('and(n, f) :', and(n, f));
console.log('and(n, b) :', and(n, b));
console.log('and(n, n) :', and(n, n)); */

//console.log('and(f, t) :', or([0, 0.40], [0.30, 0.60]));
