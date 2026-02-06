const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  console.log("email", email);
  console.log("Password", password);

  if (!email || !password) {
    throw "Email and Password required";
  }

  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password }),
      withCredentials: true,
    });
    const data = res.json();
    // console.log(data);
    
    return data;
  } catch (error) {
    console.log("Error", error);
  }
});
