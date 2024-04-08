import React from "react";
import Heading from "../common/Heading";
import NewsCard from "../common/NewsCard";
import NewsCards from "./NewsCards";

const NewsSection = ({ blogs }) => {
  return (
    <div className="bg-romance pb-[100px] w-full px-4 ">
      <div className="w-full  py-8 px-1 sm:px-2.5">
        <div className="hidden sm:block">
          <Heading heading="NEWS SECTION" />
        </div>
        <div>
          <p className="text-center text-black font-Montserrat text-2xl font-extrabold leading-normal block sm:hidden">
            News
          </p>
        </div>
      </div>
      <NewsCards blogs={blogs} />
    </div>
  );
};

export default NewsSection;
