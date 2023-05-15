import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductFetching from "../components/ProductFetching";
import ProductDetail from "../components/ProductDetail";
import SearchProducts from "../components/SearchProducts";

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductFetching />} />
        <Route path="/products/detail/:id" element={<ProductDetail />} />
        <Route path="/products/search/:name" element={<SearchProducts />} />
      </Routes>
    </div>
  );
};

export default Path;
