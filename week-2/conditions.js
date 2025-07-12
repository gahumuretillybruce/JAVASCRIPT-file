//conditions 

//if 
//if else
//if else if
//switch for menus
//ternary operator

// if (condition){
//     //this is where the code runs .. only if the condition is truthy
// }

// //do this or that
// if(condition){

// } else{
//     //this part runs if the condition is false
// }

// // a lot of choices
// //if else if else 
// if (condition){
//     //this is where the code runs .. only if the condition is truthy
// }else if(condition2){
//     //this part runs if condition2 is truthy
// }

// //switch statement
// switch (expression) {
//     case drive:
//         // code block for drive
//         break;
//     case reverse:
//         // code block for reverse
//         break;
//     default:
//         // code block if no cases match
// }

// //ternary operator
// //shorter way to write if else statements
// condition ? expressionIfTrue : expressionIfFalse;



// 1. IF EXAMPLES
let number = 18;
if (number > 0) {
    console.log(number + " " + "is a positive number");
}

let isRaining = true;
if (isRaining) {
    console.log("remember to take your raincoat");
}

// if(age>=20 && age<=30){
//     console.log("eligible for chick request");
// }

// let age = 19;
// if(age>=18){
//     console.log("eligible for driving permit");
// }



let num2 = prompt("please enter your number:");
if (num > 0) {
    window.alert(`${num}, is a positive number`);
    console.log(`${num}, is a positive number`);
} else if (num < 0) {
    console.log(`${num} is negative`);
    alert(`${num} is negative`);
} else {
    alert(`the number is zero`)
    console.log(`the number is zero`)
}


// let quantity = prompt("please enter the quantity:");
// if (quantity >= 100 && quantity <= 500) {
//     alert(`request accepted`)
// } else {
//     alert(`invalid quantity`)
// }

//using  a switch
// let num = prompt("enter your number");
// switch (true) {
//     case num > 0:
//         window.alert(`${num}, is a positive number`);
//         console.log(`${num}, is a positive number`);
//         break;

//     case num == 0:
//         window.alert(`${num}, the number is 0`);
//         console.log(`${num}, the number is 0`);
//         break;

//     case num < 0:
//         window.alert(`${num}, the number is negative`);
//         console.log(`${num}, the number is negative`);
//         break;

//     default:
//         window.alert(`${num}, this is not s number`);
//         console.log(`${num}, this is not a number`);

//         break;
// }



let dayInput = prompt("please enter a day of the week (1-7):");
switch (dayInput) {
    case "1":
        alert("Monday");
        break;
    case "2":
        alert("Tuesday");
        break;
    case "3":
        alert("Wednesday");
        break;
    case "4":
        alert("Thursday");
        break;
    case "5":
        alert("Friday");
        break;
    case "6":
        alert("Saturday");
        break;
    case "7":
        alert("Sunday");
        break;
    default:
        alert("Invalid input, please enter a number between 1 and 7.");
}

