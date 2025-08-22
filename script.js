console.log("hi");
// document.querySelector(".message").textContent = "Day 1 exercise complete!"

//=========================== DECLARING VARIABLES ==================
function showVariables() {
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
  document.querySelector(".message").textContent = sentence + "\n";
}

// ============================ OPERATORS =============================
function showOperators() {
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
  document.querySelector(".message").textContent += sentences + "\n";
}

// ========================= CONDITIONAL STATEMENTS ===========================
function showConditionals() {
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
  document.querySelector(".message").textContent += message + "\n";
}

// =============================== FOR LOOP ===============================
function showForloop() {
  // ===== counting forward ======
  for (let i = 1; i <= 10; i++) {
    console.log("Number:", i);
    document.querySelector(".message").textContent += "Number: " + i + "\n";
  }

  // ===== counting downward ======
  for (let i = 10; i >= 0; i--) {
    console.log("Number: ", i);
    document.querySelector(".message").textContent += "Number: " + i + "\n";
  }
}

// =============================== WHILE LOOP =============================
function showWhileloop() {
  // =========== counting forward ===========
  let i = 0;
  while (i <= 10) {
    if (i % 2 === 0) {
      console.log("Even Number:", i);
      document.querySelector(".message").textContent +=
        "Even Number: " + i + "\n";
    } else {
      console.log("Odd Number:", i);
      document.querySelector(".message").textContent +=
        "Odd Number:" + i + "\n";
    }
    i++;
  }

  // ============== counting downward ===========
  i = 10;
  while (i >= 0) {
    if (i % 2 == 0) {
      console.log("Even Number: ", i);
      document.querySelector(".message").textContent +=
        "Even Number: " + i + "\n";
    } else {
      console.log("Odd Number: ", i);
      document.querySelector(".message").textContent +=
        "Odd Number: " + i + "\n";
    }
    i--;
  }
}

// ============================ DO...WHILE LOOP ================================
function showDoWhileLoop() {
  let i = 1;
  do {
    if (i % 3 == 0) {
      console.log("Number divisible by 3: ", i);
      document.querySelector(".message").textContent +=
        "Number divisible by 3: " + i + "\n";
    } else {
      console.log("Number: ", i);
      document.querySelector(".message").textContent += "Number: " + i + "\n";
    }
    i++;
  } while (i <= 10);
}

// ==================== Events & DOM Interaction ======================
// ==== check user age ====
document.getElementById("checkAge").addEventListener("click", function () {
  const age = Number(document.getElementById("ageInput").value);
  let message = "";

  if (age === 21) {
    message = "Happy 21st birthday!";
  } else if (age <= 18) {
    message = "You are a minor";
  } else {
    message = "You are an adult";
  }
  console.log(message);
  document.querySelector(".message").textContent = message;
});

// ==== greet user =====
document.getElementById("checkName").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value;
  message = "Hello " + name;
  console.log(message);
  document.querySelector(".message").textContent = message;
});

// ===== greet user and use function =====
function greetUser(name) {
  let message = "Hello " + name;
  console.log(message);
  document.querySelector(".message").textContent = message;
}
document.getElementById("checkName").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value;
  greetUser(name);
});

// ===== changes text after clicking button ===
let message = "You clicked the button!";
document.getElementById("clickMe").addEventListener("click", function () {
  document.getElementById("myText").textContent = message;
});

// ====== turning a paragraph text blue =======
document.getElementById("clickMe").addEventListener("click", function () {
  document.getElementById("myText").style.color = "blue";
  document.getElementById("myText").style.fontSize ="40px";
  document.getElementById("myText").style.fontStyle = ""
});

// ===== changes background color of button =====
document.getElementById("clickMe").addEventListener("click", function () {
  if (document.getElementById("clickMe").style.backgroundColor === "white") {
    document.getElementById("clickMe").style.backgroundColor = "black";
  } else {
    document.getElementById("clickMe").style.backgroundColor = "white";
  }
});

// =========== Mouseover event ============
document.getElementById("hoverP").addEventListener("mouseover", function(){
  document.getElementById("hoverP").style.color = "brown";
});
document.getElementById("hoverP").addEventListener("mouseout",function(){
  document.getElementById("hoverP").style.color = "white";
});

// ============= keydown/keyup =========


// ============== CREATING AND REMOVING ELEMENTS ==============
const addBtn = document.getElementById("addBtn");
const inputItem = document.getElementById("inputItem");
const itemList = document.getElementById("itemList");

addBtn.addEventListener("click", function(){
  const text = inputItem.value.trim();
  if (text === "") return;
  const li = document.createElement("li");
  li.textContent = text;
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", function(){
    itemList.removeChild(li);
  });
  li.appendChild(removeBtn);
  itemList.appendChild(li);
  inputItem.value = "";
});

// ======== arrays =========
let tasks = ["Watch kenyan game", "Practice JS", "Do a mini project"];
const taskList = document.getElementById("taskList");
for (let task of tasks){
  const li = document.createElement("li");
  li.textContent = task;
  taskList.appendChild(li)
}
tasks.push("Review notes"); 
    const li = document.createElement("li");
    li.textContent = "Review notes";
    taskList.appendChild(li);


// let math = 1 - "1";
// console.log(math);
// document.querySelector(".message").textContent = math;

// -------------------------- CALLING FUNCTIONS -------------------------
showVariables();
showOperators();
showConditionals();
showForloop();
showWhileloop();
showDoWhileLoop();
