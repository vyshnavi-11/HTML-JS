// Q1. Find number 2 in the following array. If 2 is present, print its index in the array. If 2 is not present, display the message "Element not found in array".
// const arr = [1, 2, 3, 4, 5, 6];


const arr = [1, 2, 3, 4, 5, 6];
const index = arr.indexOf(2);
if (index !== -1) {
    console.log("Index of 2:", index);
} else {
    console.log("Element not found in array");
}
 
 
// Q2. Remove "apple" from the following array:
// const fruits = ["banana", "mango", "apple", "kiwi"];

const fruits = ["banana", "mango", "apple", "kiwi"];
const ind = fruits.indexOf("apple");
if (ind !== -1) {
    fruits.splice(ind, 1);
    console.log("Updated array:", fruits);
} else {
    console.log("Element not found in array");
}

 
 
// Q3. Reverse the order of the elements in the following array:
// const numbers = [23, 45, 12, 67, 89, 34];

const numbers = [23, 45, 12, 67, 89, 34];
numbers.reverse();
console.log("Reversed array:", numbers);

 
 
// Q4. Find the maximum value in the following array:
// const numbers = [23, 45, 12, 67, 89, 34];
 
const number = [23, 45, 12, 67, 89, 34];
const max = Math.max(...number);
console.log("Maximum value:", max);

 
// Q5. Create a function that takes an array of numbers and returns the second-largest number in the array:
// const numbers = [10, 5, 8, 20, 15, 12];

const num = [10, 5, 8, 20, 15, 12];
function secondLargest(arr) {
    arr.sort((a, b) => b - a);
    return arr[1];
}
console.log("Second largest number:", secondLargest(num));

 
 
// Q6. Create a function that takes an array of numbers and returns the sum of all even numbers in the array:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 

const even = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sumOfEven(arr) {
    return arr.reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc, 0);
}
console.log("Sum of even numbers:", sumOfEven(even));

 
// Q7. Create a students array which contains objects of students with properties name and age. Add 3 student objects to it.
const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 21 },
    { name: "Charlie", age: 19 }
];
console.log("Students array:", students);
