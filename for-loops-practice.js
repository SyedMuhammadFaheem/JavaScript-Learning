//Q1

var str="Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.";

str=str.replace(/a/g,'4');
str=str.replace(/e/g,'3');
str=str.replace(/i/g,'1');
str=str.replace(/s/g,'5');
str=str.replace(/o/g,'0');

console.log(str);



//Q2

var str2="Good, better, best. Never let it rest. 'Til your good is better and your better is best'";


var count=0;
for(var i=0;i<str2.length;i++)
{
    if(str2[i]=='a' || str2[i]=='e' || str2[i]=='i' || str2[i]=='o' || str2[i]=='u')
    ++count;
}

console.log("Number of vowels:",count);



//Q3

var str3='The Quick Brown Fox';

var temp='';


for(var i=0;i<str3.length;i++)
{
    var tempChar=str3[i];
    if(tempChar==tempChar.toUpperCase())
    temp+=tempChar.toLowerCase();
    else if(tempChar==tempChar.toLowerCase())
    temp+=tempChar.toUpperCase();
    else
    temp+=tempChar;
}
str3=temp;

console.log(temp);



//Q4


for(var i=0;i<=10;i++)
{
    if(i%2==0)
    console.log(i," is even");
    else
    console.log(i," is odd");
}

//Q5

var Stringlist=[];

var example="There is exactly one space between each word and no punctuation is used";

Stringlist=example.split(' ');

for(var j=0;j<Stringlist.length;j++)
{
    var tempStr=Stringlist[j];
    if(tempStr.length%2!=0)
    Stringlist[j]=tempStr.split("").reverse().join("");

}

example=String(Stringlist);
example=example.replace(/,/g," ");
console.log(example);