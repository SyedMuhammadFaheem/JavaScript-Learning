function greetings(personName)
{
    console.log("Welcome " + personName);
}


greetings("Faheem");
greetings("Nate");
greetings("Vijay");



function totalSum(num1,num2,num3=40 )//default value
{
    console.log(num1+num2);
}

//if arguments not given they are undefined.

totalSum(2,7);
totalSum(22,38);