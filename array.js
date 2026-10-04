let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.shift(); // Removes the first element (1) from the array
arr.unshift(0); // Adds a new element (0) to the beginning of the array
arr.pop(); // Removes the last element (10) from the array
arr.push(11); // Adds a new element (11) to the end of the array 
arr.splice(4, 1); // Removes the element at index 4 (5) from the array
arr.splice(2, 0, 2.5); // Adds a new element (2.5) at index 2 without removing any elements
arr.splice(6, 2); // Removes 2 elements starting from index 6 (7 and 8) from the array
let newArr = arr.slice(3, 7); // Creates a new array containing elements from index 3 to index 6 (4, 5, 6, 7)
console.log(arr); // Output: [0, 2, 2.5, 4, 6, 9, 11]
console.log(newArr); // Output: [4, 6, 9, 11]


arr.reverse(); // Reverses the order of the elements in the array
console.log(arr); // Output: [11, 9, 6, 4, 2.5, 2, 0]

arr.sort((a, b) => a - b); // Sorts the array in ascending order
console.log(arr); // Output: [0, 2, 2.5, 4, 6, 9, 11]

// forEach method to iterate over the array and runs of each element

arr.forEach((element, index) => {
    console.log(element + 5); // Output: 5, 7, 7.5, 9, 11, 14, 16
});


//for each changes the original array elements by adding 5 to each element

//Map creates new array with result

let newMappedArr = arr.map((element) => {
    return element + 5; // Adds 5 to each element and returns a new array
});
console.log(newMappedArr); // Output: [5, 7, 7.5, 9, 11, 14, 16]
console.log(arr); // Output: [0, 2, 2.5, 4, 6, 9, 11]

// filter also creates new Array with result

let filteredArr = arr.filter((element) => {
    return element > 5; // Filters elements greater than 5 and returns a new array
});
console.log(filteredArr); // Output: [6, 9, 11]

//reduce method to reduce the array to a single value

let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue; // Sums up all the elements in the array
}, 0);

console.log(sum); // Output: 34.5

// find method to find the first element that satisfies the condition
let findArr = arr.find((element) => {
    return element > 5; // Finds the first element greater than 5
})

console.log(findArr); // Output: 6
console.log(arr); // Output: [0, 2, 2.5, 4, 6, 9, 11]

arr.findIndex((element) => {
    return element > 5; // Finds the index of the first element greater than 5
})

arr.findLast((element) => {
    return element > 5; // Finds the last element greater than 5
})

arr.find((element) => {
    return element === 4; // Finds the first element that is equal to 4
})


// some method to check if at least one element satisfies the condition
let hasElementGreaterThan5 = arr.some((element) => {
    return element > 5; // Checks if there is at least one element greater than 5
});

console.log(hasElementGreaterThan5); // Output: true

// every method to check if all elements satisfy the condition
let allElementsGreaterThan0 = arr.every((element) => {
    return element > 0; // Checks if all elements are greater than 0
});

console.log(allElementsGreaterThan0); // Output: false

//destructuring 
console.log(arr); // Output: [0, 2, 2.5, 4, 6, 9, 11]

let [first, second, ...rest] = arr; // Destructuring the array into first, second and rest elements
console.log(first); // Output: 0
console.log(second); // Output: 2
console.log(rest); // Output: [2.5, 4, 6, 9, 11]

let [a, b, ,c] = arr; // Destructuring the array into a, b and c elements, skipping the third element
console.log(a); // Output: 0
console.log(b); // Output: 2
console.log(c); // Output: 4

//spread operator
// let newArr2 = arr; // This would create a reference to the original array, not a new array
// anything you do to newArr2 will affect arr and vice versa. To avoid this, we can use the spread operator
//  to create a new array with the elements of arr.
let newArr2 = [...arr, 12, 13]; // Creates a new array by spreading the elements of arr and adding 12 and 13
console.log(newArr2); // Output: [0, 2, 2.5, 4, 6, 9, 11, 12, 13]


//Q1. insert red and blue at index 1

let colors = ['green', 'yellow', 'orange'];
colors.splice(1, 0, 'red', 'blue');

console.log(colors); // Output: ['green', 'red', 'blue', 'yellow', 'orange']

//Q2. extract middle 3 elements from the array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let middleElements = numbers.slice(3, 6); // Extracts elements from index 3 to index 5 (4, 5, 6)
console.log(middleElements); // Output: [4, 5, 6]

//Q3. sort array in alphabetical order and reverse it

let fruits = ['banana', 'apple', 'cherry', 'date'];
fruits.sort(); // Sorts the array in alphabetical order
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']
fruits.reverse(); // Reverses the order of the elements in the array
console.log(fruits); // Output: ['date', 'cherry', 'banana', 'apple']

// for sorting array which have number always use comparision operator
let unsortedNum = [23, 12, 6, 20, 18];
unsortedNum.sort((a,b)=>{
    return a - b;
})

console.log("sorted arry", unsortedNum);

//Q4. use .map() to square each element in the array

let nums = [1, 2, 3, 4, 5];

let squaredNum = nums.map((num)=>{
    return num * num; // Squares each element in the array
})
console.log(squaredNum); // Output: [1, 4, 9, 16, 25]

//Q5. Merge two arrays using spread operator

let x = [1, 2, 3];
let y = [4, 5, 6];
let z = [...x, ...y]; // Merges the two arrays using the spread operator
console.log(z); // Output: [1, 2, 3, 4, 5, 6]

let countries = ['USA', 'Canada', 'Mexico'];
countries=['Brazil', 'Argentina', ...countries, 'Chile']; // Adds new countries to the beginning and end of the array using the spread operator
console.log(countries); // Output: ['Brazil', 'Argentina', 'USA', 'Canada', 'Mexico', 'Chile']
