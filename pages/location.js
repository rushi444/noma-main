import Heading from "@/components/common/Heading";
import HeroImage from "@/components/common/HeroImage";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import Subheading from "@/components/common/Subheading";
import TimeZoneSwiper from "@/components/common/TimeZoneSwiper";
import SearchInput from "@/components/locationl/SearchInput";
import { getAllEditions } from "@/lib/api";

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
  const locationItems = locations.contentTypeLocationCollection.items
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
        <SearchInput />
      </div>
      <TimeZoneSwiper locations={locationItems}/>
    </Layout>
  );
};

export default locations;
