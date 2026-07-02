/*let x = 1;

if (x === 1) {
    let x = 2;

    console.log(x);
    // Expected output: 2
}

console.log(x);
// Expected output: 1

{
    // TDZ starts at beginning of scope
    const func = () => console.log(letVar); // OK

    // Within the TDZ letVar access throws `ReferenceError`

    let letVar = 3; // End of TDZ (for letVar)
    func(); // Called outside TDZ!
}
let x = 1;

switch (x) {
    case 0:
        {
            let foo;
            break;
        }
    case 1:
        {
            let foo;
            break;
        }
}




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
}
var a = 1;
var b = 2;

{
    var a = 11; // the scope is global
    let b = 22; // the scope is inside the block

    console.log(a); // 11
    console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2*/