//Q1

var length=200;
var breadth=200;

if(length==breadth)
console.log("This is a square");
else
console.log("This is a rectangle");




//Q2

var num1=5, num2=8, num3=20;
if(num1>num2)
{
    if(num1>num3)
    console.log("num1 is the greatest");
    else
    console.log("num3 is the greatest");
}
else if(num2>num3)
console.log("num2 is the greatest");
else
console.log("num3 is the greatest");


//Q3

var enteredMarks = 77
if(enteredMarks>80)
console.log("Grade A");
else if(enteredMarks>60 && enteredMarks<=80)
console.log("Grade B");
else if(enteredMarks>50 && enteredMarks<=60)
console.log("Grade C");
else if(enteredMarks>45 && enteredMarks<=50)
console.log("Grade D");
else if(enteredMarks>25 && enteredMarks<=45)
console.log("Grade E");
else
console.log("Grade F");



//Q4

var numberOfItemPurchased = 11;

if((numberOfItemPurchased*100)>1000)
console.log("The total cost of the user is",(numberOfItemPurchased*100)-(((numberOfItemPurchased*100)*10)/100))