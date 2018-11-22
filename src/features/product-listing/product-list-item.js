import React from "react";

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
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductListItem;