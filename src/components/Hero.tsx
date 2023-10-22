import React, { ReactNode } from "react";

const Hero: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="w-full px-6 md:px-20 lg:px-6">
      <div className="container max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-80px)] items-center">
        {children}
      </div>
    </div>
  );
};

export default Hero;
