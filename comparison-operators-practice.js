//Q1


var a = 10;
var b = 5;
var c = 12;
var e = 8;
var d;
d = parseInt((a * (c - b) / e + (b + c)) <= (e * (c + a) / (b + c) + a));
console.log(d);    //false
if (d == 1){
console.log((a * (c - b) / e + (b + c)));
} else {
console.log((e * (c + a) / (b + c) + a));
}



//Q2

var n = 2;
var p = 4;
var q = 5;
var w = 3;
if ( !((p * q) /n <= (q * w) + n/p )) {
console.log( ++p + w++ + " " + ++n);    
}
else {
console.log(--p + q-- + " " + --n);     //8 1
}