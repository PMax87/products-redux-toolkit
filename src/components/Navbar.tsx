import Logo from "../images/store_869636.png";
import { LinksComponent, SocialComponet } from "../utils/links";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RootState } from "../redux/index";
import { useSelector, useDispatch } from "react-redux";
import { setNavbarClose, setNavbarOpen } from "../redux/NavbarReducer";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector(
    (state: RootState) => state.navbar.isSidebarOpen
  );

  const onOpenSidebar = () => {
    dispatch(setNavbarOpen());
  };

  const onCloseSidebar = () => {
    dispatch(setNavbarClose());
  };

  return (
    <nav className="h-[60px] shadow-lg px-6 lg:px-10 md:h-[80px]">
      <div className="container max-w-screen-xl md:grid grid-cols-3 items-center h-full flex justify-between">
        <div className="flex gap-5 items-center">
          <img
            src={Logo}
            className="h-[40px] w-[40px] lg:h-[60px] lg:w-[60px]"
            alt="Logo Product Store"
          />
          <h3 className="text-lg lg:text-2xl capitalize font-bold">
            Products store
          </h3>
        </div>
        <LinksComponent classLink={"navbar"} />
        <SocialComponet classLink={"navbar"} />
        <div className="md:hidden flex">
          <button type="button" onClick={onOpenSidebar}>
            <HiOutlineMenuAlt3 className="text-3xl" />
          </button>
        </div>
      </div>
      <div
        className={`transition-transform fixed top-0 left-0 h-full w-full z-10 bg-white ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-[60px] shadow-lg px-6">
          <div className="w-full h-full flex items-center justify-between">
            <div className="flex gap-5 items-center">
              <img
                src={Logo}
                className="h-[40px] w-[40px] lg:h-[60px] lg:w-[60px]"
                alt="Logo Product Store"
              />
              <h3 className="text-xl md:text-2xl capitalize font-bold">
                Products store
              </h3>
            </div>
            <button type="button" onClick={onCloseSidebar}>
              <AiOutlineClose className="text-3xl" />
            </button>
          </div>
        </div>
        <LinksComponent classLink="sidebar" />
        <SocialComponet classLink="sidebar" />
      </div>
    </nav>
  );
};

export default Navbar;
