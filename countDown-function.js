console.log("JS Loaded!");

var countDownElement=document.getElementById('countdown');
var bgImageElement=document.getElementById('bg-image');

var initialCountDownValue=countDownElement.innerHTML;

setInterval(function(){
    initialCountDownValue=initialCountDownValue>0?initialCountDownValue-1:0;
    countDownElement.innerHTML=initialCountDownValue;


    var bgImgPath= initialCountDownValue%2==0? "pexels-gradienta-7130465.jpg":"pexels-gradienta-6985001.jpg";
    bgImageElement.src=bgImgPath;
},1000)