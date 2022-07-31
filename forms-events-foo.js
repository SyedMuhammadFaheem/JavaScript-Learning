var username= document.getElementById('username');

// username.addEventListener('change',function(){
//     console.log('Value Changed');
// })


// username.addEventListener('input',function(){
//     console.log('Value Changed');
// })

username.addEventListener('input',function(event){
    var currentValue=event.target.value;
    currentValue=currentValue.toUpperCase();
    console.log(currentValue);
    username.value=currentValue;
})


username.addEventListener('focus',function(){
    console.log('Element Focused');
})

username.addEventListener('blur',function(){
    console.log('Element Lost Focus');
})

var submitBtn=document.getElementById('login-form');

submitBtn.addEventListener('submit',function(event){
    alert('Submit Button Clicked');
    event.preventDefault();
})