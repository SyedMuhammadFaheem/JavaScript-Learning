//Question # 1

function celsiusToFahrenheit(celsius)
{
    var fahrenheit= (9 * celsius / 5) + 32;
    return fahrenheit;
}

document.getElementById('convert').addEventListener('click',function()
{
    var temperature= document.getElementById('temp_celsius').value;

    if(temperature=="")
    alert("The temperature is invalid!");
    else
    document.getElementById('temp_fahr').innerHTML=celsiusToFahrenheit(temperature);
})




//Question # 2

var startYear=2022;


document.getElementById('anos_copa').innerHTML="";

while(startYear<=2050)
{
    document.getElementById('anos_copa').innerHTML+='<li>' + startYear + '</li>';
    startYear+=4;
}


//Question # 3

var calculate=document.getElementById('calculate');

calculate.addEventListener('click',function()
{
    var grade1=parseFloat(document.getElementById('grade1').value);
    var grade2=parseFloat(document.getElementById('grade2').value);
    var absence=parseInt(document.getElementById('absences').value);

    if(grade1 == "" || grade2 == "" || absence == "")
    alert('Every field must be filled!');
    else
    {
        var average=(grade1+grade2)/2;
        var presence=(20-absence)/20;

        var res;
        if(average<6.5 && presence<0.7)
        res="The student has failed due to unsufficient grade and too many absences!";
        else if(average<6.5)
        res="The student has failed due to unsufficient grade!";
        else if(presence<0.7)
        res="The student has failed due to too many absences!";
        else
        res="The student has passed!";
        

        document.getElementById('result').innerHTML=res;
    }
})



//Question # 4

var sales = [

    {
        'student': 'Jason Gomes',
        'date': '10/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    },

    {
        'student': 'Carlos Blue',
        'date': '10/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Martin Heyes',
        'date': '11/06/2018',
        'amount': 39.99,
        'refundRequested': '13/06/2018'
        
    },

    {
        'student': 'Isabella Hopkins',
        'date': '11/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Andrew Walt',
        'date': '12/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    }

];

document.getElementById('course_sales').innerHTML="";

var sum=0;
for(var i=0;i<sales.length;i++)
{
    if(sales[i].refundRequested==null)
    {
        var res='<tr>';
        res+="<td>" + sales[i].student + "</td>";
        res+="<td>" + sales[i].date + "</td>";
        res+="<td>" + sales[i].amount.toString() + "</td>";
        res+='</tr>';
        document.getElementById('course_sales').innerHTML+=res;
        sum+=sales[i].amount;
    }
}

document.getElementById('total_sold').innerHTML="";
document.getElementById('total_sold').innerHTML+=sum.toString();