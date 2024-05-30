import React from "react";
import Heading from "../common/Heading";
import NewsCard from "../common/NewsCard";
import NewsCards from "./NewsCards";

const NewsSection = ({ blogs }) => {
  return (
    <div className="bg-romance pb-[100px] w-full px-4 ">
      <div className="w-full  py-8 px-1 sm:px-2.5">
        <div className="hidden sm:block !font-kurdis">
          <Heading
            heading={
              <>
                What<span className="font-serif">'</span>
                <span className="lowercase">s</span> new
              </>
            }
          />
        </div>
        <Heading
          heading={
            <div className="sm:hidden">
              What<span className="font-serif">'</span>
              <span className="lowercase">s</span> new
            </div>
          }
        />
      </div>
      <NewsCards blogs={blogs} />
    </div>
  );
};

export default NewsSection;
