import React from "react";
import "./style.css";

const LoadingButton = () => {
  return (
    <div className="navBarButton min-w-[128px] max-w-[128px] w-32 !max-h-8 !min-h-[32px] h-8 md:mb-0 mb-4 text-center mt-5 md:mt-0 flex justify-center bg-[#4a89e7] py-1 md:px-5 px-10  rounded-md cursor-pointer hover:bg-[#6877ca] hover:text-black">
      <div className="LoginSpinLoader"></div>
    </div>
  );
};

export default LoadingButton;
