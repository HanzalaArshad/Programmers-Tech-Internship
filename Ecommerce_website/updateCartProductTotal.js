import { getCartProductFromLS } from "./getCartProduct"

export const updateCartProductTotal =()=>{
  let productSubTotal = document.querySelector(".productSubTotal");
  let productFinalTotal = document.querySelector(".productFinalTotal");


  let localCartProducts=getCartProductFromLS();
  let initialValue=0;

  let totalProductPrice = localCartProducts.reduce((accum, curElem) => {
    let productPrice = parseInt(curElem.price) || 0;
    return accum + productPrice;
  }, initialValue);


  // console.log(totalProductPrice);
  productSubTotal.textContent = `PKR ${totalProductPrice}`;
  productFinalTotal.textContent = `PKR ${totalProductPrice + 50}`;



};