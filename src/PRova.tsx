import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const url = "https://dummyjson.com/products";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./redux/ProductReducer";
import { RootState } from "./redux";
import { useEffect } from "react";

const PRova = () => {
  const dispatch = useDispatch();

  const getProducts = async () => {
    const res = await axios.get(url);
    return res.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  if (isLoading) {
    return <div>Loading</div>;
  }

  useEffect(() => {
    dispatch(setProducts(data));
  }, []);
};

export default PRova;
