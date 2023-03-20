import React from "react";
import {
  Bs0CircleFill,
  BsBriefcaseFill,
  BsCcCircle,
  BsCurrencyExchange,
  BsFillCCircleFill,
  BsFillShieldLockFill,
  BsPeopleFill,
  BsPersonBadgeFill,
} from "react-icons/bs";
import WelcomeSpinner from "../../components/WellComeComponents/WelcomeSpinner";
import "./styles.css";
import cardano from "../../assets/images/cardano.png"
import exagonsoft from "../../assets/images/exagonsoft.png"
import ce from '../../assets/images/cubanenginering.png'

const Maintain = () => {
  const OnSubscrive = () => {

  }

  return (
    <>
      <div className="PendingContainer ">
        <div className="PendingWrapper overflow-y-scroll overflow-x-hidden">
          <div className="flex flex-col items-center w-[100%] h-[100vh] relative ">
            <div className=" flex flex-col md:flex-row justify-center items-center md:mt-0 mt-5 w-[100%] ">
              <h1 className="font-bold text-white md:text-8xl text-4xl flex justify-center text-center px-10">
                UNDER
                <br />
                CONSTRUCTION
              </h1>
              <div className="flex justify-center md:ml-20 ml-0 md:w-[25%] w-[60%]">
                <WelcomeSpinner />
              </div>
            </div>
            <div className="FillBarArea w-[80%] md:w-[100%] flex  flex-col md:flex-row items-center justify-evenly">
              <div className="FillBar flex flex-col items-center justify-center md:mt-2 mt-10 w-[80%] md:w-[40%]">
                <span className="PendingProgressTitle">
                  CONTENT NEARLY READY
                </span>
                <div className="PendingProgressBar">
                  <div className="PendingProgressBarFill"></div>
                </div>
                <div className="PendingProgressBarValuesContainer">
                  <span className="PendingProgressBarValues">0</span>
                  <span className="PendingProgressBarValues">100%</span>
                </div>
              </div>
              <div className="SubcriveArea ">
                <div className="w-full p-8 mt-5 bg-[#7e858d2c] rounded-xl">
                  <div className="text-center mb-4">
                    <h1 className="text-xl text-white">
                      Want to Know More... Subcrive
                    </h1>
                  </div>
                  <div onClick={OnSubscrive} className="flex md:flex-row flex-col md:justify-between  items-center">
                    <input
                      type="email"
                      className="w-full  px-3 mr-0 md:mr-5"
                    ></input>
                    <div className="navBarButton md:mb-0 mb-4 text-center mt-5 md:mt-0 flex justify-between bg-[#4a89e7] py-1 md:px-5 px-10  rounded-md cursor-pointer hover:bg-[#6877ca] hover:text-black">
                      <p className="flex items-center mr-1 text-xl">
                        <BsPeopleFill />
                      </p>
                      <p>Subscrive</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ContactButtons flex  md:flex-row flex-col justify-around content-center items-center mb-5 mt-10">
            <img src={ce} alt='Cuban-Enginering' className=" md:mx-10 mx-0 my-2 md:my-0 md:w-[15%] w-[45%]"/> <img src={exagonsoft} alt='Exagon-Soft' className=" md:mx-10 mx-0 my-2 md:my-0 md:w-[15%] w-[45%]"/> <img src={cardano} alt='Cardano' className="my-2 md:my-0 md:mx-10 mx-0 md:w-[15%] w-[45%]" />
            </div>
            <div className="Footer mt-5 mb-5 flex justify-center items-center font-serif">
              <span className=" text-white flex justify-center text-center items-center md:text-xl text-l">
                <BsFillCCircleFill className=" md:self-auto self-start md:mt-0 mt-1 md:mr-1 mr-0 md:ml-0 ml-0 text-sm"/> 2013 - {new Date().getFullYear()} EXAGON-SOFT all rights
                Reserved{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maintain;
