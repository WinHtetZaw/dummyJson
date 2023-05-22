import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductFetching from "../components/ProductFetching";
import ProductDetail from "../components/ProductDetail";
import SearchProducts from "../components/SearchProducts";
import Home from "../components/Home";
import Cart from "../components/Cart";
import NotFound from "../components/NotFound";

const Path = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home/>}/>
        {/* <Route path="/p" element={<ProductFetching />} /> */}
        <Route path="/products"  element={<ProductFetching />} />
        <Route path="/products/cart"  element={<Cart />} />
        <Route path="/products/detail/:id" element={<ProductDetail />} />
        <Route path="/products/search" element={<SearchProducts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Path;
