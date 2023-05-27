import React from "react";

import ProductsList from "@/components/Products";

import { fetchProducts } from "@/apiServices/index";

const Products = (props) => {
  const { products, pagination } = props;


  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
};

export default Products;

export const getServerSideProps = async () => {
  let { data: products } = await fetchProducts();

  return {
    props: { products: products.data, pagination: products.meta.pagination },
  };
};
