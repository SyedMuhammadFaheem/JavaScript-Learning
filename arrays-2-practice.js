console.clear();

//Q1

arr = [1,'a',2,'b',3,'c',6,'d',7,'e',8,'f'];
arr=arr.reverse();
console.log(arr);



//Q2

arr1 = [4, 11, 12, 23, 46, 65, 70, 73, 98];
arr2 = [7, 13, 25, 46, 58, 70, 84];
var flag=false;


for(var i=0;i<arr1.length;i++)
{
    for(var j=0;j<arr2.length;j++)
    {
        if(arr1[i]==arr2[j])
        {
            flag=true;
            break;
        }
    }
}
if(flag)
console.log('Element found: Yes');
else
console.log('Element found: No');


//Q3


seq1=[4,5,6,7,8];
seq2=[3,4,6,6,7,8,9];
seq3=[34,23,45,55,67,77];
var count;
count=seq3[0];
++count;

var flag=false;

for(var i=1;i<seq3.length;)
{
    
    if(count>seq3[i])
    {
        flag=true;
        break;
    }
    ++count;
}
if(flag)
console.log("Sequence is not strictly increasing!");
else
console.log("STRICTLY INCREASING!");


//Q4

var amount=46;
var coins=[25,10,5,2,1];

//first sort the array in descending order
var result=[];

for(var i=0;i<coins.length;)
{
    if(amount==0)
    break;
    if(amount<coins[i])
    {
        i++;
        continue;
    }
    amount-=coins[i];
    result.push(coins[i]);
}

console.log(result);



//Q5

var sample=[22,8, 301, 404, 35, 99];

for(var i=0;i<sample.length;i++)
{
    var str=String(sample[i]);
    var num=str[(str.length)-1];
    num=Number(num);
    if(num==1)
    str+='st';
    else if(num==2)
    str+='nd';
    else if(num==3)
    str+='rd';
    else
    str+='th';
    sample[i]=str;

}

console.log(sample);

