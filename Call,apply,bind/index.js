const obj = { num: 3 };

const FunctionName = function (a, b, c) {
  console.log(a); //[3,4,5]

  console.log(b); //undefined

  console.log(c);
  return this.num + a + b + c;
};

// call
console.log(FunctionName.call(obj, 1, 2, 3));

// apply
const arr = [2, 3, 4];
console.log(FunctionName.apply(obj, arr));

// bind
const boundFunc = FunctionName.bind(obj);
console.log(boundFunc(1, 2, 3));

// * Call and apply are same only difference is apply takes "array "as an argument while call not
// bind first bind that method with bound function we then pass the argument to call that method
// Bind returns a function with object attached to it
// Call and apply invokes the function with the object and arguments

var obj1 = {
  val: 100,
};

function fun() {
  console.log(this.val); //undefined
}

fun();

var obj2 = {
  val: 100,
};

function fun(a) {
  console.log(this.val + a); //NAN
}

fun.call(obj2);

// ****

var obj3 = {
  val: 100,
};

function fun(a, b, c) {
  console.log(a); //[3,4,5]

  console.log(b); //undefined

  console.log(c); //undefined
}

fun.call(obj3, [3, 4, 5]);
