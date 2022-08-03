// Question # 1

console.log("This is ex1.js");

//Question # 2

var firstName = "Muhammad";
var lastName = "Faheem";
var yearOfBirth = 2002;
var currYear = 2022;
var age = currYear - yearOfBirth;

var message =
  "Hi, my name is " +
  firstName +
  " " +
  lastName +
  ". I'm " +
  age.toString() +
  " years old and I'm learning Javascript";

document.getElementById("student_message").innerHTML = message;

//Question # 3
var num1 = parseInt(document.getElementById("num_1").innerHTML);

var num2 = parseInt(document.getElementById("num_2").innerHTML);

var average = (num1 + num2) / 2;
average = average.toFixed(2);

document.getElementById("result").innerHTML = average.toString();

//Question # 4

var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;

console.log(phone1.length == 9);
console.log(phone2.length == 9);
console.log(phone3.toString().length == 9);

//Question # 5

console.log(Math.pow(32, 6));

//Question # 6

// a) var NAME;   valid

// b) var $num1;   valid

// c) var typeof;   invalid

// d) var first-name;    invalid

// e) var attempt_2;    valid

// f) var 2ndAttempt;   invalid

// g) var full name;    invalid




//Question # 7

var quantity = "25";
var number = 6;
var pressure;
var temperature = null;

console.log((quantity += quantity));    //2525
console.log((7 + 5) / number + 2);      //4
console.log(pressure);      //undefined
console.log(temperature);   //null
console.log(typeof pressure);       //undefined
console.log(typeof temperature);    //object



//Question # 8


var str1= "https://" + document.getElementById("url_1").innerHTML;

document.getElementById("url_2").innerHTML=str1;


var str2= (document.getElementById("url_3").innerHTML).replace("https://","");

document.getElementById("url_4").innerHTML=str2;