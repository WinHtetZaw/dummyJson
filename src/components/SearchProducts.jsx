import React from "react";
import { useGetSearchProductQuery } from "../rtk/services/searchApi";
import { useParams, useSearchParams } from "react-router-dom";
import Product from "./Product";
import Loading from "./Loading";

const SearchProducts = () => {
  const [searchParams] = useSearchParams()
  console.log(searchParams.get("q"))
  const name  = searchParams.get("q")
  // console.log(name);
  const { data, isLoading, isSuccess } = useGetSearchProductQuery(name);
  const products = data?.products;
  isSuccess && console.log(products);

  const productLooping = products?.map((product) => (
    <Product key={product.id} {...product} />
  ));

  if(isLoading) {
    return <Loading/>
  }

  return (
    <div className=" mb-5 mt-24">
      <div className="  flex flex-wrap justify-center gap-5 sm:gap-10">
        {productLooping}
      </div>
    </div>
  );
};

export default SearchProducts;
