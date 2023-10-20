import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const url = "https://dummyjson.com/products";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./redux/ProductReducer";
import { useEffect } from "react";
import { RootState } from "./redux/index";

const PRova = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);

  const getProducts = async () => {
    const res = await axios.get(url);
    return res.data.products;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  useEffect(() => {
    if (!isLoading) {
      dispatch(setProducts(data));
    }
  }, [data]);

  if (isLoading && products) {
    return <div>Loading</div>;
  }

  return (
    <div>
      {products.map((prd) => {
        return <img key={prd.id} src={prd.thumbnail} />;
      })}
    </div>
  );
};

export default PRova;
