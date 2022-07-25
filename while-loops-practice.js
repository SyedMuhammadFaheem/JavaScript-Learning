//Q1

var num1=15;
var num2=25;
var ans;
var i=1;

while(i<=num1 && i<=num2)
{
    if(num1%i==0 && num2%i==0)
    ans=i;

    ++i;
}

console.log(ans);

//Q2

var num1=5;
var num2=18;
var max;

if(num1>num2)
max=num1;
else
max=num2;

while(true)
{
    if(max%num1==0 && max%num2==0)
    {
        console.log(max);
        break;
    }
    ++max;
}


//Q3

var arr=[1,2,3,4,5,6,7,8,9,10,11,12];
var number=8;
var i=1;
var count=0;
while(i<number)
{
    if(i%2==0)
    ++count;
    ++i;
}

console.log(count);

//Q4


var i=1;
var sum=0;
while(i<1000)
{
    if(i%3==0 && i%5==0)
    sum+=i;
    ++i;
}
console.log(sum);


//Q5

var i=1;

while(i<=15)
{
    if(i%3==0 && i%5==0)
    {
        console.log(i,"FizzBuzz");
    }
    else if(i%3==0)
    {
        console.log(i,"Fizz");
    }
    else if(i%5==0)
    {
        console.log(i,"Buzz");
    }
    else
    console.log(i);
    ++i;

}