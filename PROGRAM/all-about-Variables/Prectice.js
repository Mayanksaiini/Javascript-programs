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
}*/

/*Now lets talk about var.
What is var?

var is the old way of creating variables in JavaScript.


var name = "Mayank";

console.log(name);

Before 2015 (ES6), JavaScript only had var.

After ES6, JavaScript introduced:

let
const

Nowadays, developers mostly use let and const.

When was var used?

Before 2015:

var age = 22;
var city = "Delhi";
var score = 90;

Today, you'd usually write:

let age = 22;
const city = "Delhi";
let score = 90;


Var can be Changed.


var age = 22;

age = 23;

console.log(age);

The biggest difference: Scope

This is where var and let behave differently.

Example with var*/
/*
if (true) {
    var message = "Hello";
}

console.log(message); /*{We called the function outside the loop using var }*/

/*Why?

Because var is not block-scoped.

Even though it was declared inside the if block, it's still accessible outside.

Example with let*/
/*
if (true) {
    let messege = "hello";

}
console.log(messege);
*/
/*Why?

Because let is block-scoped.

The variable exists only inside the {}*/

/* Comparison


var
if (true) {
    var x = 10;
}

console.log(x);

Memory:

x → 10

x is still available after the block.

let
if (true) {
    let x = 10;
}

console.log(x);

Memory:

{
    x → 10
}

After the block ends, x is destroyed.

Another example
var a = 5;

if (true) {
    var a = 10;
}

console.log(a);

Output:

10

Why?

Because var does not create a new variable for the block. Both var a declarations refer to the same variable.

With let:

let a = 5;

if (true) {
    let a = 10;
}

console.log(a);

Output:

5
*/

//1
var name = "mayank";
name = "Rahul";
console.log(name);

//2
/*What is const?

const stands for constant.

It creates a variable whose value cannot be reassigned after it's initialized.

const pi = 3.14159;

console.log(pi);

Output:

3.14159
Can we change its value?

❌ No.

const pi = 3.14159;

pi = 3.14;

JavaScript throws an error:

TypeError: Assignment to constant variable.

Why?

Because const tells JavaScript:

"This variable should always refer to the same value."

const must be initialized immediately

This is allowed:

const name = "Mayank";

This is not allowed:

const name;

name = "Mayank";

Error:

SyntaxError: Missing initializer in const declaration

Unlike let and var, const must have a value when it's declared.

Is const block-scoped?

✅ Yes, just like let.

if (true) {
    const city = "Delhi";
    console.log(city);
}

console.log(city);

Output:

Delhi
ReferenceError: city is not defined

city only exists inside the if block.

const vs let
let
let score = 90;

score = 95; // ✅ Allowed
const
const score = 90;

score = 95; // ❌ Error
Does const mean the value never changes?

This is a common misunderstanding.

For primitive values (numbers, strings, booleans):

const age = 22;

// age = 23; ❌ Error

You cannot change the value.

For objects and arrays, it's different.

const person = {
    name: "Mayank"
};

person.name = "Rahul"; // ✅ Allowed

console.log(person.name);

Output:

Rahul

Why?

Because the object itself hasn't changed—only one of its properties changed.

Similarly:

const numbers = [1, 2, 3];

numbers.push(4);

console.log(numbers);

Output:

[1, 2, 3, 4]

But this is not allowed:

const numbers = [1, 2, 3];

numbers = [4, 5, 6]; // ❌ Error

You can't make numbers refer to a different array.

Comparison of var, let, and const
Feature	var	let	const
Can reassign value?	✅ Yes	✅ Yes	❌ No
Can redeclare?	✅ Yes	❌ No	❌ No
Block-scoped?	❌ No	✅ Yes	✅ Yes
Must initialize when declared?	❌ No	❌ No	✅ Yes
When should you use each?
Use const (most of the time)
const apiUrl = "https://example.com/api";
const company = "OpenAI";

These values don't need to change.

Use let
let attempts = 0;

attempts++;

The value changes, so let is appropriate.

Avoid var

You'll mainly see var in older JavaScript code.*/

const marks = [90, 80];

marks.push(70);

console.log(marks);

const x = 10;

if (true) {
    const x = 20;
    console.log(x);
}

console.log(x);