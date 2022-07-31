var btn=document.querySelector('button');

var div=document.querySelector('div');

// btn.onclick=function()
// {
//     div.style.backgroundColor="lightcoral";
// }

btn.addEventListener('click',function(){
    div.style.backgroundColor="lightcoral";
})

//Math.random()- generates a value from 0 to 1 (contains float values);



btn.onclick=function()
{
    var ran1=Math.floor(Math.random()*255);
    var ran2=Math.floor(Math.random()*255);
    var ran3=Math.floor(Math.random()*255);
    div.style.backgroundColor="rgb(" + ran1 +"," + ran2 +"," + ran3 +")";
}