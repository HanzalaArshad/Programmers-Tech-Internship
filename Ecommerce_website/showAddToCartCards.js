import products from "./api/products.json";
import { fetchQualityFromCartLS } from "./fetchQualityFromCartLS";
import { getCartProductFromLS } from "./getCartProduct";
import { incrementDecrement } from "./incrementDecrement";
import { removeProductFromCart } from "./removeProductFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts=getCartProductFromLS();


let filterProducts=products.filter((curprod)=>{
 
  return cartProducts.some((currelem)=> currelem.id=== curprod.id);

});

console.log(filterProducts);


const cartElement= document.querySelector("#productCartContainer");
const templateContainer=document.querySelector("#productCartTemplate");



const showCartProduct = () => {
  filterProducts.forEach((curProd) => {
    const { category, id, image, name, stock, price } = curProd;

    let productClone = document.importNode(templateContainer.content, true);

    const LSActualData=fetchQualityFromCartLS(id,price);


    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".category").textContent=category;
    productClone.querySelector(".productName").textContent=name;
    productClone.querySelector(".productImage").src=image;
    productClone.querySelector(".productQuantity").textContent=LSActualData.quantity;
    productClone.querySelector(".productPrice").textContent=LSActualData.price;

    productClone.querySelector(".stockElement").addEventListener("click",(event)=>{
      incrementDecrement(event,id,stock,price)
   } );
    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => removeProductFromCart(id));

    // productClone.querySelector(".productImage").alt=name;

    cartElement.appendChild(productClone);
  });
}

showCartProduct();


updateCartProductTotal();