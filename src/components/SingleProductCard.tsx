import React, { ReactNode } from "react";
import { Products } from "../redux/ProductsReducer";
import { formatPrice } from "../utils/FormatPrice";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface Product {
  product: Products;
}

const SingleProductCard: React.FC<Product> = ({ product }) => {
  const navigate = useNavigate();

  const onViewSingleProduct = (id: string) => {
    navigate(`/product/${id}`);
  };

  return (
    <article>
      <div className="relative rounded-lg group transition-all overflow-hidden">
        <img src={product.thumbnail} className="h-56  object-cover w-full" />
        <div className="absolute top-0 left-0 0 w-full h-full bg-black/0 z-10 group-hover:bg-black/60 transition-all">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-sky-500/0 group-hover:bg-sky-500 rounded-full h-10 w-10 flex justify-center items-center transition-all cursor-pointer"
            onClick={() => onViewSingleProduct(product.id)}
          >
            <FiSearch className="text-2xl text-white hidden group-hover:block" />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-3 text-custom-lg">
        <p className="capitalize">{product.title}</p>
        <p className="text-amber-800">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
};

export default SingleProductCard;
