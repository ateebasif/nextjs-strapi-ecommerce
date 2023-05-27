import React from "react";

import ProductsList from "@/components/Products";

import { fetchProducts } from "@/apiServices/index";

const Products = (props) => {
  const { products, pagination } = props;
  console.log("products", products);
  console.log("pagination", pagination);

  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
};

export default Products;

export const getServerSideProps = async () => {
  let { data: products } = await fetchProducts();

  console.log("products", products);
  return {
    props: { products: products.data, pagination: products.meta.pagination },
  };
};
