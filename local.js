const users = [
    {id:1, name:"node"},
    {id:2, name:"react"}
];

localStorage.setItem("users", JSON.stringify(users))
const getData = JSON.parse(localStorage.getItem("users"))
console.log(getData);

localStorage.setItem("Tech", "MERN Stack")

// localStorage.removeItem("Tech")
// localStorage.clear();

// const updateUser = getData.map((user)=>{
//     if(user.id === 1){
//         user.name = "JavaScript";
//     }
//     return user;
// })
// localStorage.setItem("users", JSON.stringify(updateUser))


const id = document.getElementById("id")
const name = document.getElementById("name")

getData.forEach((user)=>{
    id.innerHTML += user.id
    name.innerHTML += user.name
})