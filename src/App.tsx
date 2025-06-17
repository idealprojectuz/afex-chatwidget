import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { isMobile } from "./utils/mobilecheck";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // React.useEffect(() => {
  //   setWindowWidth(window.innerWidth);
  // }, [window.innerWidth]);
  return (
    <>
      {!isOpen && (
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          style={{
            boxShadow: "rgb(182 182 182) 0px 7px 35px",
          }}
          className="fixed md:bottom-10 bottom-5 md:right-10 right-5 bg-[#44bb6e] w-[65px] h-[65px] rounded-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={20}
            viewBox="0 0 25 20">
            <path
              fill="#fff"
              d="M22.5 5l-10 6.25L2.5 5V2.5l10 6.25 10-6.25V5zm0-5h-20A2.49 2.49 0 0 0 0 2.5v15A2.5 2.5 0 0 0 2.5 20h20a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 22.5 0z"
            />
          </svg>
        </div>
      )}

      {isOpen && (
        <div
          style={{
            height: `500px`,
            boxShadow: "0px 2px 16px #a0a0a07d",
          }}
          className={`bg-[#fff] fixed bottom-0 right-[50px]  overflow-hidden ${
            isMobile() ? "w-full" : "w-[388px]"
          } `}>
          {/* Draggable Header */}
          <div className="cursor-move header  justify-between rounded-t-[6px] flex gap-[8px] items-center px-5 bg-repeat-round bg-[#242426] w-full h-[65px]">
            <div className="flex items-center gap-[5px]">
              <img
                src="/operator.png"
                className="w-[40px] object-contain rounded-full h-[40px] bg-white"
              />
              <div className="flex flex-col select-none">
                <h2 className="text-[18px] text-[#F2F2F7] font-[400] leading-[15px]">
                  Oysanam
                </h2>
              </div>
              <div>
                <svg
                  width={9}
                  height={10}
                  viewBox="0 0 9 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    y="0.918701"
                    width="8.1626"
                    height="8.1626"
                    rx="4.0813"
                    fill="#0B84FF"
                  />
                </svg>
              </div>
            </div>
            <div
              onClick={() => {
                setIsOpen(false);
              }}>
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.8334 4.16669L4.16675 15.8334"
                  stroke="#F2F2F7"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.8334 15.8334L4.16675 4.16669"
                  stroke="#F2F2F7"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Chat Body */}
          <div className="chatarea pt-2 h-full px-2 bg-[#242426] border-t border-[#444446]  ">
            <div className="flex justify-end">
              <div className=" rounded-[12px] text-[16px] p-2 bg-[#2D2D2F] border border-[#444446] text-[#F2F2F7] w-[80%]">
                Assalomu aleykum hurmatli mijoz! Hozirda barcha operatorlarimiz
                offline holatida. Savol va takliflaringizni yozib qoldiring. Biz
                siz bilan aloqaga chiqamiz. Siz bilan bog'lanishimiz uchun
                telefon raqamlaringizni qoldirishni unutmang.
              </div>
            </div>
          </div>
          <div className="bg-[#242426] border-t border-[#444446] h-[100px] absolute bottom-0 left-0 w-full"></div>
        </div>
      )}
    </>
  );
}

export default App;
