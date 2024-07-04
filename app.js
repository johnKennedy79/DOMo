console.log("Hello World")
const body = document.querySelector("body");
console.log(body)

const h1 = document.querySelector("h1");
console.log("h1")
h1.textContent = "This is a title writen in H1 style";

h1.remove();

const title = document.createElement("header");
title.textContent = "This is my Header";
body.appendChild(title);

const cat = document.createElement("img");
body.appendChild(cat);
cat.src = "./blackcat.jpg";

// const cat = document.querySelector("img");
// cat.src = "./blackcat.jpg";

const body2 = document.querySelector("body");
const h2 = document.createElement("h2");
h2.textContent = "This is a fury friend.";
body.appendChild(h2);


const ul = document.createElement("ul");
body.appendChild(ul);
//create the aray
let data = ["Cream", "Food", "Kitty Litter"];
let list = document.querySelector("ul"); 

//create the loop i = item in the aray. so it starts at 0 this is the first item in the aray and asks if i is less than the length of items in the aray add the next item in the aray.
for (i = 0; i < data.length; ++i) {
    let li = document.createElement(`li`); 
    li.innerText = data[i];
    list.appendChild(li);
}


//--------------------------------------
//conditionals
//if(condition is true){action}
//= assignment operator
//== check if equal
//=== check if equal and data type is the same
//<= less than or equal to 
//>= greater than or equall to 
// != not equal to 
// !== very not equal to 

//switch
// let valueToCheck = 5;
// switch(valueToCheck){
//     case 1:
//         console.log();
//         break;
//     case 2:(){};
//     case 5 = true
// }

let age = prompt ("What is your age in years?");
let movieRating = "PG";

if (movieRating = U){
    if (age > "1"){h2.textContent = "You Can Watch This Movie!";
        body.appendChild(h2);}
    else if (age === "1") {h2.textContent = "You Can Watch This Movie";
        body.appendChild(h2);}
    else {h2.textContent = "You Can Watch This Movie with your parents!";
        body.appendChild(h2);}
}

if (movieRating = "PG"){
if (age > "17"){h2.textContent = "You Can Watch This Movie!";
    body.appendChild(h2);}
else if (age === "17") {h2.textContent = "You Can Watch This Movie";
    body.appendChild(h2);}
else {h2.textContent = "You Can Watch This Movie with your parents!";
    body.appendChild(h2);}}

if (movieRating = "12"){
    if (age > "12"){h2.textContent = "You Can Watch This Movie!";
        body.appendChild(h2);}
    else if (age === "12") {h2.textContent = "You Can Watch This Movie";
        body.appendChild(h2);}
    else {h2.textContent = "You Can Watch Not! This Movie!";
        body.appendChild(h2);}
}

if (movieRating = "15"){
    if (age > "15"){h2.textContent = "You Can Watch This Movie!";
        body.appendChild(h2);}
    else if (age === "15") {h2.textContent = "You Can Watch This Movie";
        body.appendChild(h2);}
    else {h2.textContent = "You Can Not! Watch This Movie!";
        body.appendChild(h2);}
}

if (movieRating = "18"){
    if (age > "18"){h2.textContent = "You Can Watch This Movie!";
        body.appendChild(h2);}
    else if (age === "18") {h2.textContent = "You Can Watch This Movie";
        body.appendChild(h2);}
    else {h2.textContent = "You Can Not! Watch This Movie!";
        body.appendChild(h2);}
}




