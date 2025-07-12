//The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing developers to manipulate the content and structure of a webpage dynamically.
//The document stands for the entire HTML or XML document, and it is the root of the DOM tree. The DOM provides a way to access and modify the content, structure, and style of a document using JavaScript.
//it helps to create dynamic web pages by allowing scripts to update the content, structure, and style of a document while it is being viewed.
 console.log(document);
// console.log(window)

//DOM methods 
 // Access the body element of the document
console.log(document.body)



//DOM manipulation methods
//create, read, update, delete (CRUD) operations on the DOM elements
//C create/ get (getElementById, getElementsByClassName, querySelector, createElement)

// getElementbyId()// selects element by its ID
// getElementsByClassName()// selects all elements that have a specified class name
// getElementsByTagName()// selects all elements that have a specified tag name
// querrySelector()// selects the first element that matches a specified CSS selector (can also be used to select by ID, class, or tag name)
// querrySelectorAll()// selects all elements that match a specified CSS selector

// const allTitles = document.getElementsByTagName('h1');
// console.log(allTitles.length); // Outputs the number of <h1> elements in the document
// for (let i = 0; i < allTitles.length; i++) {
//     console.log(allTitles[i]); // Outputs each <h1> element in the document
//     console.log(allTitles[i].textContent); // Outputs the text content of each <h1> element
// }

// const firstTitle = document.getElementById('head1');
// console.log(firstTitle); // Outputs the first element with ID 'head1'
// console.log(firstTitle.textContent); // Outputs the text content of the first element with ID 'head1'

// const firstTitle = document.querySelector('#head1');
// console.log(firstTitle); // Outputs the first element with ID 'head1'

// const firstTitle = document.querySelector('.head1');
// console.log(firstTitle); // Outputs the first element with class 'head1'

// const firstTitle = document.querySelector('h1');
// console.log(firstTitle); // Outputs the first <h1> element in the document


// const allTitles = document.querySelectorAll('h1');
// console.log(allTitles.length); // Outputs the number of <h1> elements in the document
// allTitles[1].className; // Outputs the class name of the second <h1> element in the document
// allTitles[1].className = 'new-class'; // Changes the class name of the second <h1> element to 'new-class'
// allTitles[3].className = 'title'; // Changes the class name of the fourth <h1> element to 'title'
// allTitles[3].textContent = 'this is the fourth heading'; // Changes the text content of the fifth <h1> element to 'this is the fourth heading'
// allTitles[3].style.color = 'red'; // Changes the text color of the fifth <h1> element to red
// allTitles[3].style.backgroundColor = 'yellow'; // Changes the background color of the fifth <h1> element to yellow
// allTitles[3].style.fontSize = '30px'; // Changes the font size of the fifth <h1> element to 30 pixels