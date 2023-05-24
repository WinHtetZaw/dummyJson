
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements, useLocation } from "react-router-dom";
import Home from "./components/Home";
import RootLayout from "./layouts/RootLayout";
import ProductFetching from "./components/ProductFetching";

const App = () => {
;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/products"  element={<ProductFetching/>} />

      </Route>
    )
  )
  return (
    // <div className="">
    //   <div className="">
    //     {showNavbar && <Navbar />}
    //     <Path />
    //   </div>
    // </div>
    <RouterProvider router={router}/>
  );
};

export default App;
