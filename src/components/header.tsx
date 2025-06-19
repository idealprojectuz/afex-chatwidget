import React from "react";

interface HeaderInterface {
  operator: string;
  online: boolean;
  setIsOpen: (arg: boolean) => void;
}
export const Header = ({ operator, online, setIsOpen }: HeaderInterface) => {
  return (
    <>
      <div className="cursor-pointer header  justify-between rounded-t-[6px] flex gap-[8px] items-center px-5 bg-repeat-round bg-[#242426] w-full h-[65px]">
        <div className="flex items-center gap-[5px]">
          <img
            src="/operator.png"
            className="w-[40px] object-contain rounded-full h-[40px] bg-white"
          />
          <div className="flex flex-col select-none">
            <h2 className="text-[18px] text-[#F2F2F7] font-[400] leading-[15px]">
              {operator}
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
                fill={online ? "#0B84FF" : "#c70a1a"}
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
    </>
  );
};
