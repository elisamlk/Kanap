// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback) {
  var req = new XMLHttpRequest();
  req.open("GET", url);
  req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 400) {
      // Appelle la fonction callback en lui passant la réponse de la requête
      callback(req.responseText);
    } else {
      console.error(req.status + " " + req.statusText + " " + url);
    }
  });
  req.addEventListener("error", function () {
    console.error("Erreur réseau avec l'URL " + url);
  });
  req.send(null);
}

ajaxGet("http://localhost:3000/api/products", function (reponse) {
  let products = JSON.parse(reponse);
  console.log(products);

  let productDisplay = document.getElementById("items");
  console.log(productDisplay);
  products.map((product) => {
    productDisplay.innerHTML += `<a href="./product.html?id=42">
    <article>
      <img src="${product.imageUrl}" alt=${product.name}>
      <h3 class="productName">${product.name}</h3>
      <p class="productDescription">${product.description}</p>
    </article>
  </a> `;
  });
});
