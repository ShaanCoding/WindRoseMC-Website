import React from "react";

const Modal: React.FC<{ showModal: boolean; setShowModal: any }> = ({
  showModal,
  setShowModal,
}) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-md shadow-lg relative flex flex-col  bg-slate-100 outline-none focus:outline-none w-[800px]">
                {/*body*/}
                <div className="relative p-6 flex-auto ">
                  <h1 className="text-red-100 font-bold text-4xl mb-4 text-center">
                    Server IP Copied
                  </h1>
                  <p className="text-primary-background-alt text-lg mb-4 text-center">
                    We hope to see you online soon!
                  </p>
                  <div className="flex justify-center">
                    <input
                      type="text"
                      value="play.windrosemc.com"
                      disabled
                      className="border border-primary-background-alt rounded-md p-2 text-primary-background-alt text-lg text-center"
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-red-100 text-white active:bg-red-200 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;

