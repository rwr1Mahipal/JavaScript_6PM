const form = document.getElementById("form2");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("All value required");
    return;
  }

  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      withCredentials: true,
    });
    const data = await res.json();
    if(res.ok){
        isAuth=true;
    }
    return data;
  } catch (error) {
    console.log(error.message || "Login failed");
  }
});
