let world = document.getElementById("world");
console.log(world); // output: <h1 id="world">hello world</h1>
console.dir(world); //output: h1#world

let worldByClass = document.getElementsByClassName("classOne");
console.log(worldByClass);

// querySelctor always select first occurence
let queryDom1 = document.querySelector("h2");
console.log(queryDom1);
console.dir(queryDom1);

//querSelector give array like structure but it is nodelist not array 
let queryDom2 = document.querySelectorAll("h2");
console.log(queryDom2);
console.dir(queryDom2);

//manipulations
 let h3 = document.querySelector('h3');
//  h3.textContent="pandora"
//  h3.innerText="avatar"

//above two changes the text content

//innerHtml insert the html

// h3.innerHTML ="<i> hey satwik </i>";

// console.log(h3);

h3.hidden = true; // see in devtool code element


//Attribute manipulation

let a = document.querySelector('a');
// a.href="https://www.google.com";
//OR
a.setAttribute("href", "https://www.google.com");
let img = document.querySelector('img');
img.setAttribute("src","https://wallpapershome.com/images/pages/pic_h/647.jpg" );
img.setAttribute("width","300px" );
img.setAttribute("height","150px" );

console.log(img.getAttribute("src"));
// a.removeAttribute('href');



 // create element--------------------
 //append/prepend -------------------

 let h4 = document.createElement("h4");
 h4.textContent = "example of createElement";
 console.log("createElem ", h4);
 document.body.prepend(h4); //add before <script>
 document.body.append(h4);  // add After <script>

 //or------

// document.querySelector("body").prepend(h4);
// document.querySelector("body").append(h4);

// removechild----------

// document.querySelector('div').remove('h4');

//css style manipulation using js

let h4Red = document.querySelector("h4");
h4Red.style.color = "red";
console.dir(h4Red);
h4Red.style.backgroundColor = "pink";
h4Red.style.fontFamily ="Gilroy";
h4Red.style.textTransform = "capitalize";

// how to add class

// let pClass = document.querySelector("p");
// pClass.classList.add('hulu');

// let bClass = document.querySelector("b");
// bClass.classList.remove('hulu2')

// toggle example- it adds class if not present and delete if class is there

// let uTag = document.querySelector('u');
// uTag.classList.toggle('hulu');

//Q1. use querySelectorAll to select all button with class"buy-now";

// let buynow = document.querySelectorAll(".buy-now");
// console.log(buynow);

//Q3. select all <li> elements and print their text using a loop

let lis = document.querySelectorAll('li');
lis.forEach((ele)=>{
    console.log(ele.textContent);
});

//or

// for(i=0; i<lis.length; i++){
//     console.log(lis[i].textContent);
// }


//Q4. Create a new list item <li> New Task </li> and add it to the end of <ul>.

let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent = "New Apple by dom";
ul.append(li);

let ulHighlight = document.querySelectorAll("span ul li:nth-child(2n)");
console.dir(ulHighlight);

ulHighlight.forEach(function (el){
    el.classList.add("color-blue");
})