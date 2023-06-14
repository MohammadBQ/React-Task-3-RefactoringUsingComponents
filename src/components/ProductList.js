import React from "react";
import products from "../products";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const productsList = products.map((book) => (
    <ProductItem key={book.id} {...book} />
  ));
  return <>{productsList} </>;
};

export default ProductList;
