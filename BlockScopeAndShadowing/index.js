// 1)

// var a = 50;

// {
//   var a = 30;

//   let b = 20;

//   let c = 30;
// }

// console.log(a); //30

// 2)

// const a = 50;

// {
//   var a = 30;

//   let b = 20;

//   let c = 30;
// }

// console.log(a); //error--SyntaxError: Identifier 'a' has already been declared

// 3)

// let a = 50;

// {
//   var a = 30;

//   let b = 20;

//   let c = 30;
// }

// console.log(a); //error--SyntaxError: Identifier 'a' has already been declared

// 4) (THINK SMARTLY BEFORE ANSWERING THIS)

// var a = 50;

// function fun() {
//   var a = 30;    //will not shadow

//   let b = 20;

//   let c = 30;
// }

// fun();

// console.log(a); //50

// 5)

// let a = 50;

// function fun() {
//   var a = 30;

//   let b = 20;

//   let c = 30;
// }

// fun();

// console.log(a); //50

// 6)

// const a = 10;

// {
//   var a = 100;
// }

// console.log(a); //SyntaxError: Identifier 'a' has already been declared

// 7)

// const a = 10;

// {
//   const a = 20;

//   {
//     const a = 50;

//     console.log(a); //50
//   }

//   console.log(a); //20
// }

// console.log(a); //10

// 8)

const a = 10;

{
  const a = 20;

  {
    console.log(a); //20
  }

  console.log(a); //20
}

console.log(a); //10

// 9) Explain what did you understand by lexical scope in your own words
