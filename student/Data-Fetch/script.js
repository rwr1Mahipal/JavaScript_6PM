async function fetchData() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    showData(data.products);
    // console.log(data.products)
  } catch (error) {
    console.log(error.message);
  }
}

function showData(products){
console.log(products)
const container = document.getElementById("container");
container.innerHTML = ''

const sliceData = products?.slice(0,5)
sliceData?.map((ele) =>{
  const box = document.createElement("div");

   box.innerHTML += `
   <img src="${ele.thumbnail}" alt="${ele.title}">
    <h1>${ele.title} </h1>
   `
 container.appendChild(box)
})

}


showData()
fetchData()
