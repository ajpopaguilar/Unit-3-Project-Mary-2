/* Declare variables below to save the different sections (divs) of your story*/
let op1 = document.querySelector(".option-one");
let op2screen = document.querySelector(".option-two-screen");
let op2 = document.querySelector(".option-two");
let op1screen = document.querySelector(".option-one-screen");
let op3 = document.querySelector (".option-tree ");
let op4screen = document.querySelector(".option-four-screen");
let op4 = document.querySelector (".option-four");
let op3screen = document.querySelector (".option-tree-screen");
//When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!

op1.onclick = function() {
    op1screen.style.display = "block";
    op2screen.style.display = "none";
};

op2.onclick = function() {
    op2screen.style.display = "block";
    op1screen.style.display = "none";
};
op3.onclick = function () {
    op3screen.style.display= "block";
    op4screen.style.display = "none";
};


op4.onclick = function (){
    op4screen.style.display= "block";
    op3screen.style.display = "none";
};
console.log(op2);
console.log(op1);
console.log(op2screen);
console.log(op1screen);

console.log(op3);
console.log(op4);
console.log(op3screen);
console.log(op4screen);