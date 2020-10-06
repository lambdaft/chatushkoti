var moment = require('moment');
var now = moment();


var then = now.subtract(500, 'd');
console.log(then.format('L'));

for (i = 0; i < 1000; i++) {
    var d = then.add(1, 'd');
    console.log(d.format('L'));
}