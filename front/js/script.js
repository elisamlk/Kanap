ajaxGet("http://localhost:3000/api/products", function (reponse) {
  let products = JSON.parse(reponse);
  console.log(products);
  // Affichage des produits
  let productDisplay = document.getElementById("items");
  products.map((product) => {
    productDisplay.innerHTML += `<a href="./front/html/product.html?id=${product._id}">
    <article>
      <img src="${product.imageUrl}" alt=${product.name}>
      <h3 class="productName">${product.name}</h3>
      <p class="productDescription">${product.description}</p>
    </article>
  </a> `;
  });
});
