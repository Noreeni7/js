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
  document.getElementById("myText").style.fontSize = "40px";
  document.getElementById("myText").style.fontStyle = "";
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
document.getElementById("hoverP").addEventListener("mouseover", function () {
  document.getElementById("hoverP").style.color = "brown";
});
document.getElementById("hoverP").addEventListener("mouseout", function () {
  document.getElementById("hoverP").style.color = "white";
});

// ============= keydown/keyup =========

// ============== CREATING AND REMOVING ELEMENTS ==============
const addBtn = document.getElementById("addBtn");
const inputItem = document.getElementById("inputItem");
const itemList = document.getElementById("itemList");

addBtn.addEventListener("click", function () {
  const text = inputItem.value.trim();
  if (text === "") return;
  const li = document.createElement("li");
  li.textContent = text;
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", function () {
    itemList.removeChild(li);
  });
  li.appendChild(removeBtn);
  itemList.appendChild(li);
  inputItem.value = "";
});

// ======== arrays =========
let tasks = ["Watch kenyan game", "Practice JS", "Do a mini project"];
const taskList = document.getElementById("taskList");
for (let task of tasks) {
  const li = document.createElement("li");
  li.textContent = task;
  taskList.appendChild(li);
}

// push() → add at the end
function addTaskToPage(text) {
  tasks.push(text);
  const li = document.createElement("li");
  li.textContent = text;
  taskList.appendChild(li);
}

addTaskToPage("Next task");

// pop() → remove last item
tasks.pop();
taskList.removeChild(taskList.lastChild);

// shift() → remove first item
tasks.shift();
taskList.removeChild(taskList.firstChild);

// unshift() → add at the beginning
tasks.unshift("Added");
const li = document.createElement("li");
li.textContent = "Added";
taskList.insertBefore(li, taskList.firstChild);

// displays length
console.log(tasks.length);
document.querySelector(".message1").textContent = tasks.length;

// === Random Quote Generator: displays a random quote from an array when the button is clicked ===
const quotes = [
  "The best time to plant a tree was 20 years ago.",
  "You miss 100% of the shots you don't take.",
  "Every day is a second chance.",
  "Believe you can and you're halfway there.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Do what you can, with what you have, where you are.",
  "Don’t watch the clock; do what it does. Keep going.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Start where you are. Use what you have. Do what you can.",
  "Your limitation—it’s only your imagination.",
  "Great things never come from comfort zones.",
  "Believe in yourself and all that you are.",
  "Small steps every day add up to big results.",
  "Mistakes are proof that you are trying.",
  "Do something today that your future self will thank you for.",
];
document.getElementById("quoteBtn").addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").textContent = quotes[randomIndex];
});

// ==================================== OBJECTS =======================================
const person = {
  name: "Dan",
  age: 50,
  job: "Software engineer",
};
console.log(person.name);
console.log(person["name"]);
person.age = 60;
person.city = "Kericho";
console.log(person["city"]);
document.querySelector(".data").textContent =
  person.name + " " + person.age + " " + person["city"];

// ==================================== Looping Through Arrays & Objects ======================
// ====== Arrays with for...of ======
let favFoods = ["Potatoes", "Avocado", "Passion fruits"];

for (let favFood of favFoods) {
  console.log(favFood);
  document.querySelector(".favouriteFood").textContent += favFood + "\n";
}

// Using for...in to loop through object properties
const car = {
  model: "Toyota",
  year: 2011,
};
for (let key in car) {
  console.log(key + ": " + car[key]);
  document.querySelector(".carDetails").innerHTML +=
    key + ": " + car[key] + "<br>";
}

// === forEach on an array
let stations = ["KBS", "Citizen", "NTV"];

stations.forEach(function (station, index) {
  console.log(index + 1 + ": " + station);
});

// ======================== FUNCTION PARAMETERS & DEFAULT VALUES ===============================
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(3, 5));
console.log(multiply(9));
document.querySelector(".mult").innerHTML += multiply(3, 5) + "<br>";
document.querySelector(".mult").innerHTML += multiply(9) + "<br>";

// ======================== ARROW FUNCTION WITH DEFAULT VALUES ===============================
const multily = (a, b = 1) => a * b;
console.log(multily(3, 5));
console.log(multily(9));
document.querySelector(".mult").innerHTML += multily(3, 5) + "<br>";
document.querySelector(".mult").innerHTML += multily(9) + "<br>";

// =================== Array Methods: Learn: .map(), .filter(), .reduce() =======================
let numbers = [3, 6, 4, 8, 9, 11];

let doubled = numbers.map((number) => number * 2);
console.log("Doubled: " + doubled);

let greaterThan10 = doubled.filter((number) => number > 10);
console.log("Number greater than 10 = " + greaterThan10);

let sum = greaterThan10.reduce((total, number) => total + number, 0);
console.log("Total= " + sum);

// ================== Date & Time: Date() object, .getHours(), .getMinutes() ===============
let now = new Date();
console.log("Current date and time: " + now);

console.log("Hour: " + now.getHours());
console.log("Minute: " + now.getMinutes());
console.log("Seconds: " + now.getSeconds());

// =====  JSON BASICS: JSON.stringify(), JSON.parse(), localStorage.setItem(), localStorage.getItem =========
let company = {
  name: "cardPlace",
  year: 2017,
  service: "creative designs",
};

console.log("Company info: ", company);

// Convert object → JSON string
let companyJSON = JSON.stringify(company);
console.log("Company info: " + companyJSON);

// Save JSON string to localStorage
localStorage.setItem("companyData", companyJSON);

// Retrieve JSON string back from localStorage (use SAME key)
let retrievedData = localStorage.getItem("companyData");
console.log("retrieved: ", retrievedData);

// Convert JSON string → object
let obj = JSON.parse(retrievedData);
console.log("object again: ", obj);

// access values
console.log("Name: ", obj.name);
console.log("Year: ", obj.year);
console.log("Service: ", obj.service);

// See everything in localStorage
console.log(localStorage);

// Remove one item
localStorage.removeItem("companyData");

// Clear everything
localStorage.clear();

// ================  API?: fetch() , fetching and logging a sample API (e.g., JSONPlaceholder) =====
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    let list = document.getElementById("userList");

    // Loop through each user in the array
    users.forEach((user) => {
      // Create a new list item for each user
      let li = document.createElement("li");

      // Add user’s name and email inside the <li>
      li.textContent = `${user.name} (${user.email})`;

      // Add the <li> to the <ul> so it shows on the page
      list.appendChild(li);
    });
  })
  .catch((error) => console.error("Error:", error)); // Handle errors

// ============================ SHORTCUTS FOR IF-STATEMENT =================================
// ========== 1.Tertiary operator ?: ==============
const result = true ? "truthy" : "falsy";
console.log(result);
document.querySelector(".tertiary-operator").textContent = result;
const results = 0 ? "truthy" : "falsy";
console.log(results);
document.querySelector(".tertiary-operator").textContent = results;

// ========== 2. Guard operator && ============

// ========== 2. Default operator || ============

// ========== 3. Parameters ============
function calculateTax(cost, percentage = 0.1) {
  console.log(cost * percentage);
}

calculateTax(20000, 0.2);
calculateTax(50000);

// rock paper scissor game
document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    const randomNumber = Math.random();
    let computerMove = "";
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "paper";
    } else {
      computerMove = "scissors";
    }

    let result = "";
    if (computerMove === "rock") {
      result = "tie";
    } else if (computerMove === "paper") {
      result = "lose";
    } else if (computerMove === "scissors") {
      result = "win";
    }

    updateScore(result);

    document.querySelector(
      ".js-Rscore"
    ).textContent = `You picked rock, Computer picked ${computerMove}. You ${result} Wins: ${score.wins} ,Losses: ${score.losses}, Ties: ${score.ties}`;

    alert(`You picked rock, Computer picked ${computerMove}. You ${result}
       Wins: ${score.wins} ,Losses: ${score.losses}, Ties: ${score.ties}`);
  } else if (event.key === "p") {
    const randomNumber = Math.random();
    let computerMove = "";
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "paper";
    } else {
      computerMove = "scissors";
    }

    let result = "";
    if (computerMove === "rock") {
      result = "win";
    } else if (computerMove === "paper") {
      result = "tie";
    } else if (computerMove === "scissors") {
      result = "lose";
    }

    updateScore(result);

    document.querySelector(
      ".js-Pscore"
    ).textContent = `You picked paper, Computer picked ${computerMove}. You ${result} Wins: ${score.wins} ,Losses: ${score.losses}, Ties: ${score.ties}`;

    alert(`You picked paper, Computer picked ${computerMove}. You ${result}
       Wins: ${score.wins} ,Losses: ${score.losses}, Ties: ${score.ties}`);
  } else if (event.key === 's') {
    const playerMove = 'scissors'
    const randomNumber = Math.random();
    let computerMove = "";
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "paper";
    } else {
      computerMove = "scissors";
    }

    let result = "";
    if (computerMove === "rock") {
      result = "lose";
    } else if (computerMove === "paper") {
      result = "win";
    } else if (computerMove === "scissors") {
      result = "tie";
    }
    updateScore(result);

    document.querySelector(
      ".js-Sscore"
    ).textContent = `You picked scissors, Computer picked ${computerMove}. You ${result} Wins: ${score.wins} ,Losses: ${score.losses}, Ties: ${score.ties}`;

    alert(`You picked ${playerMove}, Computer picked ${computerMove}. You ${result}
       Wins: ${score.wins} ,Losses: ${score.losses}, Ties: ${score.ties}`);
  }
});

const score = {
  wins: 0,
  losses: 0,
  ties: 0,
};

function updateScore(result) {
  if (result === "win") {
    score.wins += 1;
  } else if (result === "lose") {
    score.losses += 1;
  } else if (result === "tie") {
    score.ties += 1;
  }
}

scoreJson = JSON.stringify(score);
localStorage.setItem("scoreString", scoreJson);
retrievedScore = localStorage.getItem("scoreString");
scoreObj = JSON.parse(retrievedScore);

// ========================================= LOOP ================================================
// ======== while loop ========
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

// ========== for loop =========
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// break and continue
for (i = 0; i <= 10; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
  if (i === 8) {
    break;
  }
}

// setTimeout(),
setTimeout(function () {
  console.log("time is out");
}, 5000);

// setInterval()
setInterval(function () {
  console.log("interval");
}, 5000);

// -------------------------- CALLING FUNCTIONS -------------------------
showVariables();
showOperators();
showConditionals();
showForloop();
showWhileloop();
showDoWhileLoop();
