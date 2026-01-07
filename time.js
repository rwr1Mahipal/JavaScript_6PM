// window.addEventListener("load", () => {
//   setTimeout(() => {
//     document.getElementById("loading").style.display = "block";
//   }, 3000);
// });

// const slide = ["react", "node", "javascript"];
// let index = 0;
// let count = 0;
// const slideHandle = setInterval(() => {
//   count++;
//   document.getElementById("slide").innerHTML = slide[index];
//   index = (index + 1) % slide.length;
//   if (count === 6) {
//     clearInterval(slideHandle);
//   }
// }, 2000);

let count = 0;
let minutes = 60;
const countHandle = setInterval(() => {
  count++;
//   console.log(count);

  document.getElementById("count").innerHTML = count;
  if (count === 60) {
    minutes = 60 / 60
    document.getElementById("minutes").innerHTML = minutes;
  }
}, 1000);
