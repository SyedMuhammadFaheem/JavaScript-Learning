//Q1

String(123)      //"123"
String(-12.3)   //"-12.3"
console.log(String(null));      //null
console.log(String(undefined)); //undefined
console.log(String(true));      //true
console.log(String(false));     //false



//Q2

console.log(Boolean(''));   //false
Boolean('Hello')    //true
Boolean(0)          //false
Boolean(200)        //true4
Boolean(-0)         //false
console.log(Boolean(-200))       //true
Boolean(NaN)        //false
Boolean(null)       //false
Boolean(undefined)  //false
Boolean(false)      //false



//Q3

console.log(Number(null))
console.log(Number(undefined))
console.log(Number(true))
console.log(Number(false))
console.log(Number(" 12 "))
console.log(Number("-12.34"))
console.log(Number("\n"))
console.log(Number(" 12s "))
console.log(Number(123))