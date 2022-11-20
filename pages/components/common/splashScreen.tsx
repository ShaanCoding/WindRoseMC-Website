import Link from "next/link";
import React from "react";

import splashScreen from "../../../images/splashScreen.png";
import windRoseLogo from "../../../images/windRoseLogo.png";

const SplashScreen = () => {
  // Background image for the splash screen with navbar on top
  const splashScreenStyle = {
    backgroundImage: `url(${splashScreen.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "0center",
  };

  return (
    <div
      className="flex flex-col justify-start items-center h-[450px] w-full"
      style={splashScreenStyle}
    >
      {/* Navigations - Home, Staff, Store, Rules */}
      <nav className="flex flex-row items-center justify-center w-full h-20 bg-black bg-opacity-25">
        <p>
          <Link
            href="/"
            className="text-white-200 text-xl font-semibold mr-8 hover:opacity-75"
          >
            Home
          </Link>
        </p>
        <p>
          <Link
            href="/rules"
            className="text-white-200 text-xl font-semibold mr-8 hover:opacity-75"
          >
            Rules
          </Link>
        </p>
        <p>
          <Link
            href="/staff"
            className="text-white-200 text-xl font-semibold mr-8 hover:opacity-75"
          >
            Staff
          </Link>
        </p>
      </nav>

      <div className="flex flex-col items-center justify-center w-full h-full">
        <img src={windRoseLogo.src} alt="Wind Rose Logo" className="h-[40%]" />
      </div>
    </div>
  );
};

export default SplashScreen;
