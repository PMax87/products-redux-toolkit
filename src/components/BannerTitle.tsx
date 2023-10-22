import { Link } from "react-router-dom";

const BannerTitle = () => {
  return (
    <div className="w-full px-6 bg-yellow-800/50">
      <div className="container max-w-screen-xl py-20">
        <div className="flex">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Products</Link>
        </div>
      </div>
    </div>
  );
};

export default BannerTitle;
