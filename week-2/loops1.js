// INTRODUCTION TO LOOPS
// Loops are used to execute a block of code repeatedly until a specified condition is met.


//  for loop

//  for (initialization; condition; increment/decrement) {
//     code to be executed
//  }





// while loop

//let x = ;
// while () {
//     code to be executed
//     x++;// increment or decrement the variable
//     //     // if you dont increment or decrement the variable, it will create an infinite loop
// }




// do loop

// do {
//     console.log();
//     
// } while ();



// 1. FOR LOOP EXAMPLES

let x = 0; // initialization
x < 10; // condition
x++; // increment

for(x = 0; x < 10; x++) {
    alert("This is iteration number: " + x);

}

// // square of numbers from 1 to 10 
// for(let x = 1; x <= 10; x++) {
//     console.log(`${x} * ${x} = ${x * x}`);
// }

// // multiplication table of 12
// for(let x = 1; x <= 12; x++) {
//     console.log(` ${x} = ${12 * x}`);
// }

// // while loop example
// //print numbers from 1 to 10
// let x = 0; // initialization
// while (x <= 10) {
//     console.log(x);
//     x++; // increment
// }


//while loop example with user input
let userInput;
const password = "1234";
while (userInput !== password) {
    userInput = prompt("Enter the password:");
}
alert("Access granted!");




// do while loop example
let z = 0;
do {
    console.log(z);
    z++;
} while (z <= 10);