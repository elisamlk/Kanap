let params = new URLSearchParams(document.location.search);
let id = params.get("id");
let url = "http://localhost:3000/api/products/" + id;
console.log(url);

ajaxGet(url, function (reponse) {
  let product = JSON.parse(reponse);
  console.log(product);
  let productName = document.getElementById("title");
  productName.innerText = product.name;
  let productPrice = document.getElementById("price");
  productPrice.innerText = product.price;
  let productDescription = document.getElementById("description");
  productDescription.innerText = product.description;
  let selectColor = document.getElementById("colors");
  for (let i in product.colors) {
    let colorOption = document.createElement("option");
    colorOption.textContent = product.colors[i];
    colorOption.setAttribute("value", product.colors[i]);
    selectColor.appendChild(colorOption);
  }
});
