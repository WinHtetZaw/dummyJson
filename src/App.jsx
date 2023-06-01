import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import RootLayout from "./layouts/RootLayout";
import ProductFetching from "./components/ProductFetching";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import SearchProducts from "./components/SearchProducts";
import ProductLayout from "./layouts/ProductLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<ProductLayout />}>
          <Route index element={<ProductFetching />} />
          <Route path="cart" element={<Cart />} />
          <Route path="detail/:id" element={<ProductDetail />} />
          <Route path="search" element={<SearchProducts />} />
        </Route>
      </Route>
    )
  );
  return (
    // <div className="">
    //   <div className="">
    //     {showNavbar && <Navbar />}
    //     <Path />
    //   </div>
    // </div>
    <RouterProvider router={router} />
  );
};

export default App;
