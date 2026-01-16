async function fetchData() {
  const data = await fetch("https://dummyjson.com/products")
    // .then((data) => data.json())
    // .then(console.log)
    // .catch((err) => err.message);
    const res = await data.json()
    console.log(res);
    
    showData(res.products)
}
fetchData()


 function showData(products){
    // console.log(products);
 const list = document.getElementById("list");
    
     products.forEach((product)=>{
        list.innerHTML += product.title
    })
}
showData()