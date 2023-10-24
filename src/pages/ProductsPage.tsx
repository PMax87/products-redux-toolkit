import React, { useEffect } from "react";
import { SingleProductCard } from "../components";
import { ProductsRepository } from "../utils/ProductsRepository";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/index";
import {
  changeLimitNumber,
  changeSkipNumber,
  setProductsByPage,
  setTotalProducts,
} from "../redux/FilterProductsReducer";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.filterProducts.products
  );
  const totalProducts = useSelector(
    (state: RootState) => state.filterProducts.total
  );
  const skipProducts = useSelector(
    (state: RootState) => state.filterProducts.skip
  );
  const limitNumber = useSelector(
    (state: RootState) => state.filterProducts.limit
  );

  const getProductsByPage = async () => {
    const res = await ProductsRepository.getProductsPerPage(
      skipProducts,
      limitNumber
    );
    return res.data;
  };

  const totalPage = totalProducts / limitNumber;

  const page = Array.from({ length: totalPage }, (_, i) => [i + 1]);

  const { data, isFetching } = useQuery({
    queryKey: ["getPrdByPage", skipProducts, limitNumber],
    queryFn: getProductsByPage,
  });

  const onChangeSkipNumber = (skipNumber: number) => {
    let numberToSkip = 0;
    if (limitNumber === 10 || limitNumber === 20) {
      numberToSkip = skipNumber * limitNumber;
      dispatch(changeSkipNumber(numberToSkip));
    } else {
      numberToSkip = skipNumber * limitNumber;
      dispatch(changeSkipNumber(numberToSkip));
    }
  };

  const onChangeLimitNumber = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value);
    dispatch(changeLimitNumber(value));
  };

  useEffect(() => {
    if (!isFetching && data) {
      dispatch(setProductsByPage(data.products));
      dispatch(setTotalProducts(data.total));
    }
  }, [data, isFetching, dispatch, skipProducts, products, limitNumber]);

  return (
    <>
      <p>Ti spezzo</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-12 gap-16">
        {data &&
          products.map((product) => {
            return <SingleProductCard key={product.id} product={product} />;
          })}
      </div>
      <div className="flex">
        {page.map((page, id) => (
          <div key={id} onClick={() => onChangeSkipNumber(id)}>
            {page}
          </div>
        ))}
        <select name="" id="" onChange={(e) => onChangeLimitNumber(e)}>
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="20">20</option>
        </select>
      </div>
    </>
  );
};

export default ProductsPage;
