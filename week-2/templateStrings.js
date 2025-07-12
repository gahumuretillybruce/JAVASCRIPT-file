//3 ways of defining strings
// 1. Single quotes
let singleQuoteString = 'This is a string in single quotes';

// 2. Double quotes
let doubleQuoteString = "This is a string in double quotes";

// 3. Backticks
let templateString = `This is a string in backticks`;

//escape sequences
let escapedSingleQuote = 'It\'s a nice day';
let escapedDoubleQuote = "He said, \"Hello!\"";
let escapedBacktick = `This is a string with an escaped backtick: \``;

//when you use backticks you dont need escape sequences
let backtickWithoutEscape = `This is a string with a backtick: \``;

console.log(`${1+2}this is line "one" this is line "two" this is line "three"`);

let name = "John";
let age = 30;
let message = `hello ${name} you are ${age} years old, next year you will be ${age + 1} years old.`;
console.log(message);