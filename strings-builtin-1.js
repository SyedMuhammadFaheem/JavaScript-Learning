var myFirstString="This is a string for Javascript string functions, Javascript";


//length of string
console.log(myFirstString.length);


//find index of a string inside another string
console.log(myFirstString.indexOf('Javascript'));
console.log(myFirstString.indexOf('This'));


//find index of the last occured string inside another string
console.log(myFirstString.lastIndexOf('Javascript'));
console.log(myFirstString.lastIndexOf('This'));



//get a part of a string  slice(start,end)

console.log(myFirstString.slice(0,4));
console.log(myFirstString.slice(21,31));

console.log(myFirstString.slice(-10));
console.log(myFirstString.slice(5));


//get a substring from string
//substring(startPos,length)

console.log(myFirstString.substring(0,4));
console.log(myFirstString.substring(21,10));
console.log(myFirstString.substring(21));