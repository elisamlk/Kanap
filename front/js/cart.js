//  <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
// <div class="cart__item__img">
//   <img src="../images/product01.jpg" alt="Photographie d'un canapé">
// </div>
// <div class="cart__item__content">
//   <div class="cart__item__content__description">
//     <h2>Nom du produit</h2>
//     <p>Vert</p>
//     <p>42,00 €</p>
//   </div>
//   <div class="cart__item__content__settings">
//     <div class="cart__item__content__settings__quantity">
//       <p>Qté : </p>
//       <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
//     </div>
//     <div class="cart__item__content__settings__delete">
//       <p class="deleteItem">Supprimer</p>
//     </div>
//   </div>
// </div>
// </article>

let cartItems = document.getElementById("cart__items");

// Fonction qui permet de récupérer le panier

let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

console.log(cart);
for (let i in cart) {
    console.log(cart[i])
  cartItems.innerHTML += `<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
    <div class="cart__item__img">
      <img src="../images/product01.jpg" alt="Photographie d'un canapé">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>${cart[i].name}</h2>
        <p>Vert</p>
        <p>${cart[i].price} €</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
        </div>
      </div>
    </div>
    </article>
    `;
}
