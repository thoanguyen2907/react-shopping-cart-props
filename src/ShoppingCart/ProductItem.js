import React from "react";

export default function ProductItem() {
  return (
    <div classname="card text-center">
      <img
        classname="card-img-hitop"
        src="./img/applephone.jpg"
        alt="phone"
        style={{width: 300, height: 300}}
      />
      <div classname="card-body text-center">
        <h4 classname="card-title">Iphone</h4>
        <p classname="card-text">500</p>
        <button className="btn btn-success" onClick={() => {}}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
