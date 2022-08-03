// document.body.addEventListener('keydown',function(event)
// {
//     var key=event.keyCode;
//     if(key===13)
//     console.log("Key Down");
// })

// document.body.addEventListener('keyup',function(event)
// {
//     var key=event.keyCode;
//     if(key===13)
//     console.log("Key Up");
// })

// document.body.addEventListener('keypress',function(event)
// {
//     var key=event.keyCode;
//     if(key===13)
//     console.log("Key Press");
// })

var btnOne = document.getElementById("box1");
var btnTwo = document.getElementById("box2");
var btnThree = document.getElementById("box3");
var btnFour = document.getElementById("box4");
var btnFive = document.getElementById("box5");
var btnSix = document.getElementById("box6");
var btnSeven = document.getElementById("box7");
var btnEight = document.getElementById("box8");
var btnNine = document.getElementById("box9");

document.body.addEventListener("keydown", function (e) {
  var key = e.keyCode;
  if (key === 65) {
    document.getElementById("audio").setAttribute("src", "sioun.mp3");
    document.getElementById("audio").load();
    document.getElementById("audio").play();
    btnOne.style.border = "3px solid rgb(255,255,0)";
    btnOne.style.boxShadow = "3px 3px yellow";
  }
});

document.body.addEventListener("keyup", function () {
    document.getElementById("audio").setAttribute("src", "");
  document.getElementById("audio").pause();
  btnOne.style.border = "3px solid rgb(0,0,0)";
  btnOne.style.boxShadow = "";
});
