import CommonButton from "@/components/common/CommonButton";
import Heading from "@/components/common/Heading";
import HeroImage from "@/components/common/HeroImage";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import Subheading from "@/components/common/Subheading";
import TimeZoneSwiper from "@/components/common/TimeZoneSwiper";
import SearchInput from "@/components/locationl/SearchInput";
import { getAllEditions } from "@/lib/api";
import { useMemo, useState } from "react";

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

  const [locationItems, setLocationItems] = useState(
    locations.contentTypeLocationCollection.items
  );

  const filteredItems = useMemo(() => {
    return (
      locationItems?.filter((item) => {
        return (
          item.city.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.country.toLowerCase().includes(searchInput.toLowerCase())
        );
      }) || []
    );
  }, [searchInput, locationItems]);

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
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          onSurpriseMeClick={onSurpriseMeClick}
        />
      </div>
      <TimeZoneSwiper locations={filteredItems} />
      <div className="mb-24">
        <CommonButton text='Book Your Call'/>
      </div>
    </Layout>
  );
};

export default locations;
