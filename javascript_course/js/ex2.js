//Question # 1

function celsiusToFahrenheit(celsius)
{
    var fahrenheit=(9 * celsius/5)+32;
    return fahrenheit;
}

document.getElementById("fahr_1").innerHTML=celsiusToFahrenheit(parseFloat(document.getElementById("celsius_1").innerHTML));


document.getElementById("fahr_2").innerHTML=celsiusToFahrenheit(parseFloat(document.getElementById("celsius_2").innerHTML));


document.getElementById("fahr_3").innerHTML=celsiusToFahrenheit(parseFloat(document.getElementById("celsius_3").innerHTML));



//Question # 2

var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 


document.getElementById("best_students").innerHTML=classification.slice(-3);



//Question # 3

var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4,

    'totalReviews':function()
    {
        var total= this["5_stars_reviews"]+this["4_stars_reviews"]+this["3_stars_reviews"]+this["2_stars_reviews"]+this["1_stars_reviews"];
        return total;
    }
}


document.getElementById("course_title").innerHTML=course.title;


document.getElementById("main_category").innerHTML=course.categories[0];


document.getElementById("reviews_5_stars").innerHTML=Math.round(course["5_stars_reviews"]/course.totalReviews()*100) + '%';



//Question # 4


var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];


var lastItem=shoppingList[shoppingList.length-1];
shoppingList.unshift(lastItem);
console.log(shoppingList);


shoppingList.push("Cheese");
shoppingList.push("Eggs");

console.log(shoppingList);