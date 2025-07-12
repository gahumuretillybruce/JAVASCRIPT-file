//browser storage usually for cookies etc limit of 5mbs
//localStorage stores data untill you clean it manually

localStorage.setItem('name', 'John Doe'); // Set item
localStorage.getItem('name'); // retrieving data from the DB
localStorage.clear(); // Clear all items
localStorage.removeItem('name'); // Remove specific item

let user = {
  name: 'John Doe',
  age: 30,
};
localStorage.setItem('user', JSON.stringify(user)); // Store or saving or sending data
let data = JSON.parse(localStorage.getItem('user')); // Retrieve or getting data
data.name;

//sessionStorage - sessionStorage stores data for the duration of the page session for only one tab
sessionStorage.setItem('sessionName', 'Jane Doe'); // Set item
sessionStorage.getItem('sessionName'); // Get item
sessionStorage.clear(); // Clear all items
sessionStorage.removeItem('sessionName'); // Remove specific item

//cookies-
//indexedDB
