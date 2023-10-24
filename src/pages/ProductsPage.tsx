import React, { useEffect } from "react";
import { Hero, SingleProductCard } from "../components";
import { ProductsRepository } from "../utils/ProductsRepository";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/index";
import {
  onChangeSkipNumber,
  setProductsByPage,
} from "../redux/FilterProductsReducer";

const ProductsPage = () => {
  const dispatch = useDispatch();

  const page = Array.from({ length: 10 }, (_, i) => [i + 1]);

  const skipProducts = useSelector(
    (state: RootState) => state.filterProducts.skip
  );

  const products = useSelector(
    (state: RootState) => state.filterProducts.products
  );

  const getProductsByPage = async () => {
    const res = await ProductsRepository.getProductsPerPage(skipProducts);
    return res.data;
  };

  const { data, isFetching } = useQuery({
    queryKey: ["getPrdByPage", skipProducts],
    queryFn: getProductsByPage,
  });

  const onChangePage = (skipNumber: number) => {
    dispatch(onChangeSkipNumber(skipNumber));
  };

  useEffect(() => {
    if (!isFetching && data) {
      dispatch(setProductsByPage(data.products));
      console.log(products);
    }
  }, [data, isFetching, dispatch, skipProducts, products]);

  return (
    <>
      <Hero>
        <p>Ti spezzo</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-12 gap-16">
          {data &&
            products.map((product) => {
              console.log(product);
              return <SingleProductCard key={product.id} product={product} />;
            })}
        </div>
      </Hero>
      <div className="flex">
        {page.map((page, id) => (
          <div key={id} onClick={() => onChangePage(id * 10)}>
            {page}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
