var exampleString="This is Javascript tutorial";

//toUpperCase() - converts string to uppercase
console.log(exampleString.toUpperCase());


//toLowerCase() - converts string to lowercase
console.log(exampleString.toLowerCase());


//concat - merges two or more strings
var first="Javascript";
var second="Playground";
console.log(exampleString.concat(first));
console.log(exampleString.concat(' ',first,' ',second,'.'));

console.log(first+' '+second);



//trim()- removes extra white spaces

var extraSpaceString= "                myString        ";
console.log(extraSpaceString.trim());


var extraSpaceString2="          my String    ";
console.log(extraSpaceString2.trim());



//charAt()- takes position as an arg and returns the character at that position


var charAtExample="This is my test string";
console.log(charAtExample.charAt(5));
console.log(charAtExample.charAt(11));




//split()- splits the string on the basis of the arg passed

var sampleString="This is my sample string";
console.log(sampleString.split('s'));  //returns array of multiple strings


var sampleString2="This,is,my,sample,string";
console.log(sampleString2.split(','));


var sampleString3="This is awesome";
console.log(sampleString3.split());


