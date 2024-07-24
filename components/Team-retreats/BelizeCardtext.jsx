import { belizeChart } from "../common/Helper";
import Chart from "./ChartSuggested";

const BelizeCardtext = () => {
  return (
    <div className="flex flex-col gap-[17px] md:mt-10 lg:mt-[72px]">
      <p className="flex justify-center items-center text-black font-Montserrat font-normal text-center text-[16px] lg:my-3 !line-clamp-5">
        Embark on an unforgettable journey to paradise at our Noma HQ in Umaya
        Resort. Your team will flourish in this idyllic beachfront location as
        they get inspired by the breathtaking surroundings. After work,
        rejuvenate with our carefully curated activities – paddleboarding,
        kayaking, catamaran trips, snorkeling, and waterfall hikes.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-10 xl:gap-[63px] w-full">
        {belizeChart.map((item, index) => (
          <Chart
            color={item.color}
            text={item.text}
            text2={item.textb}
            img={item.img}
            parcent={item.percent}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default BelizeCardtext;
