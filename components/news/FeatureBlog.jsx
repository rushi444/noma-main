import React from "react";
import { NewsFeatureBlogFirst, NewsFeatureBlogSecond } from "../common/Helper";
import OpenBlogIntrestedCard from "../blogdetail/OpenBlogIntrestedCard";
import Link from "next/link";

const FeatureBlog = ({ blogs }) => {
  return (
    <>
      <div className="bg-red ">
        {/* <div className="max-w-[1120px] w-full mx-auto px-3">
          <h1 className="sm:py-8 py-4 text-center text-carbon-Black font-Montserrat text-[32px] font-extrabold leading-normal">
            Featured blogs
          </h1>
          <div className="sm:py-8 max-sm:pb-8 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-9 2xl:gap-[68px] ">
            {NewsFeatureBlogFirst.map((item, index) => (
              <Link key={index} href={`/blog/${index}`}>
                <OpenBlogIntrestedCard item={item} key={index} />
              </Link>
            ))}
          </div>
        </div> */}
      </div>
      <div className="max-w-[1120px] pb-[100px] w-full mx-auto px-4 xl:px-0">
        <div className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-9 xl:gap-[68px] ">
          {blogs.map((item, index) => (
            <Link key={index} href={`/blog/${item?.sys?.id}`}>
              <OpenBlogIntrestedCard item={item} key={index} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureBlog;
