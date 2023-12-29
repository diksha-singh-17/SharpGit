function outerfunction() {
  console.log(a); //7

  var c = 10;

  innerfunction();

  function innerfunction() {
    console.log(b); //3
    console.log(c); //10
  }
}

var a = 7;

var b = 3;

outerfunction();

// question-2

function outerfunction() {
  console.log(a); //undefined since 'a' is defined again so on brand new execution context it will get scanned and assigned to undefined in 1st phase. Hence console will give undefined

  var a = 10;

  innerfunction();

  function innerfunction() {
    console.log(a); //10

    console.log(window.a); //7

    console.log(this.a); //7 (will take object instance but there is no obj so window/global)
  }
}

var a = 7;

var b = 3;
console.log(a); //7
outerfunction();
