import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import {
  BannerTitle,
  Loading,
  SingleProductCarouselImage,
} from "../components";
import { ProductsRepository } from "../utils/ProductsRepository";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { setSingleProduct } from "../redux/SingleProductReducer";
import { formatPrice } from "../utils/FormatPrice";

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

  const { data, isFetching } = useQuery({
    queryKey: ["getProductById"],
    queryFn: () => {
      if (id !== undefined) {
        return getPrdById(id);
      }
    },
  });

  useEffect(() => {
    if (!isFetching && data !== undefined) {
      dispatch(setSingleProduct(data));
    }
  }, [data, dispatch, id, isFetching]);

  return (
    <div>
      {!isFetching && data ? (
        <>
          <BannerTitle title={singleProduct.title} />
          <div className="w-full px-6">
            <div className="container max-w-screen-xl">
              <div className="grid grid-cols-2 my-7">
                <SingleProductCarouselImage
                  images={singleProduct.images}
                  title={singleProduct.title}
                />
                <div className="flex flex-col">
                  <h3>{singleProduct.title}</h3>
                  <p>{singleProduct.rating}</p>
                  <p>{formatPrice(singleProduct.price)}</p>
                  <h3>{singleProduct.description}</h3>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;
