import React, {useState} from "react";
import CartModal from "./CartModal";
import ProductList from "./ProductList";

export default function Cart() {
  const [cartArray, setCartArray] = useState([]);
  const addProduct = (product) => {
    //check the id of product, where it is in the cartArray or not
    let indexProduct = cartArray.findIndex((item) => item.id === product.id);
    let updateQuantityArray = [...cartArray];
    console.log(indexProduct);
    if (indexProduct !== -1) {
      console.log("Product exists already need to update the quantity");
      console.log(indexProduct);
      updateQuantityArray[indexProduct].quantity += 1;
      //find the product is in the array, update the quantity of the product
      setCartArray(updateQuantityArray);
    } else {
      console.log("Product new need to push to the array");
      //update the object product
      let updatedProduct = {...product, quantity: 1};
      updateQuantityArray = [...cartArray, updatedProduct];
      setCartArray(updateQuantityArray);
    }
    //update the array of cart
  };

  const removeProduct = (id) => {
    let updatedProductArray = [...cartArray];
    let indexProduct = updatedProductArray.findIndex((cartItem) => {
      return cartItem.id === id;
    });
    if (indexProduct !== -1) {
      updatedProductArray.splice(indexProduct, 1);
    }
    setCartArray(updatedProductArray);
  };
  console.log(cartArray);
  //calculate the total of something
  const calculateTotalQuantity = (cartArray) => {
    return cartArray.reduce((accummulator, current) => {
      return (accummulator += current.quantity);
    }, 0);
  };
  return (
    <div className="container-fluid">
      <h3 className="text-center">Shopping Cart</h3>
      <div className="text-right">
        <span
          style={{width: 17, cursor: "pointer"}}
          data-toggle="modal"
          data-target="#modelId"
        >
          <i className="fa fa-cart mr-5">
            <i className="fa fa-cart-arrow-down"></i>(
            {calculateTotalQuantity(cartArray)}) Cart
          </i>
        </span>
      </div>
      <CartModal cartArrayProps={cartArray} removeProduct={removeProduct} />
      <ProductList addProductProps={addProduct} />
    </div>
  );
}
//Receive a task to create a new feature
// CREATING 3 MORE COLUMNS: QUANITY, PRICE, TOTAL PRICE:  PRICE * QUANTITY
