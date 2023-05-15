import React from "react";
import { useGetSearchProductQuery } from "../rtk/services/searchApi";
import { useParams } from "react-router-dom";
import Product from "./Product";

const SearchProducts = () => {
  const { name } = useParams();
  console.log(name);
  const { data, isLoading, isSuccess } = useGetSearchProductQuery(name);
  const products = data?.products;
  isSuccess && console.log(products);

  const productLooping = products?.map((product) => (
    <Product key={product.id} {...product} />
  ));

  return (
    <div className="  my-5 sm:my-10">
      <div className="  flex flex-wrap justify-center gap-5 sm:gap-10">
        {productLooping}
      </div>
    </div>
  );
};

export default SearchProducts;
