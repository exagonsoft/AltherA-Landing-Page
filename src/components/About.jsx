import React, { useEffect } from "react";
import "./AboutComponents/about.css";
import { GetRandomPicture, about } from "../assets/images/pictures";
import ExAccordion from "../shared/DropDownTexts/ExAcordion";
import { AboutAccordionTexts } from "./AboutComponents/AboutAcordion";

const About = (props) => {
  const { play } = props;

  const VideoControll = () => {
    let videoMetaverse = document.getElementById("vidMetaverse");
    console.log(play);
    if (play) {
      videoMetaverse.play();
    } else {
      videoMetaverse.pause();
    }
  };

  useEffect(() => {
    //VideoControll();
  }, [play]);

  return (
    <section className=" relative z-10">
      <div className="flex w-full flex-wrap justify-center items-center AboutMainContainner relative ">
        <div className="w-full h-max ">
          <div className=" md:min-h-[450px] min-h-[300px] w-full bg-cover bg-repeat-round HorizontDiv"></div>
          <div className="flex justify-between w-full -mt-72">
            <div className="HorizontDivDetail md:mt-10 mt-0 bg-cover w-full flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
              <div className="flex flex-1 md:justify-start  justify-center items-center flex-col md:mr-10 ">
                <img
                  src={GetRandomPicture()}
                  alt="Metaverse"
                  className=" w-10/12"
                />
              </div>
              <div className="flex flex-1 justify-center items-center flex-col md:mr-10 ">
                <h1 className="text-3xl md:text-right text-left items sm:text-5xl text-white text-gradient py-1">
                  Play-to-Earn Game Ecosystem!
                </h1>
                <div className="rounded-xl flex  flex-col justify-center bg-[#8511b5] p-5 text-center items-center  mt-5 bg-gradient-to-l from-[#9c20ced3] to-[#cf90d4c7] shadow-lg shadow-purple-500/50">
                  <h2>
                    At AltherA, we are dedicated to creating a thriving
                    ecosystem for NFT-based play-to-earn gamers. Our mission is
                    to provide a platform that empowers the community to shape
                    the future of NFT-based play-to-earn gaming.
                  </h2>
                </div>
                <div className="flex mt-5 w-full">
                  <ExAccordion textList={AboutAccordionTexts} titleKey="header" contentKey="body"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
