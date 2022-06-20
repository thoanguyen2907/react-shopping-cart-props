import React, {useState} from "react";
import CartModal from "./CartModal";
import ProductList from "./ProductList";

export default function Cart() {
  const [cartArray, setCartArray] = useState([]);

  const addProduct = (product) => {
    //update the object product
    let updatedProduct = {...product, quantity: 1};
    //update the array of cart
    let newCartArray = [...cartArray, updatedProduct];
    setCartArray(newCartArray);
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
            <i className="fa fa-cart-arrow-down"></i>(0) Cart
          </i>
        </span>
      </div>
      <CartModal cartArray={cartArray} />
      <ProductList addProductProps={addProduct} />
    </div>
  );
}
