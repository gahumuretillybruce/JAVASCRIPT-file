// Browser storage overview:
// localStorage persists data until manually cleared (5MB limit)
// sessionStorage stores data for one tab session

// Local Storage Example
localStorage.setItem('name', 'John Doe'); // Set item
console.log(localStorage.getItem('name')); // Get item
localStorage.removeItem('name'); // Remove specific item

let user = {
  name: 'John Doe',
  age: 30,
};
localStorage.setItem('user', JSON.stringify(user)); // Store object
let data = JSON.parse(localStorage.getItem('user')); // Retrieve object
console.log(data.name); // Access property

// Session Storage Example
sessionStorage.setItem('sessionName', 'Jane Doe');
console.log(sessionStorage.getItem('sessionName'));
sessionStorage.removeItem('sessionName');

// Form Handling and Local Save
const form1 = document.getElementById("chicksRequestform");
const table = document.getElementById("tb1").getElementsByTagName("tbody")[0];
const errorMsg = document.getElementById("errorsmsg");

form1.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("farmerName").value.trim();
  const age = Number(document.getElementById("age").value);
  const quantity = Number(document.getElementById("quantity").value);
  const type = document.getElementById("chickType").value;

  errorMsg.textContent = "";

  // Basic Validation
  if (!name || age <= 0 || quantity <= 0 || !type) {
    errorMsg.textContent = "Please fill in all fields correctly.";
    return;
  }

  saveToLocalStorage(name, age, quantity, type);
  addToTable(name, age, quantity, type);
  form1.reset();
});

function saveToLocalStorage(name, age, quantity, type) {
  const chickData = { name, age, quantity, type };
  localStorage.setItem("chickData", JSON.stringify(chickData));
}

function addToTable(name, age, quantity, type) {
  let newRow = table.insertRow();
  newRow.insertCell().textContent = name;
  newRow.insertCell().textContent = age;
  newRow.insertCell().textContent = quantity;
  newRow.insertCell().textContent = type;
}
