// const mainHeader = document.getElementById("main-heading");
// mainHeader.textContent = "Fruit World";
// mainHeader.style.color = "orange";
// const header = document.getElementById("header");
// header.style.backgroundColor = "green";
// header.style.borderBottom = " 3px solid orange";
// const basketHeading = document.getElementById("basket-heading");
// basketHeading.style.color = "green";
// let para = document.getElementById("thanks");
// para.innerHTML = "<p>Please visit us again</p>";
// const fruits = document.getElementsByClassName("fruit");
// fruits[2].style.backgroundColor = "yellow";

// code here
for (let i = 0; i < fruits.length; i++) {
  fruits[i].style.fontWeight = "bold";
}
// code here
const tagItems = document.getElementsByTagName("li");
tagItems[4].style.color = "blue";
for (let i = 0; i < tagItems.length; i++) {
  tagItems[i].style.fontStyle = "italic";
}

// Write the code as shown in the video below:
const basketheader = document.querySelector("#basket-heading");
basketheader.style.color = "brown";
const liItems = document.querySelectorAll(".fruit:nth-child(even)");
for (let i = 0; i < liItems.length; i++) {
  liItems[i].style.backgroundColor = "brown";
  liItems[i].style.color = "white";
}
const mainheading = document.querySelector("#main-heading");
mainheading.style.textAlign = "center";

const para = document.querySelector("#thanks");
para.style.color = "blue";

const fruitsItem = document.querySelectorAll(".fruit");
for (let i = 0; i < fruitsItem.length; i++) {
  fruitsItem[i].style.padding = "10px";
}
const fruitsItems = document.querySelectorAll(".fruit");
for (let i = 0; i < fruitsItems.length; i++) {
  fruitsItems[i].style.fontWeight = "bold";
}
