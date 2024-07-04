import { getCartProductFromLS } from "./getCartProduct";
import { ShowToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProductFromCart = (id) => {
  // Fetch the cart products from local storage
  let cartProducts = getCartProductFromLS();

  // Filter out the product with the given id
  cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

  // Save the updated cart back to local storage
  localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

  // Remove the product's div from the DOM
  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove();

    ShowToast("delete",id);


  }

  // Update the cart value
  updateCartValue(cartProducts);
};
