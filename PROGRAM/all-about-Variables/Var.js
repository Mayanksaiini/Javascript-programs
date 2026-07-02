/*var x = 500;

if (x === 1) {
    var x = 2;

    console.log(x);
    // Expected output: 2
}

console.log(x);
// Expected output: 2


function foo() {
    var x = 1;

    function bar() {
        var y = 2;
        console.log(x); // 1 (function `bar` closes over `x`)
        console.log(y); // 2 (`y` is in scope)
    }
    bar();
    console.log(x); // 1 (`x` is in scope)
    console.log(y); // ReferenceError, `y` is scoped to `bar`
}

foo();

function doSomething() {
    console.log(bar); // undefined
    var bar = 111;
    console.log(bar); // 111
}
var a = 1;
var a = 2;
console.log(a); // 2
var a;
console.log(a); // 2; not undefined



function varTest() {
    var x = 1; {
        var x = 2; // same variable!
        console.log(x); // 2
    }
    console.log(x); // 2
}

function letTest() {
    let x = 1; {
        let x = 2; // different variable
        console.log(x); // 2
    }
    console.log(x); // 1
}*/

var x = "global";
let y = "global";
console.log(this.x); // "global"
console.log(this.y); // undefined