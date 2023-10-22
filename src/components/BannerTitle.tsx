import { Link } from "react-router-dom";

interface Title {
  title: string;
}

const BannerTitle: React.FC<Title> = ({ title }) => {
  return (
    <div className="w-full px-6 bg-yellow-800/50">
      <div className="container max-w-screen-xl py-20">
        <div className="flex text-3xl">
          <Link to="/">Home</Link>
          <span className="mx-1">/</span>
          <Link to="/products">Products</Link>
          <span className="mx-1">/</span>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default BannerTitle;
