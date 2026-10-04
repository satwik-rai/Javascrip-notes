let obj1 = {
    name:"harsh",
    age: 26,
    school: "Jhphs",
    address: {
        city: "bhy",
        pin: "401104",
        location: {
            lat: 23.2,
            lng: 77.4
        }
    }
}

console.log(obj1.address.location.lat)

// safe gaurding with option chaining
console.log(obj1?.address?.locations?.lat);   // undefined
// console.log(obj1.address.locations.lat);   // error


for (let key in obj1){
    console.log(key, obj1.key);
}
for (let key in obj1){
    console.log(key, obj1[key]); 
}

//to make array of keys

let obj1Keys= Object.keys(obj1);
console.log(obj1Keys);

//copying using spread operator

let obj2 = {...obj1, building: "gn4"};
console.log(obj2);

// using Object.assign

let obj3= Object.assign({}, obj1); // or = Object.assign({subject: "marathi"}, obj1)
console.log(obj3);

// deep clonning
let satwik ={
    name:"satwik",
    age: 26,
    address: {
        city: "bhy",
        pin: "401104",
        location: {
            lat: 23.2,
            lng: 77.4
        }
    }
}

let tanmay = {...satwik};
// if we try to change the city for tanmay.

tanmay.address.city = "pune";

// it changed the value for satwik as well
//it happense because when we copy objects only top values get a real copy
// but nested values pass refrense to other object

// so we use JSON.stringify and JSON.parse

let harsh = JSON.parse(JSON.stringify(satwik));
harsh.address.city = "satara";

//now only harsh's value will change not satwik
//in modern JS now we use > let harsh = structuredClone(satwik)
// is cleaner and natively supports deep copying objects, arrays, Dates, Sets, and Maps.


//Q1. given a dynamic key let key = 'age', how will you access user[key]?

let key = 'age';
const user = {
    age:26,
}

console.log(user[key]); //output : 26

//Q2. destructure the lat and city from location object.

const locations = {
    city: 'jaipur',
    coordinate: {
        lat: 24.4,
        lng: 77.4
    }
}
let {city} = locations;
let {lat} = locations.coordinate;

console.log("city ", city ," lat ",lat );


//Q3. destructure the key "first-name" as variable firstName

const user1 = {
    "first-name": "satwik",
};

let {"first-name": firstName} = user;

//Q4. use Object.entries() to print all key-value pairs

const course = {
    title : 'javascript',
    duration: '4 weeks'
}

Object.entries(course).forEach(function(val){
    console.log(val[0] + ": "+ val[1]);
})

//object.entries make array of arrays like [["title", "javascript"], ["duration", "4 weeks"]]

//Q5. use a variable to dynamically assign a property

const dynamickey = "role";

let dynamicObj = {
    name: "harsh",
    [dynamickey]: "admin"
}
console.log("dynamic value ", dynamicObj.role);