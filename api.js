async function fetchData() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    // Only first 5 products
    showData(data.products);
  } catch (error) {
    console.log(error.message);
  }
}

fetchData();

function showData(products) {
  const list = document.getElementById("list");
  list.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";
   
    
    card.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p><b>Brand:</b> ${product.brand}</p>
      <p><b>Price:</b> ₹${product.price}</p>
      <p><b>Rating:</b> ${product.rating}</p>
    `;

    list.appendChild(card);
  });
}
