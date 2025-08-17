console.log("hi");
// document.querySelector(".message").textContent = "Day 1 exercise complete!"

//====== declaring variables ========
function showVariables(){
let myName = "Richard";
const birthYear = 1960;
let likeJS = true;
let age = 2025 - birthYear;
let sentence =
  "My name is " +
  myName +
  "." +
  " I am " +
  age +
  " years old, and it is " +
  likeJS +
  " that I like JavaScript.";
console.log(sentence);
document.querySelector(".message").textContent = sentence + "\n\n";
}


// ===== operators ======
function showOperators(){
let num1 = 10;
let num2 = 3;
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let sentences =
  "The sum of 10 and 3 is " +
  sum +
  "," +
  "The difference between num1 and num2 is " +
  difference +
  "\nProduct:" +
  product;
console.log(sentences);
document.querySelector(".message").textContent += sentences + "\n\n";
}


// ====== conditional statements ========
function showConditionals(){
let age = 20;
let country = "Kenya";
let message = "";
if (age >= 18) {
  message += "adult\n";
} else if (age < 18) {
  message += "minor\n";
}
if (country === "Kenya") {
  message += "Kenyan";
}
console.log(message);
document.querySelector(".message").textContent += message + "\n\n";
}


// --------- calling functions ---------
showVariables();
showOperators();
showConditionals();

