// 1. Even or Odd Checker
function EvenOrOdd(number) {
    if (number % 2 === 0) {
        return `${number} is an even number.`;
    } else {
        return `${number} is an odd number.`;
    }
}
console.log("=== Even or Odd Checker ===");
console.log(EvenOrOdd(7));
console.log(EvenOrOdd(8));  
console.log("\n");


// 2. Multiplication Table
function multiplication(number) {
    console.log(`Multiplication Table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}
console.log("=== Multiplication Table Generator ===");
multiplication(5);
console.log("\n");



// 3. FizzBuzz Challenge
function fizzBuzz() {
    console.log("=== FizzBuzz Challenge ===");
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz();
console.log("\n");



// 4. Right-Angled Triangle Pattern
function printTriangle(n) {
    console.log(`=== Right-Angled Triangle (n = ${n}) ===`);
    for (let i = 1; i <= n; i++) {
        let stars = "";
        for (let j = 1; j <= i; j++) {
            stars += "*";
        }
        console.log(stars);
    }
}
printTriangle(5);
console.log("\n");


// Alternative method using repeat()
function printTriangleAlternative(n) {
    console.log(`=== Right-Angled Triangle Alternative (n = ${n}) ===`);
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i));
    }
}
printTriangleAlternative(5);