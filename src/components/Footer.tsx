const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="w-full px-6 bg-zinc-800">
      <div className="container max-w-screen-xl py-8">
        <p className="text-white text-center">
          &copy; {date}{" "}
          <span className="font-medium text-yellow-600/50">Products store</span>{" "}
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
