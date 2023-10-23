import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { BannerTitle, SingleProductCarouselImage } from "../components";
import { ProductsRepository } from "../utils/ProductsRepository";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { setSingleProduct } from "../redux/SingleProductReducer";

const SingleProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const getPrdById = async (id: string) => {
    const res = await ProductsRepository.getProductById(id);
    return res.data;
  };

  const singleProduct = useSelector(
    (state: RootState) => state.singleProducts.singleProduct
  );

  const { data, isLoading, error } = useQuery({
    queryKey: ["getProductById"],
    queryFn: () => {
      if (id !== undefined) {
        return getPrdById(id);
      }
    },
  });

  useEffect(() => {
    if (!isLoading && data !== undefined) {
      dispatch(setSingleProduct(data));
    }
  }, [data, isLoading]);

  return (
    <div>
      {!isLoading && data ? (
        <>
          <BannerTitle title={singleProduct.title} />
          <div>
            <SingleProductCarouselImage images={singleProduct.images} />
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default SingleProductPage;
