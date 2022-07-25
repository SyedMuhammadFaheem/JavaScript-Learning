//Q1


var Array1= ['asdf', 'sd', 'something','right','position'];

var max=-9999;
var index;

for(var i=0;i<Array1.length;i++)
{
    if(max<Array1[i].length)
    {
        max=Array1[i].length;
        index=i;
    }
}

console.log("Longest String in array:",Array1[index]," with",max," characters.");



//Q2

var Array2= [NaN, 0, 15, false, -22, '',undefined, 47, null,94]


var result=[];
for(var i=0;i<Array2.length;i++)
{
    if(Array2[i] && Array2!==undefined)
    result.push(Array2[i]);

}

console.log(result);



//Q3

var Array3= [1, 3, 6, 2, 5, 10];

var sum1=0,sum2=0;
for(var i=0;i<Array3.length;i++)
{
    if(i%2==0)
    sum1+=Array3[i];
    else
    sum2+=Array3[i];
}

var res=[sum1,sum2];
console.log(res);