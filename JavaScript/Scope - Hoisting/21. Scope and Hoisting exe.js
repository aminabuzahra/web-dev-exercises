// Scope and Hoisting Exercises
// 1. Basic Understanding of Hoisting

console.log(a); // undefined
var a = 5;
console.log(b); // Cannot access 'b' before initialization
let b = 5;
console.log(c); //  Cannot access 'c' before initialization
const c = 5;

// 2. Understanding Function Hoisting
console.log(myFuncDecl());
// Output: Hello from function declaration!
function myFuncDecl() {
  return "Hello from function declaration!";
}

console.log(myFuncExpr());
// Output: TypeError: myFuncExpr is not a function
var myFuncExpr = function () {
  return "Hello from function expression!";
};

// 3. Nested Scopes and Hoisting
const x = "global";
function outerFunc() {
  let y = "outer";
  function innerFunc() {
    var z = "inner";
    console.log(x); // Output: global
    console.log(y); // Output: outer
  }
  innerFunc();
  console.log(z); // Output: ReferenceError: z is not defined
}
outerFunc();

// 4. Combining All Concepts
const a = 1;
function b() {
  const a = 10;
  c();
  return;
  function c() {
    console.log(a); // output: 10
  }
}
b();
console.log(a); // output: 1
foo();
function foo() {
  console.log(x); // output: undefined
  var x = "Hello, world!";
  bar();
  function bar() {
    console.log(x); // output: ReferenceError: Cannot access 'x' before initialization
    let x = "Hello, scope!";
  }
}
