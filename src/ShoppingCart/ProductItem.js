import React from "react";

export default function ProductItem(props) {
  //console.log(props)
  let{productProps} = props;
  return (
    <div className="card text-center">
      <img
        className="card-img-hitop"
        src={productProps.img}
        alt={productProps.name}
        style={{width: 300, height: 300}}
      />
      <div className="card-body text-center">
        <h4 className="card-title">{productProps.name}</h4>
        <p className="card-text">{productProps.price}</p>
        <button className="btn btn-success" onClick={() => {props.addProductProps(productProps);}}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
