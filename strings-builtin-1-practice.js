var mStr = "This is my test string to practice the JavaScript string function concepts. This is gonna be fun."

//length of the string
console.log(mStr.length);

//length of second sentence
tempStr=mStr.slice(mStr.lastIndexOf('This'),(mStr.length)-1);
console.log(tempStr.length);

//first and last occurence of 'This'
console.log(mStr.indexOf('This'));
console.log(mStr.lastIndexOf('This'));


//substring
console.log(mStr.substring(0,12));
console.log(mStr.slice(-13,-1));