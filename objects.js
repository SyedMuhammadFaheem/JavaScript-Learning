var myCars={
    "p1":"350 kmph",
    "gallardo":"320 kmph",
    "veyron":"409 kmph",
    "agera":"429 kmph"
}


console.log(myCars);
console.log(typeof(myCars));


var myAgera={
    name:"Agera",
    manufacturer:{
        name:"Koinigsegg",
        location:"Sweden"
    },
    topSpeed:429,
    color:"Black",
    spoilers:false,
    applyBrakes: function(){
        setTimeout(function(){
            console.log("Car has stopped!");
        },5000);

    }
}


console.log(myAgera.name);
console.log(myAgera.topSpeed);
console.log(myAgera.manufacturer);
console.log(myAgera.manufacturer.name);
console.log(myAgera.applyBrakes());
console.log(myAgera.applyBrakes);