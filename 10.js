const users = [
  { id: 1, name: "Jhon", age: 20 },
  { id: 2, name: "Alice", age: 25 },
  { id: 3, name: "Don", age: 30 },
  { id: 3, name: "Joe", age: 22 },
];

// getElementById for selecting id from html

// let h1 = document.getElementById("h1");
// h1.innerText = "Mihir";

// querySelector for selecting single tag from html
// let para = document.querySelector(".para");
// para.innerText = "Full-stack development";

// querySelectorAll for selecting multile tag together from html
const text = document.querySelectorAll(".li")

// text.forEach((li) =>{
//     li.innerText = 'Red & White'
// })

users.forEach((user, index) => {
  if (text[index]) {
    text[index].innerHTML += user.name;
  }
});

users.map((user,ind) => {
  if(text[ind]){
    text[ind].innerText += ` ${user.age}`
  }
});
