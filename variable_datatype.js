// Var , Let , Const 

// var does not have block scope, it has function scope. It can be redeclared and updated.

function varExample() {
    if (true) {     // var can be accessed outside of this block. inside whole function
        var x = 10;
        console.log(x); // Output: 10
    }
}

// let has block scope, it can be updated but not redeclared in the same scope.

function letExample() {
    if (true) {     // let can only be accessed inside this block
        let y = 20;
        console.log(y); // Output: 20
    }
}

// const has block scope, it cannot be updated or redeclared. It must be initialized at the time of declaration.

function constExample() {
    if (true) {     // const can only be accessed inside this block
        const z = 30;
        console.log(z); // Output: 30
    }
} 


// Hoisting 

// in hoisting , variables breaks in two part during compilation and
//  it's declaration part moves to top of scope.



// premitive data types are immutable, meaning their values cannot 
// be changed once they are created.
//and you get a real copy of the value when you assign it to another variable.

let a = 10; // number
let b =a;
b=20;
console.log(a);
console.log(b);

// refrence data types are mutable, meaning their values can be changed after they are created.
// and you get a reference to the value when you assign it to another variable.
//array, object, functions

let c =[1,2,3]; // array
let d =c;
d.push(4);
console.log(c);
console.log(d);

// undefied vs null

// undefined means a variable has been declared but has not yet been assigned a value.

let e;
console.log(e); // Output: undefined

// null is an assignment value. It can be assigned to a variable as a representation of no value.

let f = null;
console.log(f); // Output: null

// Symbolic data type is a unique and immutable primitive value and may be used as the key of an Object property.

let obj ={
    uid: 1,
    name: "John",
}

let u1 = Symbol("uid");
obj[u1] = 12
console.log(obj);

// Number.Max_SAFE_INTEGER is the maximum safe integer in JavaScript, which is 2^53 - 1.

console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991

//type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers).

let g = "5" + 1;
console.log(g); // Output: "51" (string concatenation)

let h = "5" - 1;
console.log(h); // Output: 4 (string is coerced to number)

//truhty and falsy values

// In JavaScript, a truthy value is a value that translates to true when evaluated in a Boolean context. 
// All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).

// instanceof operator is used to check if an object is an instance of a specific class or constructor function.

let b = {};

console.log(b instanceof Object); // Output: true
console.log(b instanceof Array); // Output: false

//instanse of works with refrence values, not primitive values.
//  For primitive values, you can use the typeof operator to check their type.

let a = 10;
console.log(a instanceof Number); // Output: false (because a is a primitive value, not an instance of Number)
