import React from "react";
import { RootState } from "./redux/index";
import { useSelector } from "react-redux";

const Pippo = () => {
  const products = useSelector((state: RootState) => state.products.products);

  console.log(products);

  return <div>Pippo</div>;
};

export default Pippo;
