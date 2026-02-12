const fetchAPI = async () => {
  try {
    const data = await fetch("https://dummyjson.com/products");
    const res = await data.json();
    // console.log(res);
    displayData(res.products);
  } catch (error) {
    console.error("Error: ", error);
  }
};
fetchAPI();

const displayData = (products) => {
  // console.log(products);
  const container = document.getElementById("container");
  container.innerHTML = "";

  products.forEach((product) => {
    console.log(product);
    const box = document.createElement("div");
    // box.classList("card")
    box.innerHTML += `
        <img src=${product.thumbnail}>
        <h3>Name: ${product.title}</h3>
        <span>Price: ${product.price}</span>
    `;
    container.appendChild(box)
  });
};
