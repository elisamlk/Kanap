let params = new URLSearchParams(document.location.search);
let id = params.get("id");
let url = "http://localhost:3000/api/products/" + id;
console.log(url);

ajaxGet(url, function (reponse) {
  let product = JSON.parse(reponse);
  console.log(product);
  displayProductDescription(product);
  addProductToCart(product);
});

function displayProductDescription(product) {
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
}

function addProductToCart(product) {
  let addToCart = document.getElementById("addToCart");
  addToCart.addEventListener("click", function () {
    let cart = [];
    let productInCart = {
      id: product._id,
      name: product.name,
      price: product.price,
      color: product.colors,
    };
    cart.push(productInCart);
    let addProductToCart = JSON.stringify(cart);
    localStorage.setItem("cart", addProductToCart);
  });
}
