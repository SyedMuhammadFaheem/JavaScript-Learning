//Events

{
  /* <button id="click-me">Click here</button>
<button id="hover-me">Move the cursor over here</button>
<button id="leave-me">Move the cursor out of here</button> */
}

// document.getElementById("click-me").onclick=function()
// {
//     alert("You clicked the button!");
// }

// document.getElementById("hover-me").onmouseover=function()
// {
//     alert("You moved the mouse over the button!");
// }

// document.getElementById("leave-me").onmouseout=function()
// {
//     alert("You moved the mouse out of the button!");
// }

// document.onkeydown = function() {
//     alert('You pressed a key');
// };

// document.onkeydown = function(event) {
//     alert('You pressed the following key: ' + event.keyCode);
// };

// document.onkeydown = function(event) {
//     if(event.keyCode == '65') {
//         alert("Do something if letter 'a' is pressed.");
//     }
// };

//CSS Manipulation

// document.getElementById("color_button").onclick=function(){
//     document.getElementById("color_button").style.backgroundColor="purple";

//     document.getElementById("color_button").style.transform="translateX(100px)";
// }

//Nesting Loops and conditionals

// var employees = [

//     {
//         'name': 'Charles Silva',
//         'age': 45,
//         'children': ['Andrew Silva', 'Maria Silva']

//     },

//     {
//         'name': 'Elizabeth Green',
//         'age': 32,
//         'children': ['Peter Green']

//     },

//     {
//         'name': 'George Banks',
//         'age': 39,
//         'children': ['Philipp Banks', 'Rose Banks', 'Tara Banks']

//     }

// ];

// document.getElementById("children").innerHTML = "";

// for (var a = 0; a < employees.length; a++) {
//   var childrenList = employees[a].children;

//   for (var b = 0; b < childrenList.length; b++) {
//     var child = childrenList[b];
//     document.getElementById("children").innerHTML += "<li>" + child + "</li>";
//   }
// }

//Challenge : Date Intervals

// var date1 = new Date("March 26,2020")
// var date2= new Date("April 02,2020")

// var res=(date2-date1)/86400000;

// document.getElementById('delivery_time').innerHTML=res + ' days';

// //Practice Task
// var date1 = new Date("March 26,2020")
// var s1=date1.getTime();
// var s2=7*86400000;
// s1+=s2;
// var temp= new Date(s1);
// temp=temp.toString()
// console.log(temp);

//The Watch Challenge

//  date = new Date();

// var seconds = date.getSeconds();

// var minutes = date.getMinutes();

// var hours = date.getHours();
// hours-=12;

// document.getElementById("seconds").innerHTML = seconds.toString();

// document.getElementById("minutes").innerHTML = minutes.toString();

// document.getElementById("hours").innerHTML = hours.toString();

// window.setInterval(function () {
//   var date = new Date();
//   var seconds = date.getSeconds();
//   var minutes = date.getMinutes();
//   var hours = date.getHours();
//   hours-=12;

//   if(seconds<10)
//   {
//       document.getElementById("seconds").innerHTML = '0';
//       document.getElementById("seconds").innerHTML += seconds.toString();
//   }
//   else
//   document.getElementById("seconds").innerHTML = seconds.toString();

//   document.getElementById("minutes").innerHTML = minutes.toString();

//   document.getElementById("hours").innerHTML = hours.toString();
// }, 1000);

//Forms
// var button = document.getElementById("show_option");

// button.addEventListener("click", function () {
//   var selectField = document.getElementById("options");
//   var selectedOption = selectField.options.selectedIndex;
//   var selectedValue = selectField.options[selectedOption];
//   document.getElementById("selected_option").innerHTML =
//     selectedValue.innerHTML;
// });


// //radio buttons
// var button = document.getElementById("show_radio");
// button.addEventListener("click", function () {
//   var radio = document.getElementsByName("gender");
//   var radio_selected;
//   for (var i = 0; i < radio.length; i++) {
//     if (radio[i].checked) radio_selected = radio[i];
//   }
//   document.getElementById("selected_radio").innerHTML = radio_selected.value;
// });



// //checkboxes
// var button = document.getElementById("show_check");
// button.addEventListener("click", function () {
//   var check = document.getElementsByName("interest");
//   document.getElementById("selected_check").innerHTML = "";
//   for (var i = 0; i < check.length; i++) {
//     if (check[i].checked)
//     document.getElementById("selected_check").innerHTML+='<ul>' + check[i].value + '</ul>';
//   }
  
// });



//onchange

document.getElementById('education_level').addEventListener('change',function()
{
    var selected=document.getElementById('education_level').options.selectedIndex;
    var value=document.getElementById('education_level').options[selected];
    document.getElementById('selected_level').innerHTML=value.innerHTML;
})



var check= document.getElementsByName('meal');

for(var i=0;i<check.length;i++)
{
  check[i].addEventListener('change',function()
  {
    document.getElementById('selected_check').innerHTML='<ul>';
    for(var j=0;j<check.length;j++)
    {

        if(check[j].checked)
        document.getElementById('selected_check').innerHTML+='<li>'+check[j].value+'</li>';
    }
    document.getElementById('selected_check').innerHTML+='</ul>';
  })
}