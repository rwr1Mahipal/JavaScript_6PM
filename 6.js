const user = { id: 1, name: "Jhon", age: 30 };
const str = JSON.stringify(user);

// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(JSON.parse(str));
// Object.freeze(user);
// Object.seal(user)
// user.age = 40;
// delete user.age;

console.log(user.hasOwnProperty("id"));
