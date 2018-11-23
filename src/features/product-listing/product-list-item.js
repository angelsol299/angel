import React from "react";
import AddBtn from "./add-btn";

function ProductListItem(props) {
  return (
    <div className="product-list-item">
      <h3>{props.name}</h3>
      <img
        height={100}
        title={props.product.name}
        src={`/products/${props.product.image}`}
        alt="products"
      />
      <div>{props.product.description}</div>
      <div>${props.product.price}</div>
      <div>
        <AddBtn
          cartItem={props.cartItem}
          product={props.product}
          addToCart={props.addToCart}
        />
      </div>
    </div>
  );
}

export default ProductListItem;
