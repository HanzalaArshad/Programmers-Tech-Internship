
// -----------------------------------------------------
// to get the cart data from localStorage
// to update the cart value and also to get the data always ready from localStorage

import { getCartProductFromLS } from "./getCartProduct";
import { ShowToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

// --------------------------------------------------------
getCartProductFromLS();

// -----------------------------------------------------
// to add the data into localStorage
// --------------------------------------------------------
export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProdElem = document.querySelector(`#card${id}`);
  let quantity = currentProdElem.querySelector(".productQuantity").innerText;
  let price = currentProdElem.querySelector(".productPrice").innerText;
  //   console.log(quantity, price);
  price = price.replace("PKR", "");

  let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  console.log(existingProd);

  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updatedCart = { id, quantity, price };

    updatedCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });
    // console.log(updatedCart);

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));


    ShowToast("add",id);
    
  }

  if (existingProd) {
    // alert("bhai duplicate hai");
    return false;
  }

  //todo Don't Forget To LIKE SHARE & SUBSCRIBE TO THAPA TECHNCIAL YOUTUBE CHANNEL 👉 https://www.youtube.com/thapatechnical

  price = Number(price * quantity);
  quantity = Number(quantity);

  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));


  updateCartValue(arrLocalStorageProduct);

  ShowToast("add",id);


  
};