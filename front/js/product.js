ajaxGet("http://localhost:3000/api/products", function (reponse) {
  let products = JSON.parse(reponse);
  console.log(products);
  // Affichage des caractéristiques du produit séléctionné
  // A refaire et récupérer les caractéristiques d'un seul produit avec l'ID
  let params = new URLSearchParams(document.location.search);
  let id = params.get("id");
  let productName = document.getElementById("title");
  let productPrice = document.getElementById("price");
  let productDescription = document.getElementById("description");
  let selectColor = document.getElementById("colors");
  console.log(selectColor);
  for (let i in products) {
    let productId = products[i]._id;
    if (productId == id) {
      console.log(products[i].name);
      productName.innerText = products[i].name;
      productPrice.innerText = products[i].price;
      productDescription.innerText = products[i].description;
      for (let j in products[i].colors) {
        console.log(products[i].colors[j]);
        selectColor.value = products[i].colors[j];
      }
    }
  }
});
