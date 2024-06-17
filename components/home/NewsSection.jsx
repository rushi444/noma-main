import React from "react";
import Heading from "../common/Heading";
import NewsCard from "../common/NewsCard";
import NewsCards from "./NewsCards";

const NewsSection = ({ blogs, highlighted }) => {
  return (
    <div
      className={`${
        highlighted ? "bg-red" : "bg-romance"
      } sm:pb-[100px] w-full px-4 ${highlighted ? "pb-0 mb-0" : ""}`}
    >
      <div className="w-full  py-8 px-1 sm:px-2.5">
        <div className="hidden sm:block !font-kurdis">
          <Heading
            heading={
              highlighted ? (
                "Highlights"
              ) : (
                <>
                  What<span className="font-serif">'</span>
                  <span className="lowercase">s</span> new
                </>
              )
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
