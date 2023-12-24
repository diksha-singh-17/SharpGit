// Add input element inside form, before button, to take fruit description
const inputfield = document.createElement("input");
const textNode = document.createTextNode("desc");
inputfield.appendChild(textNode);
const form = document.querySelector("form");
inputfield.id = "input";
// const btn=document.getElementsByTagName('button');

form.insertBefore(inputfield, form.children[2]);

// Show the fruit description in italics on the next line

const value = document.getElementById("input");
const actualvalue = value.textContent;
console.log(actualvalue);

// Create a filter that shows only those fruits whose either name or description or both matches the entered text
