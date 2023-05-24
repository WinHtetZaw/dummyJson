import { Button } from "@mantine/core";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Loading from "./Loading";
import CarouselDisplay from "./CarouselDisplay";

const Home = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div>
      <div className="">
        <Link to={'/products/?skip=0&&limit=10'}>
          <Button className=" bg-blue-500">All products</Button>
        </Link>
        <Loading/>
        <CarouselDisplay/>
      </div>
    </div>
  );
};

export default Home;
