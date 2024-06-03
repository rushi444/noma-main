import React from "react";

const ReadOurReviews = () => {
  return (
    <div className="bg-main-orange px-4 xl:px-0 sm:flex flex-col hidden ">
      <div className="pt-8 pb-4">
        <p
          className="text-romance text-center font-Montserrat text-[32px] font-extrabold leading-noemal
        "
        >
          4.8 ⭐ ON GOOGLE
        </p>
      </div>
      <div className="px-2 5 pb-8 mx-auto">
        <button
          onClick={() => {
            window.open(
              "https://maps.app.goo.gl/yniBP6fdpVv9TVNj7?g_st=ic",
              "_blank"
            );
          }}
          className="text-center py-4 px-8 rounded-[28px] border border-romance hover:text-[#F1F4E6] hover:bg-transparent transition duration-300 ease-in-out  bg-[#F4F1E6] text-[#1E1E1E] text-2xl lg:text-[32px] font-Montserrat font-extrabold leading-9"
        >
          READ OUR REVIEWS
        </button>
      </div>
    </div>
  );
};

export default ReadOurReviews;
