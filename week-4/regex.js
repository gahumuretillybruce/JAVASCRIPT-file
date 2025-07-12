let emailPattern
let phonePattern
// let ninPattern
let urlPattern
let farmerNamePattern = /^[A-Za-z]+$/;
let farmerName = prompt('Enter farmer name:');
// if (farmerNamePattern.test(farmerName)) {
//     alert('Valid farmer name');
// }else {
//     alert('Invalid farmer name');
// }
console.log(farmerNamePattern.test(farmerName) ? 'Valid farmer name' : 'Invalid farmer name');

let ninPattern = /^[A-Za-z0-9]+$/; // Example pattern for NIN
let nin = prompt('Enter NIN:');
console.log(ninPattern.test(nin) ? 'Valid NIN' : 'Invalid NIN');

// Example patterns for email
emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//simpler emailPattern
letEmailPattern2 = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/; 