var pl = require('tau-prolog')
var loader = require('C:\\Users\\madhu\\Downloads\\tao-prolog\\lists.js');
loader(pl);

var session = pl.create(1000);

// Load the program
var program =
	"parent(pam, bob)."+
	"parent(tom, bob)."+
	"parent(tom, liz)."+
	"parent(bob, ann)."+
	"parent(bob, pat)."+
	"parent(pat, jim).";

session.consult(program);

// Get Node.js argument: nodejs ./script.js item
var item = 'tom'//process.argv[2];

// Query the goal
//session.query("item(id(ItemID), name(" + item + ")), stock(item(ItemID), shop(ShopID), _, price(Price)), shop(id(ShopID), name(Shop), _).");

session.query("parent("+item+", Child).");

// Show answers
//session.answers(x => console.log(pl.format_answer(x)));
//var callback = function( answer ) { console.log( pl.format_answer( answer ) ); };
//var answer = session.answer(console.log); // {X/apple}
//console.log(session.answers());
var panswers = []
panswers = session.answers( x => console.log( pl.format_answer(x) ) );
//session.answer( callback ); // {X/banana}
//session.answer( callback ); // false
//console.log(panswers{0})