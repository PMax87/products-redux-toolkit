import { Hero } from "../components";
import HeroImg from "../images/China’s-New-E-commerce-Law-Good-or-Bad-News-for-Business-01.png";
import { Link } from "react-router-dom";
import { ProductsRepository } from "../utils/ProductsRepository";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/index";
import { set3PopularProducts } from "../redux/ProductReducer";

const HomePage = () => {
  const dispatch = useDispatch();
  const top3Products = useSelector(
    (state: RootState) => state.products.products
  );
  const getAllProducts = async () => {
    const res = await ProductsRepository.getAllProducts();
    return res.data.products;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllProducts"],
    queryFn: () => getAllProducts(),
  });

  useEffect(() => {
    if (!isLoading && data !== undefined) {
      dispatch(set3PopularProducts(data));
    }
  }, [data]);

  console.log(top3Products);

  return (
    <>
      <Hero>
        <div>
          <h2 className="text-4xl font-extrabold">
            Craft Your Unique Style <br /> with Our Trendy Products.
          </h2>
          <p className="mt-10 leading-8 text-lg pe-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            praesentium mollitia, sunt voluptatibus numquam ut cupiditate cum
            sit, harum quam, accusamus consectetur doloribus dignissimos velit
            sequi distinctio! Veniam, labore corrupti?
          </p>
          <Link to="/prodcuts" className="mt-10 block">
            <span className="bg-sky-500 text-lg hover:bg-blue-700 text-white font-bold py-4 px-10 rounded transition-colors">
              Shop now
            </span>
          </Link>
        </div>
        <img src={HeroImg} className="rounded lg:block hidden" />
      </Hero>
      <div className="w-full px-6 bg-slate-200 h-[40vh]">
        <div className="container max-w-screen-xl">
          <h3 className="text-4xl font-bold text-center pt-10">
            Featured Products
          </h3>
        </div>
      </div>
    </>
  );
};

export default HomePage;
