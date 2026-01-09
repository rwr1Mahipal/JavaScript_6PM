const tostFun = ({mesage}) => {
  Toastify({
    text: mesage, // Message to be displayed
    duration: 3000, // Duration in milliseconds (3 seconds)
    gravity: "top", // Position: 'top' or 'bottom'
    position: "center", // Position: 'left', 'center', or 'right'
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Custom styling
    stopOnFocus: true, // Prevents dismissal on hover
  }).showToast();
};

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const error = document.getElementById("error");

  console.log("Name: ", name);
  console.log("Email: ", email);
  console.log("Password: ", password);

  try {
    if (!name || !password || !email) {
      //   alert("All value is required");
      //   error.innerHTML = "All value  is required";
      //   return;
      throw "All value is required";
    }

    if (name === "") {
      //   alert("Name is required");
      //   error.innerHTML = "Name is required";
      //   return;
      throw "Name is required";
    }
    if (password === "") {
      //   alert("Password is required");
      //   error.innerHTML = "Password is required";
      //   return;
      throw "Password is required";
    }
    if (!email.includes("@") || email === "") {
      //   alert("Email is required");
      //   error.innerHTML = "Valid Emailn required";
      //   return;
      throw "Valid email or Email ID is required";
    }

    error.innerHTML = "Form submitted";
    Toastify({
      text: "Form submitted", // Message to be displayed
      duration: 3000, // Duration in milliseconds (3 seconds)
      gravity: "top", // Position: 'top' or 'bottom'
      position: "center", // Position: 'left', 'center', or 'right'
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Custom styling
      stopOnFocus: true, // Prevents dismissal on hover
    }).showToast();
  } catch (error) {
    console.error("Form can't submitted", error);
    Toastify({
      text: error, // Message to be displayed
      duration: 3000, // Duration in milliseconds (3 seconds)
      gravity: "top", // Position: 'top' or 'bottom'
      position: "center", // Position: 'left', 'center', or 'right'
      backgroundColor: "linear-gradient(to right, #b00000ff, #a93a3aff)", // Custom styling
      stopOnFocus: true, // Prevents dismissal on hover
    }).showToast();
  } finally {
    console.log("From validation done");
  }
});
