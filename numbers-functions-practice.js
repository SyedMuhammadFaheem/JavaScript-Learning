console.log(toString(100));     //object undefined
console.log(parseInt('44'));    //44 (int)
console.log(parseInt('22.222'));    //22 (int)
console.log(parseInt('Banana'));    //NaN
console.log(parseFloat(12));    //12 (float)
console.log(parseFloat(13.3));  //13.3(float)
var num1 = 10; 
console.log(num1.toFixed(2));   //10.00
num1 = 15.456789; 
console.log(num1.toFixed());    //15
num1 = 15.456789; 
console.log(num1.toFixed(2));   //15.46
num1 = 15.456789; 
console.log(num1.toFixed(3));   //15.457