const users = [
  { id: 1, name: "Jhon", age: 20 },
  { id: 2, name: "Alice", age: 25 },
  { id: 3, name: "Don", age: 30 },
];

// const text = document.querySelector("h1");
const text = document.querySelectorAll(" .text");

users.map((user) => {
  console.log(user);
  
  text.innerHTML += user.age;
});

// users.forEach((user, index) => {
//   if (text[index]) {
//     text[index].innerHTML += user.name;
//   }
// });

// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   alert("Hello");
// });

// window.addEventListener("scroll", () => {
//   const nav = document.getElementById("nav");
//   if (window.scrollY > 100) {
//     nav.classList.add("scroll");
//     console.log(window.scrollY);
//   } else {
//     nav.classList.remove("scroll");
//   }
// });
