import React from "react";
import LogoAlthera from "../../assets/images/LogoAlthera.webp";
import LogoAltheraSpinner01 from "../../assets/images/LogoAltheraSpinner01.webp";
import LogoAltheraSpinner02 from "../../assets/images/LogoAltheraSpinner02.webp";
import LogoAltheraSpinner05 from "../../assets/images/LogoAltheraSpinner05.webp";

const WelcomeSpinner = () => {
  return (
    <div className="flex flex-col justify-center relative mt-8  md:w-[60%] w-[70%]">
      <div className="flex justify-center relative z-[7]">
        <img
          src={LogoAlthera}
          alt="Logo Spinner"
          className=" max-w-[100%] relative "
        />
      </div>
      <div className="flex justify-center -mt-[96%] relative z-[6] md:flex">
        <img
          src={LogoAltheraSpinner01}
          alt="Logo Spinner"
          className="SpinClockBack opacity-80 max-w-[100%] relative "
        />
      </div>
      <div className="flex justify-center -mt-[96%] relative z-[5] md:flex">
        <img
          src={LogoAltheraSpinner02}
          alt="Logo Spinner"
          className="SpinClockWise opacity-80  max-w-[100%] relative "
        />
      </div>
      <div className="flex justify-center -mt-[96%] relative z-[3] md:flex">
        <img
          src={LogoAltheraSpinner05}
          alt="Logo Spinner"
          className="SpaceSpinClockWise opacity-90  max-w-[90%] relative "
        />
      </div>
      <div className="flex justify-center -mt-[96%] relative z-[3] md:flex ">
        <img
          src={LogoAltheraSpinner05}
          alt="Logo Spinner"
          className="SpaceSpinClockBack opacity-90 md:max-w-[125%] max-w-[100%] relative "
        />
      </div>
    </div>
  );
};

export default WelcomeSpinner;
