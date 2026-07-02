/* Code related to Scope & let , var  & const*/


/*1. Global Scope — accessible everywhere*/

let globalVar = "I'm global"; /*(Global)*/

function showGlobal() {
    console.log(globalVar); // accessible here
}
showGlobal(); // "I'm global"
console.log(globalVar); // accessible here too

/*2. Function Scope — var is scoped to the whole function, not just a block*/

function testFunctionScope() {
    if (true) {
        var x = "I'm function-scoped";
    }
    console.log(x); // works! "I'm function-scoped"
}

/*3. Block Scope — let and const are scoped to the nearest { }*/

function testBlockScope() {
    if (true) {
        let y = "I'm block-scoped";
        const z = "Me too";
    }
    console.log(y); // ReferenceError: y is not defined
}
/*4. Lexical Scope (closures) — inner functions remember the scope they were defined in */

function outer() {
    let count = 0;

    function inner() {
        count++;
        return count;
    }
    return inner;
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2 (remembers `count` between calls)

/*5. Shadowing — a variable in a smaller scope can "hide" one with the same name in an outer scope*/

let name = "outer";

function greet() {
    let name = "inner"; // shadows outer `name`
    console.log(name); // "inner"
}
greet();
console.log(name); // "outer" (unaffected)