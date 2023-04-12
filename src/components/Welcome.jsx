import React from "react";
import { FaBook } from "react-icons/fa";
import { BsBriefcaseFill, BsCurrencyExchange, BsFillShieldLockFill, BsPeopleFill, BsPersonBadgeFill } from "react-icons/bs";

import WelcomeSpinner from "./WellComeComponents/WelcomeSpinner";

const header = "token_header";
let date = new Date();
const payload = {
  user_id: 55,
  user_name: 'Alvaro',
  expire_Date: date.setTime(date.getTime() + 12 * 60 * 60 * 1000),
};
const serial = Math.random() * 1000;

const testValue = () => {
  let header_token = btoa(header);
  let bufferString = JSON.stringify(payload);
  let encodedAccessToken = btoa(bufferString);
  let serial_token = btoa(serial);

  let object_tt = JSON.parse(bufferString);

  return header_token + "." + encodedAccessToken + "." + serial_token;
};

const Welcome = () => {
  return (
    <section>
      <div className="flex w-full flex-wrap justify-center items-center">
        <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
          <div className="FadeIn flex flex-1 md:justify-start  justify-center items-center flex-col md:mr-10 ">
            <h1 className="text-3xl items sm:text-5xl text-white text-gradient py-1">
              New crypto <br /> Ecosystem Philosophy
            </h1>
            <p className="normalText text-justify mt-5 text-white font-light md:w-11/12 w-[85%] text-base">
              A new philosophy, a new beginning, a community based and community
              supported economic model, a Metaverse where we are all winners,
              and we all own.
            </p>
            <div className="w-full p-8 mt-10 bg-[#0059ad2c] rounded-xl">
              <div className="text-center mb-4">
                <h1 className="text-xl text-white">What are we Offering</h1>
              </div>
              <div className="flex md:flex-row flex-col md:justify-between justify-center items-center">
                <div className="rounded-xl bg-[#00b1d7] pw-4 py-5 text-center items-center h-1/2 w-3/4 md:mb-0 mb-2 md:w-1/5 bg-gradient-to-l from-[#00b0d7d3] to-[#00b0d7c7] shadow-lg shadow-cyan-500/50">
                  <p className="normalText flex justify-center text-3xl mb-2 font-extrabold"><BsFillShieldLockFill /></p>
                  <p>Secure</p>
                </div>
                <div className="rounded-xl flex  flex-col justify-center bg-[#8511b5] pw-4 py-5 text-center items-center h-1/2 w-3/4 md:mb-0 mb-2 md:w-1/5 bg-gradient-to-l from-[#9c20ced3] to-[#cf90d4c7] shadow-lg shadow-purple-500/50">
                  <p className="normalText text-3xl mb-2 font-extrabold"><BsBriefcaseFill /></p>
                  <p>Probity</p>
                </div>
                <div className="rounded-xl flex  flex-col justify-center bg-[#08b7fd] pw-4 py-5 text-center items-center h-1/2 w-3/4 md:mb-0 mb-2 md:w-1/5 bg-gradient-to-l from-[#0599d3d3] to-[#0599d3c7] shadow-lg shadow-teal-500/50">
                  <p className="normalText text-3xl mb-2 font-extrabold"><BsPersonBadgeFill /></p>
                  <p>Engage</p>
                </div>
                <div className="rounded-xl flex  flex-col justify-center bg-[#0a6eff] pw-4 py-5 text-center items-center h-1/2 w-3/4 md:mb-0 mb-2 md:w-1/5 bg-gradient-to-l from-[#0a6effd3] to-[#0a6effc7] shadow-lg shadow-blue-500/50">
                  <p className="normalText text-3xl mb-2 font-extrabold"><BsCurrencyExchange /></p>
                  <p>Earnings</p>
                </div>
              </div>
            </div>
            <div className="w-full px-10 flex md:flex-row flex-col mt-10 justify-between">
              <div className="navBarButton md:mb-0 mb-4 text-center flex justify-center bg-[#4a89e7] py-4 px-10  rounded-md cursor-pointer hover:bg-[#6877ca] hover:text-black">
                <p className="flex items-center mr-1 text-xl">
                  <BsPeopleFill />
                </p>
                <p>Join Community</p>
              </div>
              <div className="navBarButton md:mb-0 mb-4 text-center flex justify-center bg-[#4a89e7] py-4 px-10  rounded-md cursor-pointer hover:bg-[#6877ca] hover:text-black">
                <p className="flex items-center mr-1 text-xl">
                  <FaBook />
                </p>
                <p>White Paper</p>
              </div>
            </div>
          </div>
          <div className="FadeIn flex flex-1 justify-center items-center flex-col md:mr-10 ">
            <WelcomeSpinner />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
