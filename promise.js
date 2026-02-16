const fetchData = new Promise((reslove, reject) => {
  console.log("Data loading...");

  setTimeout(() => {
    let success = false;
    if (success) {
      reslove("Api fetch successfully");
    } else {
      reject("Error while fetching API");
    }
  }, 3000);
});

fetchData
.then((res) => console.log(res))
.catch((err) => console.log(err))
.finally((msg)=>console.log(msg, "API calling done"))
