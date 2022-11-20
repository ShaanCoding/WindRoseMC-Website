import React from "react";
import windRoseBannerImage from "../../../images/windRoseBanner.png";
import Container from "./container";

const IntroductionBlock = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-8">
          <h1 className="text-red-100 font-bold text-2xl mb-4">
            Welcome To Windrose - #1 Minecraft Server
          </h1>
          <p className="text-white-100 text-lg mb-4">
            Welcome to WindroseMC! Our newly opened Minecraft server is
            semi-vanilla, friendly, and grief-free. You can focus on building up
            the community and player economy through shops. Claim protect and
            keep inventory are both enabled. Come join us and have some fun!
          </p>
          <h1 className="text-white text-2xl mb-4 font-minecraft font-bold">
            Bonus Vote Rewards
          </h1>
          <p className="text-white-100 text-sm mb-4 font-bold font-minecraft">
            We just launched! Please vote for us to help us grow and receive
            awesome in-game rewards!
          </p>
        </div>

        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:ml-8">
          <img src={windRoseBannerImage.src} alt="Banner Image" />
        </div>
      </div>
    </Container>
  );
};

export default IntroductionBlock;
