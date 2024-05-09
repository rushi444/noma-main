import { useState } from "react";
import { InputRightSideIcon, SearchIcon } from "../common/Icons";

const filters = {
  "Average Temp": [
    "Less than 15°C | 59°F",
    "15°C | 59°F - 20°C | 68°F",
    "20°C | 68°F - 25°C | 77°F",
    "25°C | 77°F - 30°C | 86°F",
    "More than 30°C | 86°F ",
  ],
  "Length of Trip": ['1 Week', '2 Weeks', '3 Weeks', '4 Weeks'],
  Continent: ["Europe", "Africa", "Central America", "South America"],
  "Type of Trip": [
    "Foodie Heaven",
    "Wellness & relaxation",
    "Nightlife & partying",
    "Nature & wildlife",
    "Activity & fitness",
  ],
};

const SearchInput = ({ searchInput, setSearchInput, onSurpriseMeClick }) => {
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <div>
      <article className="flex items-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] mx-auto sm:max-w-[600px] mt-5 max-w-[358px] w-full h-[48px] sm:h-14 rounded-[57px]">
        <article className="bg-light-green w-[44px] border-r border-light-grey md:w-[98px] cursor-pointer rounded-l-[57px] flex items-center justify-center h-full px-[30px] py-4">
          <span onClick={() => setFilterOpen((v) => !v)}>
            <InputRightSideIcon />
          </span>
        </article>
        <article className="max-w-[200px] sm:max-w-[411px] w-full pl-3 sm:pl-6 sm:py-2.5 bg-romance h-full flex items-center justify-start bg-white">
          <input
            type="search"
            name="search"
            placeholder="Type to search a location"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full bg-white text-[#666] placeholder:text-[#666] text-[10px] sm:text-[13px] font-Montserrat font-normal leading-normal  placeholder:text-[10px] sm:placeholder:text-[13px] placeholder:font-Montserrat placeholder:font-normal placeholder:leading-normal bg-transparent h-full outline-none"
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
      {filterOpen && (
        <div className="flex justify-around">
          {Object.entries(filters).map(([key, values]) => (
            <div className="mt-4">
              <h6 className='font-Montserrat ml-4 font-bold'>{key}</h6>
              {values.map((value) => (
                <div className='bg-white rounded-full m-2 p-1 px-2 font-Montserrat cursor-pointer'>{value}</div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
