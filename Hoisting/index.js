// printName("YAVTECH");

// console.log(a);                //undefined

// var a = 3;

// function printName(name) {
//   console.log(name);           //YAVTECH
// }

// question-2

// console.log(printName);  //undefined

// console.log(a);       //undefined

// var a = 3;
// printName("divya");     //give typeerror: printNameis not a function
// var printName = (name) => {
//   console.log(name);
// };
// printName("divya");    //divya

// question-3
console.log(printName); //undefined (arrow function and function stored in variable never gets hoisted, can be considered as variable )

console.log(a); //undefined

var a = 3;

var printName = function (name) {
  console.log(name); //lav
  return name; //lav
};
console.log(printName("lav")); //lav
