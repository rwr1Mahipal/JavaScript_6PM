// const form = document.getElementById("form");

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  try {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("name", name);
    console.log("email", email);
    console.log("password", password);

    // if(name === ""){
    //     alert("Name is required")
    //     return;
    // }
    // if(password === ""){
    //     alert("Password is required")
    //     return;
    // }
    // if(!email.includes("@") || email === ""){
    //     alert("Email is required")
    //     return;
    // }

    if (!name || !email.includes("@") || email === "" || !password) {
      //   alert("All fileds required");
      throw "All fileds required";
      //   return;
    }
    Toastify({
      text: "Form submited",
      duration: 3000,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
    // alert("Form submited");
    // const res = await fetch()
  } catch (error) {
    // console.log("error", error);
    Toastify({
      text: error,
      duration: 3000,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      style: {
        background: "linear-gradient(to right, #b00f00, #f2480f)",
      },
    }).showToast();
  }
});
