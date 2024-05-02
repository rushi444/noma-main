import React from "react";
import Heading from "../common/Heading";
import { ForBlogBtnData } from "../common/Helper";
import FeatureBlog from "./FeatureBlog";
import { SearchIcon } from "../common/Icons";
import Fourbotton from "./Fourbtns";

const NewsForBlog = ({ blogs }) => {
  const b = blogs?.blogCollection?.items || [];
  return (
    <>
      <div className="max-w-[1120px] w-full mx-auto pb-8 px-4">
        <div className="px-3 pt-8">
          <Heading heading="Blog" />
        </div>
          <p className='px-24 pt-4'>This is your go-to hub for all things digital nomad. We&apos;re here to provide you with the tools to thrive, from finding remote jobs to essential top tips to inspiring travel guides. Welcome to your one-stop shop for navigating the digital nomad landscape.</p>
        <div className="bg-pastel-yellow max-w-[736px] w-full h-12 sm:h-16 mx-auto rounded-[57px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] flex gap-2 items-center justify-between px-4  mt-8 sm:mt-16">
          <input
            type="text"
            className=" text-black outline-none w-full bg-transparent font-Montserrat text-sm font-normal leading-normal sm:pl-4 "
            placeholder="Type to search a location"
          />
          <SearchIcon />
        </div>
        <div className="flex flex-wrap gap-x-4  sm:mt-8">
          {ForBlogBtnData.map((items, index) => (
            <Fourbotton items={items} value={index} key={index} />
          ))}
        </div>
      </div>
      <FeatureBlog blogs={b} />
    </>
  );
};

export default NewsForBlog;
