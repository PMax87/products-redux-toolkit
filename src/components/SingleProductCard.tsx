import React, { ReactNode } from "react";
import { Products } from "../redux/ProductReducer";
import { formatPrice } from "../utils/FormatPrice";

interface Product {
  product: Products;
}

const SingleProductCard: React.FC<Product> = ({ product }) => {
  return (
    <article>
      <img src={product.thumbnail} className="h-56 w-96 object-cover rounded" />
      <div className="flex justify-between mt-3 text-custom-lg">
        <p className="capitalize">{product.title}</p>
        <p className="text-amber-800">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
};

export default SingleProductCard;
