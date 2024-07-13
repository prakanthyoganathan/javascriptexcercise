// 1.	JavaScript Program to Find the Factorial of a Number


let n = 5;
function factorial(n) { 
    if (n === 0) { 
        return 1; 
    } 
    else { 
        return n * factorial( n - 1 ); 
    } 
} 

console.log(factorial(n));





// 2. Write a simple JavaScript program to join all elements of the following array into a string.[Red,Green,White,Black]

let colors = ['Red', 'Green', 'White', 'Black'];
let colorString = colors.join(', ');

console.log(colorString);




// 3. Write a JavaScript conditional statement to find the largest of five numbers. Sample numbers : -5, -2, -6, 0, -1

let num1 = -5;
let num2 = -2;
let num3 = -6;
let num4 = 0;
let num5 = -1;
let largest = num1;
if (num2 > largest) {
    largest = num2;
}
if (num3 > largest) {
    largest = num3;
}
if (num4 > largest) {
    largest = num4;
}
if (num5 > largest) {
    largest = num5;
}
console.log(`The largest number is: ${largest}`);
