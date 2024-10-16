/*  In JavaScript, the setAttribute method is used to set the value of an attribute on a specified element. 
This method allows you to modify attributes of HTML elements dynamically. 
It’s part of the Element interface and is commonly used when manipulating the Document Object Model (DOM).
*/

const attr = document.getElementById("mod");
attr.setAttribute("id" , "attributes") // overwrite the Id

// console.log(attr)

// for styling

attr.setAttribute("style", "background:red");
// console.log(attr) // it can be used to add the style but it remove the inline css for example.

/*
The getAttribute method in JavaScript is used to retrieve the value of a specified attribute from an HTML element. 
This method is also part of the Element interface and is commonly used in conjunction with the Document Object Model (DOM) to access and manipulate attributes of elements dynamically.
*/

const attr1 = document.getElementById("mod1");
attr1.getAttribute("class");
// console.log(attr1)

const remove = document.getElementById("rem")
remove.removeAttribute("style")
console.log(remove)