// 1. Find a sum of three number, third number defaulting to 10

function sumOfThreeNumbers(a, b, c = 10) {
    return a + b + c;
}

console.log(sumOfThreeNumbers(1, 2)); 
console.log(sumOfThreeNumbers(1, 2, 3));   
console.log(sumOfThreeNumbers(5, 5));     

// 2. Use a short hand operator for multiplying the given number by 12

function multiplyBy12(number) {
    number *= 12; 
    return number;
}

console.log(multiplyBy12(5)); 
 console.log(multiplyBy12(7));  
console.log(multiplyBy12(0));  


// 3. Find a given number is odd or even

function isOddOrEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(isOddOrEven(5));  
console.log(isOddOrEven(8));  
console.log(isOddOrEven(0));  


// 4. Find a given number is divisible by 10

function isDivisibleBy10(number) {
    return number % 10 === 0;
}

console.log(isDivisibleBy10(50));  
console.log(isDivisibleBy10(33));
  console.log(isDivisibleBy10(0));   



// 5. Find a greatest of three numbers 

function greatestOfThreeNumbers(a, b, c) {
    return Math.max(a, b, c);
}

onsole.log(greatestOfThreeNumbers(5, 10, 15));  
console.log(greatestOfThreeNumbers(20, 10, 15)); 
console.log(greatestOfThreeNumbers(5, 25, 15));  
console.log(greatestOfThreeNumbers(5, 5, 5));    
