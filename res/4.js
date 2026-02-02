const users = [
  { id: 1, name: "Jhon", age: 20 },
  { id: 2, name: "Alice", age: 30 },
  { id: 3, name: "Smit", age: 40 },
];
console.log(users);

// const user = users.map((user, index)=> user.name)
// console.log(user);

// const user = users.filter((user) => (
//   user.age < 25
//   // console.log(user)
// ));

const h1 = document.getElementById("continer")
const user = users.forEach((user) => (
  h1.innerHTML += user.name
));

