import Logo from "../images/store_869636.png";
import { LinksComponent, SocialComponet } from "../utils/links";

const Navbar = () => {
  return (
    <nav className="h-[60px] shadow-lg px-6 lg:px-10 lg:h-[80px]">
      <div className="container max-w-screen-xl lg:grid lg:grid-cols-3 items-center h-full flex justify-between">
        <div className="flex items-center">
          <img
            src={Logo}
            className="h-[40px] w-[40px] lg:h-[60px] lg:w-[60px] me-2 lg:me-5"
          />
          <h3 className="text-lg lg:text-xl font-bold capitalize">
            Products store
          </h3>
        </div>
        <div className="justify-self-center hidden lg:block">
          <LinksComponent />
        </div>
        <div className="justify-self-end hidden lg:block">
          <SocialComponet />
        </div>
        <div className="lg:hidden block">
          <p>Pippo</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
