var mainHeading= document.getElementById("main-heading");


mainHeading.classList.add('big');
// setTimeout(function()
// {
//     mainHeading.classList.remove('big');
// },2000)


var btn=document.getElementById('btn-click');

btn.addEventListener('click',function()
{
    if(mainHeading.classList.contains('big'))
    mainHeading.classList.remove('big');
    else
    mainHeading.classList.add('big');
})