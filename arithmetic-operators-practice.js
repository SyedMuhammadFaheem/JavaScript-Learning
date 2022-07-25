//Q1

var num1 = 1 + 5;   //6
var num2 = num1 / 4;    //1.5
var num3 = 1 + 5;   //6;
var num4 = num3 / 4;    //1.5
console.log(num2 + " " + num4);   //1.5 1.5


//Q2

var a = 1;
var b = 2;
var c;
var d;
c = ++b;    //c=3  b=3
d = a++;    //d=1  a=2
c++;    //c=4
b++;    //b=4
++a;    //a=3
console.log(a + " " + b + " " + c);


//Q3

var input = 7;
var output1 = ++input + ++input + ++input;  //output1=27   input=10
var output2 = input++ + input++ + input++;  //output2=33   input=13
var output3 = input++ + ++input + input++;  //output2=43   input=16
console.log(output1 + ' ' + output2 + ' ' + output3);