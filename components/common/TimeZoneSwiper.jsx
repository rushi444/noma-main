import FeaturedEditionCard from "./FeaturedEditionCard";
import Link from "next/link";
import { format, differenceInDays } from "date-fns";

const TimeZoneSwiper = ({ locations }) => {
  const locationsMapped = locations?.map((l) => ({
    id: l?.sys?.id,
    firstbtn: l?.timeZone,
    secondbtn: l?.temperature,
    title: l?.city,
    description: l?.country,
    date: `${format(new Date(l.startDate), "MMM d")} - ${format(
      new Date(l.endDate),
      "MMM d, yyyy"
    )}`,
    days: Math.abs(
      differenceInDays(new Date(l.endDate), new Date(l.startDate))
    ),
    price: l?.accomodationsCollection?.items?.[0]?.price,
    img: [{ src: l?.heroImage?.url }],
    locationColor: l?.locationCardColor
  }));

  return (
    <>
      <div className="gap-5 gap-y-8 mb-[140px] sm:mt-8 xl:gap-[68px] grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3   max-w-[1120px] w-full mx-auto px-4 xl:px-0">
        {locationsMapped.map((item, index) => (
          <Link key={index} href={`/location/${item.id}`}>
            <FeaturedEditionCard item={item} value={index} key={index} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default TimeZoneSwiper;
