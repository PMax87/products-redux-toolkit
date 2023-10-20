import React from "react";
import { RootState } from "./redux/index";
import { useSelector, useDispatch } from "react-redux";
import { setNavbarOpen } from "./redux/NavbarReducer";

const Pippo = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const navbarOpen = useSelector(
    (state: RootState) => state.navbar.isNavbarOpen
  );

  console.log(products);

  const onOpenNavbar = () => {
    dispatch(setNavbarOpen());
  };

  console.log(navbarOpen);

  return (
    <div>
      <button type="button" onClick={() => onOpenNavbar()}></button>
    </div>
  );
};

export default Pippo;
