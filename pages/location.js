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

const locations = ({ locations }) => {
  const [searchInput, setSearchInput] = useState("");
  const locationItems = locations.contentTypeLocationCollection.items;

  const filteredItems = useMemo(() => {
    return locationItems?.filter((item) => {
      return (
        item.city.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.country.toLowerCase().includes(searchInput.toLowerCase())
      );
    }) || []
  }, [searchInput, locationItems]);
  return (
    <Layout>
      <PageSEO title="Locations" />
      <HeroImage bg="url('/img/locations-bg.png')" />
      <div className="px-4 pt-8 ">
        <Heading heading="Where do you want to go" />
      </div>
      <div className="sm:max-w-[500px] w-full mx-auto max-xl:px-4">
        <Subheading
          paragraph="Fun fluffy line about the start of your journey here CAN be two lines
        and make it inspiring"
        />
      </div>
      <div className="px-4 xl:px-0 lg:pt-4 pb-8">
        <SearchInput
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </div>
      <TimeZoneSwiper locations={filteredItems} />
    </Layout>
  );
};

export default locations;
