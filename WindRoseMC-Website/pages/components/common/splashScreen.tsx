import React from "react";

import splashScreen from "../../../images/splashScreen.png";
import windRoseLogo from "../../../images/windRoseLogo.png";

const SplashScreen = () => {
  // Background image for the splash screen with navbar on top
  const splashScreenStyle = {
    backgroundImage: `url(${splashScreen.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="flex flex-col justify-start items-center h-[450px] w-full"
      style={splashScreenStyle}
    >
      {/* Navigations - Home, Staff, Store, Rules */}
      <nav className="flex flex-row items-center justify-center w-full h-20 px-64 bg-black bg-opacity-25">
        <div className="flex flex-row items-center justify-start w-2/3">
          <p>
            <a
              href="/"
              className="text-white-200 text-xl font-semibold mr-8 hover:opacity-75"
            >
              Home
            </a>
          </p>
          <p>
            <a
              href="/rules"
              className="text-white-200 text-xl font-semibold mr-8 hover:opacity-75"
            >
              Rules
            </a>
          </p>
          <p>
            <a
              href="/staff"
              className="text-white-200 text-xl font-semibold mr-8 hover:opacity-75"
            >
              Staff
            </a>
          </p>
        </div>
        <div className="flex flex-row items-center justify-end w-1/3">
          {/* Button with link to store circular background color red */}
          {/* <button className="bg-red-100 rounded-full w-32 h-12 text-white text-xl font-semibold hover:bg-red-200 text-center">
            <a href="/store">Store</a>
          </button> */}
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center w-full h-full">
        <img src={windRoseLogo.src} alt="Wind Rose Logo" className="h-[40%]" />
      </div>
    </div>
  );
};

export default SplashScreen;
