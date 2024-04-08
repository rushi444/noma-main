import { HeroBtnBg } from "../utils/Functions";

const HeroBtn = ({ item, value }) => {
  const BgColor = HeroBtnBg({ value });
  return (
    <>
      <button
        type="submit"
        className="px-3 py-2 rounded-full text-[#313131] font-Montserrat text-sm  font-normal leading-normal"
        style={{ backgroundColor: BgColor }}
      >
        {item.btn}
      </button>
    </>
  );
};

export default HeroBtn;
