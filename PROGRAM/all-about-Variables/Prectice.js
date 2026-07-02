/*When we use let
1. Use when  we want to change variables value later.

let score = 10; ( initialization)

let score = 20; // ✅ Allowed  (Value alloted)

console.log(score); // 20 ( Print )

2. inside loops (let) is commonly used in loops because each iteration gets its own variable.
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log(i); /* ❌ Error: i is not defined  , only in the loop.

//3.When you want block scope  (Variables declared with let exist only inside the block where they are declared.)
if (true) {
    let message = "Hello";
    console.log(message); // Hello
}

console.log(message); // ❌ Error */
//1
/*
let name = "mayank";

console.log(name);

//2

let city = "Delhi";

city = "mumbai";
console.log(city)

//3
let age = 22;

age = age + 1;
console.log(age);

//4
let num1, num2, sum;
num1 = 1;
num2 = 2;
sum = num1 + num2;
console.log(sum);

//5
let a, b;
a = 10;
b = 20;

let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

//6
let name = "Mayank";

if (true) {
    let name = "Rahul";
    console.log(name);
}

console.log(name);

//7

let x = 5;

{
    let x = 10;
    console.log(x);
}

console.log(x);



//8

for (initialization; condition; update) {
    // code to execute
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//9

for (let i = 2; i <= 20; i += 2) {

    console.log(i);
}

//10
let loginAttempts = 0;

for (loginAttempts = 1; loginAttempts <= 3; loginAttempts++) {
    console.log("Wrong Password");

    if (loginAttempts === 3) {
        console.log("Account Locked");
    }
}
*/

//QA quiz++++
let correctPassword = "Mayank123";
let enteredPassword = "abc123";

let loginAttempts = 0;

for (loginAttempts = 1; loginAttempts <= 3; loginAttempts++) {

    if (enteredPassword !== correctPassword) {
        console.log("Wrong Password");
    }

    if (loginAttempts === 3) {
        console.log("Account Locked");
    }
}