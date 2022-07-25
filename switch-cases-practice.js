//Q1

var monthNumber = 3;

switch(monthNumber)
{
    case 1:
        console.log(Month="January");
        console.log("Days=31");
        break;
    case 2:
        console.log(Month="February");
        console.log("Days=28");
        break;
    case 3:
        console.log(Month="March");
        console.log("Days=31");
        break;
    case 4:
        console.log(Month="April");
        console.log("Days=30");
        break;
    case 5:
        console.log(Month="May");
        console.log("Days=31");
        break;
    case 6:
        console.log(Month="June");
        console.log("Days=30");
        break;
    case 7:
        console.log(Month="July");
        console.log("Days=31");
        break;
    case 8:
        console.log(Month="August");
        console.log("Days=31");
        break;
    case 9:
        console.log(Month="September");
        console.log("Days=30");
        break;
    case 10:
        console.log(Month="October");
        console.log("Days=31");
        break;
    case 11:
        console.log(Month="November");
        console.log("Days=30");
        break;
    case 12:
        console.log(Month="December");
        console.log("Days=31");
        break;
}


//Q2

var enteredAlphabet = 'c';
switch(enteredAlphabet)
{
    case 'a':
        console.log("Vowel");
        break;
    case 'e':
        console.log("Vowel");
        break;
    case 'i':
        console.log("Vowel");
        break;
    case 'o':
        console.log("Vowel");
        break;
    case 'u':
        console.log("Vowel");
    default:
        console.log('Consonant');
}


//Q3

var enteredNumber = 2;

switch(enteredNumber%2)
{
    case 0:
        console.log("The entered number is even!");
        break;
    default:
        console.log("The entered number is odd!");

}