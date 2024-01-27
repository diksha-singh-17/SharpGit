let posts = [
  { title: "POST1", body: "" },
  { title: "POST2", body: "" },
];

function printPost() {
  posts.forEach((post) => {
    console.log(post.title);
  });
}

function createPost(blog) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(posts.push(blog));
    }, 3000);
  });
}
function updateLastUserActivityTime() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const time = new Date().getMinutes();
      res(time);
    }, 2000);
  });
}

function deletePost() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(posts.pop());
    }, 1000);
  });
}

//update last activity time and then create a post
// createPost({ title: "Post Five", body: "This is Post Five" })
//   .then((val) => console.log(val))
//   .then(printPost)
//   .then(updateLastUserActivityTime)
//   .then((val) => console.log(val))
//   .then(deletePost)
//   .then((val) => console.log(val.title))
//   .then(printPost);

// reducer() function in array---executes a user-supplied "reducer" callback function on each element of the array, in order,
// passing in the return value from the calculation
// on the preceding element. The final result of running the reducer across all elements of the array is a single value.11

Promise.all([
  createPost({ title: "Post Five", body: "This is Post Five" }),
  updateLastUserActivityTime(),
]).then((values) => {
  console.log(values.reduce((m, n) => m + "===>" + n));
});

Promise.all([
  createPost({ title: "Post Five", body: "This is Post Five" }),
  updateLastUserActivityTime(),
])
  .then((values) => {
    console.log(values);
    console.log(values.reduce((m, n) => m + "===>" + n));
  })
  .then(deletePost)
  .then(printPost);
