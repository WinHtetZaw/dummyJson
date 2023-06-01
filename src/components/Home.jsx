import { Button } from "@mantine/core";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Loading from "./Loading";
import CarouselDisplay from "./CarouselDisplay";
import ProductFetching from "./ProductFetching";

const Home = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div>
      <div className="">
        <ProductFetching/>
        {/* <Loading/> */}
        {/* <CarouselDisplay/> */}
      </div>
    </div>
  );
};

export default Home;
