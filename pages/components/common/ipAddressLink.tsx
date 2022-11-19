import React from "react";

import copyIcon from "../../../images/icons/copy.png";

const IpAddressLink: React.FC<{ setShowModal: any }> = ({ setShowModal }) => {
  return (
    <div className="mx-[22.5%] px-12 py-4 bg-gradient-to-r from-red-gradient-1 to-red-gradient-2 flex items-center justify-between relative top-[-40px]">
      <h1 className="text-white-100 text-xl font-minecraft font-semibold">
        play.windrose.com
      </h1>
      {/* Copy IP Address Button */}
      {/* Add image into button */}

      <button
        className="text-white bg-black bg-opacity-10 px-6 py-4 font-minecraft hover:bg-opacity-20 flex items-center justify-between"
        onClick={() => {
          navigator.clipboard.writeText("play.windrose.com");
          setShowModal(true);
        }}
      >
        <img
          src={copyIcon.src}
          alt="Copy Icon"
          className="w-6 h-6 mr-2 filter invert"
        />
        Copy IP Address
      </button>
    </div>
  );
};

export default IpAddressLink;
