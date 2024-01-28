console.log("person1:shows ticket");
console.log("person2:shows ticket");
// Using Promise

// const promiseWifeBringingTickets = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("ticket");
//   }, 3000);
// });

// promiseWifeBringingTickets.then((msg) => {
//   console.log(`person3:shows ${msg}`);
// });

// const getPopCorn1 = promiseWifeBringingTickets.then((msg) => {
//   console.log("hus:we should go in");
//   console.log("wife:I am hungry");
//   return new Promise((res, rej) => {
//     res(`${msg} popcorn`);
//   });
// });
// const getButter2 = getPopCorn.then((msg) => {
//   console.log("hus:got some popcorn");
//   console.log("hus:we should go in");
//   console.log("wife:I need butter");
//   return new Promise((res, rej) => {
//     res(`${msg} butter`);
//   });
// });

// getButter.then((msg) => console.log(msg));

// Using Async
const preMovie = async () => {
  const promiseWifeBringingTickets = new Promise((res, rej) => {
    setTimeout(() => {
      res("ticket");
    }, 3000);
  });

  const getPopCorn = new Promise((res, rej) => res("popcorn"));
  const getButter = new Promise((res, rej) => res("butter"));
  const getColdrink = new Promise((res, rej) => res("Drink"));
  let ticket = await promiseWifeBringingTickets;
  console.log(`husband and wife are going to the cinema with ${ticket}`);
  console.log("hus:we should go in");
  console.log("wife:I am hungry");
  console.log(getButter, ":getButter");
  let [Popcorn, Butter, Coldrink] = await Promise.all([
    getPopCorn,
    getButter,
    getColdrink,
  ]);
  console.log(`${Popcorn}, ${Butter}, ${Coldrink}`);

  // let popcorn = await getPopCorn;
  console.log(`hus:got some ${Popcorn}`);
  console.log("hus:we should go in");
  console.log("wife:I need butter");
  // let butter = await getButter;
  console.log(`The movie starts with ${Popcorn} and ${Butter}`);
  console.log("hus:anything else darling!");
  // let drink = await getColdrink;
  console.log(`wife:Let's have a ${Coldrink}`);

  return ticket;
};
console.log("person4:shows ticket");
console.log("person5:shows ticket");
preMovie().then((ticket) => console.log(`person6:this is my  ${ticket}`));
