const users = [
  { id: 1, name: "Jhon", age: 20 },
  { id: 2, name: "Alice", age: 22 },
  { id: 3, name: "Nick", age: 25 },
];

// console.log(user);

// users.forEach((user) => {
//   console.log(user);
// });

// for (i = 0; i < users.length; i++) {
//   console.log(users[i].name);
// }

// for (let user of users) {
//   if (user.age >= 22) {
//     console.log(user);
//   }
// }

const userAge = users.filter((user) => user.age >= 25);
console.log(userAge);

// const text = document.getElementById("text");
// users.map((user) => {
//   text.innerHTML += `${user.name}` + `${user.age}` + "<br/>";
// });
