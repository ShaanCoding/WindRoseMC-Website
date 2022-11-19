import React from "react";
import styles from "../../../styles/Footer.module.css";

import discord from "../../../images/icons/discord.png";
import instagram from "../../../images/icons/instagram.png";
import twitter from "../../../images/icons/twitter.png";
import youtube from "../../../images/icons/youtube.png";

let scrollHandle = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // for smoothly scrolling
  });
};

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full bg-primary-background-alt">
      <div className="flex flex-row items-center justify-center mx-4 py-8 w-full">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <div>
            <div className="flex items-center py-4 w-full">
              <h1 className="text-white-200 text-lg font-semibold mb-2 pr-4">
                2022 - {new Date().getFullYear()} &copy; WindroseMC
              </h1>

              <div className="flex-grow h-px bg-gray-400" />
            </div>

            <p className="text-white-200 text-sm font-semibold opacity-50 mb-2">
              WindroseMC is a Minecraft Server
            </p>
            <p className="text-white-200 text-sm font-semibold opacity-50 mb-2">
              WindroseMC is a huge community server for Minecraft Java Edition.
              IP: play.windrosemc.com
            </p>
            <p className="text-white-200 text-sm font-semibold opacity-50 mb-2">
              The WindroseMC server is not affiliated with Mojang AB or
              Microsoft
            </p>
            {/* Social Media Handles - Discord, Youtube, Twitter, Instagram */}
            <div className="flex flex-row items-center justify-start mt-4">
              <a
                href="https://discord.windrosemc.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={discord.src}
                  alt="Discord"
                  className="w-8 h-8 mr-2 filter invert opacity-20 hover:opacity-40"
                />
              </a>
              <a href="https://youtube.com/@windrosemc">
                <img
                  src={youtube.src}
                  alt="Youtube"
                  className="w-8 h-8 mr-2 filter invert opacity-20 hover:opacity-40"
                />
              </a>
              <a href="https://twitter.com/WindroseMC">
                <img
                  src={twitter.src}
                  alt="Twitter"
                  className="w-8 h-8 mr-2 filter invert opacity-20 hover:opacity-40"
                />
              </a>
              <a href="https://www.instagram.com/WindroseMC/">
                <img
                  src={instagram.src}
                  alt="Instagram"
                  className="w-8 h-8 mr-2 filter invert opacity-20 hover:opacity-40"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <div>
            {/* Rules, Store, Staff - Dot Poitn List */}
            <ul className="flex flex-col items-center justify-center">
              {/* Back to Top link */}
              <li className="text-white-200 text-base font-semibold opacity-50 mb-2 hover:opacity-75 hover:cursor-pointer">
                <a onClick={scrollHandle}>Back to Top</a>
              </li>

              <li className="text-white-200 text-base font-semibold opacity-50 mb-2 hover:opacity-75">
                <a href="/">Home</a>
              </li>
              <li className="text-white-200 text-base font-semibold opacity-50 mb-2 hover:opacity-75">
                <a href="/rules">Rules</a>
              </li>
              {/* <li className="text-white-200 text-base font-semibold opacity-50 mb-2 hover:opacity-75">
                <a href="/store">Store</a>
              </li> */}
              <li className="text-white-200 text-base font-semibold opacity-50 mb-2 hover:opacity-75">
                <a href="/staff">Staff</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
