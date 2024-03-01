function x() {
  let a = 10;

  function y() {
    console.log(a); //10
    // return 5;
  }

  return y;
}

const z = x();

console.log(z()); //undefined(becuase we don't have any return statement inside function y(), only a console.)

//

let count = 0;
const name1 = (arr) => {
  return () => {
    console.log("Hello" + arr[count]);
    count++;
  };
};
let fun1 = name1(["ram", "shyam"]);
fun1(); // Print Hello Ram
fun1(); //print Hello Shyam

let obj = {
  name: "dixa",
  age: 22,

  abc: () => {
    console.log(this.name + this.age);
  },
  xyz() {
    let that = this;
    function demo() {
      console.log(that.name + that.age);
    }
    demo();
  },
};
obj.abc();
obj.xyz();
