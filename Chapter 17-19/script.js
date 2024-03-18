//1.var number = ["0", "1", "2", "3"]
//console.log(number)
//var number1 = ["1", "0", "1", "2"]
//console.log(number1)
//var number2 = ["2", "1", "0", "1"]
//console.log(number2)

//3.
for(var i = 0; i <= 10; i++)
{
    console.log(i)
}

//4.

var table = prompt("Enter a number to show its multiplication table");
var tableLength = prompt("Enter length of multiplication table");
for (var i = 1; i <= tableLength; i++) {
    var result = table * i;
    console.log(`${table} x ${i} = ${result}`);
}


//5.
var fruit = ["apple","banana","mango","orange","strawberry",];
for ( var i = 0 ; i < fruit.length; i++)
{
    var last = ""
    //console.log(fruit[i])
    console.log(`Element at index ${i} is ${fruit[i]}`)
   

}

//6.a Counting
for (var  i = 1; i <= 15; i++) {
    console.log(i);
}

//6.b Reverse Counting
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//6.c Even 
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

//6.d Odd
for (let i = 1; i <= 19; i += 2) {
    console.log(i);
}

//6.e Series
for (let i = 1; i <= 10; i++) {
    console.log(i * 2 + "k");
}



//7.
//var bakery = ["cake","apple pie","cookie","chips","patties",]
//for (var i = 0; i <= bakery.length; )




// Given array
const a = ["cake", "apple pie", "cookie", "chips", "patties"];

// Get user input
const userInput = prompt("Enter an item to search")

// Search for the item
const foundItem = true;

// Display result
if (foundItem) {
    console.log("${userInput}" `is found in the list.`);
} else {
    console.log("${userInput}" `is not found in the list.`);
}



const A = [24, 53, 78, 91, 12];
const largest = Math.max(...A); // Spread the array elements as arguments

console.log("The largest number in the array is", largest);
