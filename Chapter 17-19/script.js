/*//1.
var number = ["0", "1", "2", "3"]
console.log(number)
var number1 = ["1", "0", "1", "2"]
console.log(number1)
var number2 = ["2", "1", "0", "1"]
console.log(number2)

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
    alert(`${table} x ${i} = ${result}`)
}

//5.
var fruit = ["apple","banana","mango","orange","strawberry",];
for ( var i = 0 ; i < fruit.length; i++)
{
    var last = ""
    //console.log(fruit[i])
    console.log(`Element at index ${i} is ${fruit[i]}`)
    alert(`Element at index ${i} is ${fruit[i]}`)
}

//6.a Counting
for (var  i = 1; i <= 15; i++) {
    console.log(i);
    alert(i);
}

//6.b Reverse Counting
for (let i = 10; i >= 1; i--) {
    console.log(i);
    alert(i);
}

//6.c Even 
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
    alert(i);
}

//6.d Odd
for (let i = 1; i <= 19; i += 2) {
    console.log(i);
    alert(i);
}

//6.e Series
for (let i = 1; i <= 10; i++) {
    console.log(i * 2 + "k");
    alert(i * 2 + "k");
}

//7.
const A = ["cake", "apple pie", "cookie", "chips", "patties"];
alert(A)
const userInput = prompt("Enter an item to search");
const foundItem = A.includes(userInput.toLowerCase());
if (foundItem) {
    console.log(`"${userInput}" is found in the list.`);
    alert(`"${userInput}" is found in the list.`)
} else {
    console.log(`"${userInput}" is not found in the list.`);
    alert(`"${userInput}" is not found in the list.`)
}

//8.
const A = [24, 53, 78, 91, 12];
alert(A)
const largestNumber = Math.max(...A);
console.log(`The largest number in the array is ${largestNumber}.`);
alert(`The largest number in the array is ${largestNumber}.`)

//9.
const A = [24, 53, 78, 91, 12];
alert(A)
const smallestNumber = Math.min(...A);
console.log(`The smallest number in the array is ${smallestNumber}.`);
alert(`The smallest number in the array is ${smallestNumber}.`);
*/
//10.
const multiplesOf5 = [];
for (let num = 1; num <= 100; num++) {
    if (num % 5 === 0) {
        multiplesOf5.push(num);
    }
}
console.log("Multiples of 5 from 1 to 100:");
alert("Multiples of 5 from 1 to 100:")
console.log(multiplesOf5);
alert(multiplesOf5);

