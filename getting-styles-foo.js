var btnIncrease= document.getElementById('btn-increase');

var btnDecrease= document.getElementById('btn-decrease');

var mainHeading=document.getElementById('main-heading');

var currFontValue=Number(window.getComputedStyle(mainHeading).fontSize.slice(0,window.getComputedStyle(mainHeading).fontSize.length-2));



btnIncrease.addEventListener('click',function(){
    currFontValue+=10;
    mainHeading.style.fontSize=currFontValue+'px';
});


btnDecrease.addEventListener('click',function(){
    currFontValue-=10;
    mainHeading.style.fontSize=currFontValue + 'px';
})