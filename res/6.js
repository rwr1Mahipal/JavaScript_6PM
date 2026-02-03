// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   alert("Hello");
// });

window.addEventListener("scroll", () => {
  const nav = document.getElementById("nav");
  if (window.scrollY > 100) {
    nav.classList.add("scroll");
    console.log(window.scrollY);
  } else {
    nav.classList.remove("scroll");
  }
});
