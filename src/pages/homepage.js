import React from "react";
import ProductListing from "../features/product-listing";
import data from "../data/products.json";

function HomePage(props) {
  return (
    <div>
      <h2>Homepage</h2>
      <ProductListing products={data.products} />
    </div>
  );
}

export default HomePage;
