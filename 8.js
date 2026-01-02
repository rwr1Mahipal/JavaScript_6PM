const users = [
  { id: 1, name: "Jhon", age: 20 },
  { id: 2, name: "Alice", age: 25 },
  { id: 3, name: "Don", age: 30 },
];

console.log(users);

const text = document.getElementById("text");

users.map((user, index)=>{
    text.innerHTML += `${user.name}  ${user.age}` + "<br/>"
 })
