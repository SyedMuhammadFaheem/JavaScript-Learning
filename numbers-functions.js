var num=10;
var a=5;

// toString()-- takes number as input and returns a string
console.log(typeof(num.toString()));
console.log(typeof(a.toString()));


var string1="Faheem";
var string2="10";
var string3="15.5";

// pareseInt()--takes string numeral as input and returns an integer number
console.log(typeof(parseInt(string1)));
console.log(parseInt(string1));     // string containing alphabets would return NaN

// pareseFloat()--takes string numeral as input and returns a float number
console.log(typeof(parseFloat(string2)));
console.log(typeof(parseFloat(string3)));


var floatNumeral=69.08765;

// toFixed()-- takes a float number as input and returns the number upto the decimal places 
//             given as a argument
console.log(floatNumeral.toFixed(2));