const user = {id:1, name:"kavi", age: 25};

// console.log(abc);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
console.log(Object.assign({},user,{country: "india"}));
// console.log(user.hasOwnProperty("id"));
// delete user.country;

Object.seal(user);
user.age = 20;
console.log(user)

const abc = JSON.stringify(user);

console.log(abc)


const abcd = JSON.parse(abc);

console.log(abcd)






