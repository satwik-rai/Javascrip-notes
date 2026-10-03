 // --------- for loop

 /* for (start; end; change) { operation;} */

 // --------- while loop

/* start;
 while (end-condition) {
    operation;
    change;
 } */

 //-------- do while loop

 /* start;
    do {
        operation;
        change;
    } while (end-condition)  */

// ... become rest operator in function parameter and spread operator in array and object literals.

function abc(...args) {
    console.log(args);
}

abc(1,2,3,4,5); // Output: [1, 2, 3, 4, 5]

function xyz(a, b, ...args) {
    console.log(a, b, args);
}

xyz(1, 2, 3, 4, 5); // Output: 1 2 [3, 4, 5]

// early return pattern

function isEven(num) {
    if (num % 2 !== 0) {
        return false; // Early return if the number is not even
    }
    return true; // Return true if the number is even
}

//first class functions

// In JavaScript, functions are first-class citizens, which means they can be treated like any other value. 
// They can be assigned to variables, passed as arguments to other functions, and returned from functions.

function pqrs(val){
    val();
}

pqrs(function() {
    console.log("Hello from the callback function!");
}); // Output: Hello from the callback function!


// HOF higher-order functions

// A higher-order function is a function that takes one or more functions as arguments, returns a function, or both.

//pqrs is a higher-order function because it takes a function as an argument.

function lmno(){
    return function() {
        console.log("Hello from the returned function!");
    }
}

lmno()(); // Output: Hello from the returned function!


//pure function is a function that, given the same input, will always return the same output and does not have any side effects (like modifying external variables or states).

function pureFunction(x, y) {
    return x + y; // This function is pure because it always returns the same output for the same inputs and has no side effects.
}

// impure function is a function that may produce different outputs for the same inputs or has side effects.

let z = 10; 
function impureFunction(x) {
    z += x;
    return z; // This function is impure because it modifies the external variable z, which can lead to different outputs for the same input.
}

// closure is a function that has access to its own scope, the outer function's scope, and the global scope, even after the outer function has returned.

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside'); 
// Output: 
// Outer Variable: outside
// Inner Variable: inside

function Outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}

const counter = Outer();  //the counter function has access to the count variable even after the Outer function has finished executing, demonstrating closure.
counter();  // so when we call counter(), it increments the count variable and logs the updated value to the console.
counter();  // Output: 2  Each time we call counter(), it remembers the previous value of count, allowing us to keep track of how many times we've called it.
counter();  // Output: 3

//lexical scope is the scope in which a variable is defined. In JavaScript, functions are lexically scoped, meaning they can access variables from their own scope and from the scopes of their parent functions.

function lexicalScope() {
    let a = 10;

    return function innerFunction() {
        let b = 20;
        console.log(a); // 10
        //console.log(c); // ReferenceError: c is not defined

        return function nestedFunction() {
            let c = 30;
            console.log(a); // 10
            console.log(b); // 20
            console.log(c); // 30
        };
    };
}

lexicalScope()()();
// Output:
// 10
// 20
// 30


/* function lexicalScope() {
    let a = 10;

    function innerFunction() {
        let b = 20;

        function nestedFunction() {
            let c = 30;
            console.log(a); // 10 (via scope chain)
            console.log(b); // 20 (via scope chain)
            console.log(c); // 30 (local scope)
        }

        nestedFunction(); // Execute nested function
    }

    innerFunction(); // Execute inner function
}

lexicalScope();
// Output:
// 10
// 20
// 30

*/

//iife (Immediately Invoked Function Expression) is a function that is executed immediately after it is defined. It is often used to create a new scope and avoid polluting the global namespace.

(function() {
    let message = "Hello, World!";
    console.log(message);
})();

//hoisting in function declaration vs expression

// Function Declaration
hoistedFunction(); // Output: "This function has been hoisted!"

function hoistedFunction() {
    console.log("This function has been hoisted!");
}

// Function Expression

/* hoistedFunctionExpression(); // TypeError: hoistedFunctionExpression is not a function

 var hoistedFunctionExpression = function() {
    console.log("This function has not been hoisted!");
};

*/


//regular function vs arrow function

function regularFunction() {
    console.log("This is a regular function.");
}

const arrowFunction = () => {
    console.log("This is an arrow function.");
}


// Q1.  use rest param to accept any number of arguments and return their sum.

function sum(...numbers) {
    let total = 0;
    numbers.forEach(num => {
        total += num;
    });
    return total;
}

getSum = sum(1, 2, 3, 4, 5); // Output: 15

//Q2. early return pattern to check if a user's age.

function voterAge(age) {
    if(age < 18) return "Not eligible to vote";
    return "Eligible to vote";
}

console.log(voterAge(20)); // Output: "Eligible to vote"

//Q3. pass a function as an argument to another function and invoke it.

function greet(callback) {
    console.log("Hello!");
    callback();
}

greet(() => {
    console.log("How are you?");
});

//or 

greet(function() {
    console.log("How are you?");
});

//Q4. convert a function declaration to a function expression and vice versa.

// Function Declaration
function greetDeclaration() {
    console.log("Hello from function declaration!");
}

// Function Expression
const greetExpression = function() {
    console.log("Hello from function expression!");
};

//Q5. convert below function to pure function.

let total = 0; // This is an external variable that makes the function impure.
function addToTotal(num) {
    total += num;
    return total; // This function is impure because it modifies the external variable 'total'.
}

// Convert to Pure Function

function addToTotalPure(num, currentTotal) {
    return currentTotal + num; // This function is pure because it does not modify any external state and always returns the same output for the same inputs.
}

// what is use of  IIFE? Name one real-world scenario where IIFE is used.

let satwik = (function(){
    let score = 0;
    return {
        getScore: function(){
            console.log(score);
        },
        setScore: function(val){
            score = val;
        },
    };
})();

satwik.getScore(); // Output: 0
satwik.setScore(10);
satwik.getScore(); // Output: 10


//Q6. create a reusable discounter function (HOF/closure)
//  that takes a discount percentage and returns a function that calculates the discounted price for a given original price.

function discounteCalc(discount){
    return function(price){
        return price - price * (discount / 100);
    };
}

let tenPercentDiscount = discounteCalc(10);
console.log(tenPercentDiscount(100));

let twentyPercentDiscount = discounteCalc(20);
console.log(twentyPercentDiscount(100));

//use iife to isolate a variable
(function(){
    const password = "mySecretPassword";
    console.log(password); // Output: mySecretPassword
}
)();

console.log(password); // ReferenceError: password is not defined
