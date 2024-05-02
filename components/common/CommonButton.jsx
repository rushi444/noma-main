import Link from "next/link";
import React from "react";

const CommonButton = ({ text, link }) => {
  if (link) {
    return (
      <Link href={link}>
        <div className="py-6 sm:py-8 px-2.5 mx-auto w-fit">
          <button
            type="submit"
            className="sm:px-8 px-3 p-2 sm:py-4 max-sm:h-[33px] flex items-center bg-main-orange rounded-[28px] text-white text-center text-sm sm:text-base font-extrabold leading-normal hover:text-main-orange hover:bg-transparent transition duration-300 ease-in-out  border border-main-orange"
          >
            {text}
          </button>
        </div>
      </Link>
    );
  }

  return (
    <div className="py-6 sm:py-8 px-2.5 mx-auto w-fit">
      <button
        type="submit"
        className="sm:px-8 px-3 p-2 sm:py-4 max-sm:h-[33px] flex items-center bg-main-orange rounded-[28px] text-white text-center text-sm sm:text-base font-extrabold leading-normal hover:text-main-orange hover:bg-transparent transition duration-300 ease-in-out  border border-main-orange"
        onClick={() =>
          window.open(
            "https://lp.noma-collective.com/schedule-your-meeting-page",
            "_blank"
          )
        }
      >
        {text}
      </button>
    </div>
  );
};

export default CommonButton;
