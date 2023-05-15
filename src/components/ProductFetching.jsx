import React from "react";
import { useGetAllProductsQuery } from "../rtk/services/getProductsApi";
import Product from "./Product";

const ProductFetching = () => {
 
  const { data } = useGetAllProductsQuery();
  const products = data?.products;
  console.log(products);

  const productLooping = products?.map((product) => (
    <Product key={product.id} {...product} />
  ));

  return (
    <div className=" mt-5 sm:mt-10">
      <div className=" flex flex-wrap justify-center gap-5 sm:gap-10">{productLooping}</div>
    </div>
  );
};

export default ProductFetching;
