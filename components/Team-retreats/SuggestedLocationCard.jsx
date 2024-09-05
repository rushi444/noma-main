import { getLocationCardColor } from "@/pages/locations";
import Chart from "./ChartSuggested";
import SuggestedLocationSwiper from "./SuggestedLocationSwiper";

const getCardColor = (text) => {
  if (text?.toLowerCase().includes("placencia")) {
    return getLocationCardColor("light-blue");
  }

  if (text?.toLowerCase().includes("bocas del toro")) {
    return getLocationCardColor("light-green");
  }

  if (text?.toLowerCase().includes("antigua")) {
    return getLocationCardColor("light-purple");
  }

  if (text?.toLowerCase().includes("playa grande")) {
    return getLocationCardColor("purple");
  }
};

const SuggestedLocationCard = ({ data }) => {
  return (
    <section className="flex max-md:flex-col max-md:items-center gap-5 md:gap-7 xl:gap-[56px]">
      {/* Left section */}
      <article className="max-w-[328px] w-full">
        <div className="flex gap-2 items-center py-2 px-1">
          <div
            className={`w-[162px] h-[33px] bg-[${getCardColor(
              data?.cardText
            )}] rounded-[31px]  flex justify-center items-center drop-shadow-[0px_2px_2px_rgba(0,0,0,0.10)]`}
          >
            <p className="text-[#313131] font-Montserrat font-normal text-center text-[14px]">
              Time zone: ({data.timezone})
            </p>
          </div>
          <div className="w-[100px] h-[33px] bg-[#F4F1E6] rounded-[31px] flex justify-center items-center  drop-shadow-[0px_2px_2px_rgba(0,0,0,0.10)]">
            <p className="text-[#313131] font-Montserrat font-normal text-center text-[14px]">
              {data.tempInCelsius}°C | {data.tempInFahrenheit}°F
            </p>
          </div>
        </div>

        {/* Swiper */}
        <SuggestedLocationSwiper images={data.cardImages} />

        <div
          className={`pt-1 pb-[17px] px-4 w-full bg-[${getCardColor(
            data?.cardText
          )}] rounded-b-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]`}
        >
          <p
            className="font-Montserrat font-extrabold text-[18px] sm:text-[24px] text-[#313131]"
            dangerouslySetInnerHTML={{ __html: data.cardText }}
          />
        </div>
      </article>

      {/* Right section */}
      <div className="flex flex-col gap-[17px] md:mt-10 lg:mt-[72px]">
        <p className="flex justify-center items-center text-black font-Montserrat font-normal text-center text-base lg:my-3 !line-clamp-5">
          {data.detailText}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-10 xl:gap-[63px] w-full">
          {data.chartsData.map((item) => (
            <Chart
              key={item.id}
              color={item.chartColor}
              text={item.chartName}
              img={item.img}
              parcent={item.chartPercent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuggestedLocationCard;
