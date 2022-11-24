import React from "react";

import copyIcon from "../../../images/icons/copy.png";

const IpAddressLink: React.FC<{ setShowModal: any }> = ({ setShowModal }) => {
  return (
    <div className="mx-8 xl:mx-[20%] px-12 py-4 bg-gradient-to-r from-red-gradient-1 to-red-gradient-2 sm:flex items-center justify-center sm:justify-between relative top-[-40px]">
      <div>
        <h1 className="text-white-100 break-words text-xl font-minecraft font-semibold mb-4 sm:mb-0 text-center sm:text-left">
          play.windrosemc.com
        </h1>
      </div>

      <div className="flex items-center justify-center sm:justify-end">
        <button
          className="text-white bg-black bg-opacity-10 px-6 py-4 font-minecraft hover:bg-opacity-20 flex items-center justify-between"
          onClick={() => {
            navigator.clipboard.writeText("play.windrosemc.com");
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
    </div>
  );
};

export default IpAddressLink;
