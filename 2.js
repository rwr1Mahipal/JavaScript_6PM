// Basic Function
function show() {
  console.log("Basic Function");
}
show();

// Arrow Function
const display = () => {
  console.log("Arrow Function");
};
display();

// Function with parameter
function sum(a, b) {
  console.log("Sum of: ", a + b);
}
sum(10, 20);

//Function with return
function add(a, b) {
  return a + b;
}
const sumFun = add(100, 200);
console.log(sumFun);

//IIFE fUNCTION
(function iifeFun() {
  console.log("IIFE Function");
})();

//Closur Function
function outerFun() {
  const a = 10;
  console.log("Outer Fun");
  function innerFun() {
    const b = 20;
    console.log("Inner Fun", a);
  }
  // console.log(b);
  // cannot call outside of function also  inner function can access outer function but outer dose not

  innerFun();
}
outerFun();

// Recurevie Function
function fact(n) {
  if (n == 0) return 1;
  return n * fact(n - 1);
}
console.log(fact(5));
