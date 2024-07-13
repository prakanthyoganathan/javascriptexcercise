// 1.Print all the prime numbers until 100.

for (let num = 2; num <= 100; num++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}



// 2.Print all the odd numbers until 100.

for (let num = 1; num <= 100; num++) {
    if (num % 2 !== 0) {
        console.log(num);
    }
}



// 3.Write a Javascript program to count the number of elements in an array and Sum all the numbers in array and find total
// Example Array: [10,20,30]
// Expected output:  Total 10+20+30 = 60 Array count-3

let array = [10, 20, 30];
let sum = 0;


for (let i = 0; i < array.length; i++) {
    sum += array[i];
}


console.log("Total " + array.join('+') + " = " + sum + " Array count-" + array.length);




