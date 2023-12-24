// Add the Edit Button:

const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");

// create edit btn el
const editbtn = document.createElement("button");
const textEditNode = document.createTextNode("edit");
editbtn.appendChild(textEditNode);
console.log(editbtn);
editbtn.className = "edit-btn";

const btn = document.querySelectorAll(".delete-btn");
const allItems = document.querySelectorAll(".fruit");
console.log(allItems.length);
// allItems[1].appendChild(editbtn);
for (let i = 0; i < allItems.length; i++) {
  // allItems[i].insertBefore(editbtn, btn);
  // console.log(i);
  // allItems[i].style.color = "blue";
  allItems[i].appendChild(editbtn);
  // allItems[i].innerHTML = '<button class="edit-btn">edit</button>';
}

// Add input element inside form, before button, to take fruit description

const inputfield = document.createElement("input");
const textNode = document.createTextNode("desc");
inputfield.appendChild(textNode);
const forms = document.querySelector("form");
inputfield.id = "input";
// const btn=document.getElementsByTagName('button');

forms.insertBefore(inputfield, form.children[2]);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const fruitsToAdd = document.getElementById("fruit-to-add");
  // console.log(fruitsToAdd.value);
  const items = document.createElement("li");
  // ******************
  // Show the fruit description in italics on the next line
  const description = document.getElementById("input");
  description.setAttribute("class", "dec-area");
  // description.className = "desc";
  // desc.style.fontStyle = "italic";
  const area = `<p>${description.value}</p>`;

  area.id = "desc";
  // **********************
  items.innerHTML =
    fruitsToAdd.value +
    area +
    '<button class="delete-btn">x</button>' +
    '<button class="edit-btn">edit</button>';

  // const textNode = document.createTextNode(fruitsToAdd.value);

  // items.append(textNode);
  // items.className = "fruit";
  // const deletebtn = document.createElement("button");
  // const textButtonNode = document.createTextNode("xy");
  // deletebtn.appendChild(textButtonNode);
  // deletebtn.className = "delete-btn";
  // console.log(deletebtn);
  // items.appendChild(deletebtn);
  fruits.appendChild(items);
});
// Implement the code as in video but with one extra 'Edit' button in 'li'

fruits.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const elementToDelete = event.target.parentElement;
    // console.log("happening", elementToDelete);
    fruits.removeChild(elementToDelete);
  }
});

// Create a filter that shows only those fruits whose either name or description or both matches the entered text
const filter = document.getElementById("filter");

filter.addEventListener("keyup", function (event) {
  const textEntered = event.target.value.toLowerCase();
  const fruitItems = document.querySelectorAll(".fruit");
  for (let i = 0; i < fruitItems.length; i++) {
    const currenetFruitsText =
      fruitItems[i].firstChild.textContent.toLowerCase();
    if (currenetFruitsText.indexOf(textEntered) === -1) {
      fruitItems[i].style.display = "none";
    } else {
      fruitItems[i].style.display = "block";
    }
  }
});
