import React from "react";
import { InputRightSideIcon, SearchIcon } from "../common/Icons";

const SearchInput = ({ searchInput, setSearchInput, onSurpriseMeClick }) => {
  return (
    <article className="flex items-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] mx-auto sm:max-w-[600px] mt-5 max-w-[358px] w-full h-[48px] sm:h-14 rounded-[57px]">
      <article className="bg-light-green w-[44px] border-r border-light-grey md:w-[98px] cursor-pointer rounded-l-[57px] flex items-center justify-center h-full px-[30px] py-4">
        <span type="submit">
          <InputRightSideIcon />
        </span>
      </article>
      <article className="max-w-[200px] sm:max-w-[411px] w-full pl-3 sm:pl-6 sm:py-2.5 bg-romance h-full flex items-center justify-start">
        <input
          type="search"
          name="search"
          placeholder="Type to search a location"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full text-[#666] placeholder:text-[#666] text-[10px] sm:text-[13px] font-Montserrat font-normal leading-normal  placeholder:text-[10px] sm:placeholder:text-[13px] placeholder:font-Montserrat placeholder:font-normal placeholder:leading-normal bg-transparent h-full outline-none"
        />
      </article>
      <article className="sm:max-w-[200px] sm:w-full w-[110px] border-l border-light-grey bg-pastel-yellow rounded-r-[57px] h-full flex items-center py-4 pr-[15px]">
        <button
          onClick={onSurpriseMeClick}
          className="text-[#666] text-[10px] gap-1 sm:gap-5 sm:text-[13px] font-Montserrat font-normal leading-normal flex items-center justify-end text-center w-full"
        >
          <span className="text-center text-[8px] sm:text-[12px]">
            Surprise me
          </span>
          <SearchIcon />
        </button>
      </article>
    </article>
  );
};

export default SearchInput;
