import { useGetPaginateProductsQuery } from "../rtk/services/getProductsApi";
import Product from "./Product";
import { useSearchParams } from "react-router-dom";
import Paginate from "./Paginate";
import Loading from "./Loading";

const ProductFetching = () => {
  // const { data } = useGetAllProductsQuery();

  const [searchParams] = useSearchParams();
  // console.log(searchParams);
  const skip = searchParams.get("skip");
  const limit = searchParams.get("limit");

  const {
    data: productPaginate,
    isSuccess,
    isLoading,
  } = useGetPaginateProductsQuery({ skip, limit });

  const productLoopingPaginate = productPaginate?.products?.map((product) => (
    <Product key={product.id} {...product} />
  ));

  isSuccess && console.log(productLoopingPaginate);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" mt-24">
      <div className=" mt-5 sm:mt-10">
        <div className=" flex flex-wrap justify-center gap-5 sm:gap-10">
          {/* {hasParams ? productLoopingPaginate : productLooping}  */}
          {productLoopingPaginate}
        </div>
      </div>
      <Paginate />
    </div>
  );
};

export default ProductFetching;
