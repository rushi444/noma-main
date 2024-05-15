import CommonButton from "@/components/common/CommonButton";
import Heading from "@/components/common/Heading";
import HeroImage from "@/components/common/HeroImage";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import Subheading from "@/components/common/Subheading";
import TimeZoneSwiper from "@/components/common/TimeZoneSwiper";
import SearchInput from "@/components/locationl/SearchInput";
import { getAllEditions } from "@/lib/api";
import { useEffect, useMemo, useState } from "react";

export const getServerSideProps = async () => {
  const locations = await getAllEditions();
  return {
    props: {
      title: "Locations",
      locations: locations || [],
    },
  };
};

const shuffleArray = (array) =>
  array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

const locations = ({ locations }) => {
  const [searchInput, setSearchInput] = useState("");
  const [tempFilter, setTempFilter] = useState("");
  const [daysFilter, setDaysFilter] = useState("");
  const [placeFilter, setPlaceFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const [locationItems, setLocationItems] = useState(
    locations.contentTypeLocationCollection.items
  );

  const filteredItems = useMemo(() => {
    return (
      locationItems?.filter((item) => {
        // Filter by search input
        const searchFilter =
          item.city.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.country.toLowerCase().includes(searchInput.toLowerCase());

        // Filter by temperature
        const tempFilterPass =
          !tempFilter ||
          (tempFilter.min &&
            parseInt(item.temperature.split("°")[0]) >= tempFilter.min.C &&
            tempFilter.max &&
            parseInt(item.temperature.split("°")[0]) <= tempFilter.max.C);

        // Filter by length of trip
        const daysFilterPass =
          !daysFilter ||
          (new Date(item.endDate) - new Date(item.startDate)) /
            (1000 * 60 * 60 * 24) <=
            daysFilter;

        // Filter by continent
        const placeFilterPass =
          item.city.toLowerCase().includes(placeFilter.toLowerCase()) ||
          item.country.toLowerCase().includes(placeFilter.toLowerCase());

        // Filter by type of trip
        // const typeFilterPass =
        //   !typeFilter || item.type.toLowerCase() === typeFilter.toLowerCase();

        // Combine all filters
        return (
          searchFilter && tempFilterPass && daysFilterPass && placeFilterPass
          // && typeFilterPass
        );
      }) || []
    );
  }, [
    searchInput,
    locationItems,
    tempFilter,
    daysFilter,
    placeFilter,
    typeFilter,
  ]);

  const onSurpriseMeClick = () => setLocationItems((v) => shuffleArray(v));

  return (
    <Layout>
      <PageSEO title="Locations" />
      <HeroImage bg="url('/img/locations-bg.png')" />
      <div className="px-4 pt-8 ">
        <Heading heading="Where do you want to go" />
      </div>
      <div className="sm:max-w-[500px] w-full mx-auto max-xl:px-4">
        <Subheading paragraph="Your remote work journey starts here, check out our specially curated Noma Editions and embrace the freedom to work from anywhere." />
      </div>
      <div className="px-4 xl:px-0 lg:pt-4">
        <SearchInput
          setPlaceFilter={setPlaceFilter}
          setDaysFilter={setDaysFilter}
          setTempFilter={setTempFilter}
          setTypeFilter={setTypeFilter}
          placeFilter={placeFilter}
          daysFilter={daysFilter}
          tempFilter={tempFilter}
          typeFilter={typeFilter}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          onSurpriseMeClick={onSurpriseMeClick}
        />
      </div>
      <TimeZoneSwiper locations={filteredItems} />
      <div className="mb-24">
        <CommonButton text="Book Your Call" />
      </div>
    </Layout>
  );
};

export default locations;
