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
import { starGenerator } from "../utils/StarGenerator";

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
              <div className="grid grid-cols-2 my-20 gap-20">
                <SingleProductCarouselImage
                  images={singleProduct.images}
                  title={singleProduct.title}
                />
                <div className="flex flex-col justify-center">
                  <h3 className="text-4xl font-bold">{singleProduct.title}</h3>
                  <div className="flex text-lg mt-3 mb-2 gap-1">
                    {starGenerator(singleProduct.rating)}
                  </div>
                  <p className="text-xl font-bold text-amber-800">
                    {formatPrice(singleProduct.price)}
                  </p>
                  <p className="w-3/4 mt-5 leading-relaxed">
                    {singleProduct.description}
                  </p>
                  <p className="capitalize mt-5">
                    <span className="font-bold">Category:</span>{" "}
                    {singleProduct.category}
                  </p>
                  <p className="capitalize mt-5">
                    <span className="font-bold">Brand:</span>{" "}
                    {singleProduct.brand}
                  </p>
                  <p className="capitalize mt-5">
                    <span className="font-bold">In stock:</span>{" "}
                    {singleProduct.stock}
                  </p>
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
