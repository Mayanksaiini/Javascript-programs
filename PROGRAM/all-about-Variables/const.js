/* 

1. The const declaration declares block-scoped local variables.
2. The value of a constant can't be changed through reassignment using the assignment operator,
3. but if a constant is an object,
4. its properties can be added, updated, or removed. 

Description

1.The "const" declaration is very similar to let:
2."const" declarations are scoped to blocks as well as functions.
3."const" declarations can only be accessed after the place of declaration is reached (see temporal dead zone). 
4.For this reason, "const" declarations are commonly regarded as non-hoisted.
5."const" declarations do not create properties on global This when declared at the top level of a script.
6."const" declarations cannot be redeclared by any other declaration in the same scope.
7."const" begins declarations, not statements. That means you cannot use a lone const declaration as the body of a block (which makes sense, since there's no way to access the variable).

const in objects and arrays

const also works on objects and arrays. 
Attempting to overwrite the object throws an error "Assignment to constant variable".

( Const declaration )

const number = 42;
try {
    number = 99;
} catch (err) {
    console.log(err);
    // Expected output: TypeError: invalid assignment to const 'number'
    // (Note: the exact output may be browser-dependent)
}

console.log(number);
// Expected output: 42

// define MY_FAV as a constant and give it the value 7
const MY_FAV = 7;

console.log(`my favorite number is: ${MY_FAV}`);

Block scoping
It's important to note the nature of block scoping.

const MY_FAV = 7;

if (MY_FAV === 7) {
    // This is fine because it's in a new block scope
    const MY_FAV = 20;
    console.log(MY_FAV); // 20

    // var declarations are not scoped to blocks so this throws an error
    var MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
}

console.log(MY_FAV); // 7*/