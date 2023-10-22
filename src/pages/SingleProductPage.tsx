import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { BannerTitle } from "../components";
import { ProductsRepository } from "../utils/ProductsRepository";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";

const SingleProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const getPrdById = async (id: string) => {
    const res = await ProductsRepository.getProductById(id);
    return res.data;
  };

  const singleProduct = useSelector(
    (state: RootState) => state.products.products
  );

  const { data, isLoading, error } = useQuery({
    queryKey: ["getProductById"],
    queryFn: () => {
      if (id !== undefined) {
        return getPrdById(id);
      }
    },
  });

  console.log(data);

  return <div></div>;
};

export default SingleProductPage;
