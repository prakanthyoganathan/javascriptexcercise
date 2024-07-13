// 1. Find a sum of three number, third number defaulting to 10

function sumOfThreeNumbers(a, b, c = 10) {
    return a + b + c;
}

console.log(sumOfThreeNumbers(1, 2)); 
console.log(sumOfThreeNumbers(1, 2, 3));   
console.log(sumOfThreeNumbers(5, 5));     
