import Heading from "@/components/common/Heading";
import { heroBtnData } from "@/components/common/Helper";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import Subheading from "@/components/common/Subheading";
import Accomodation from "@/components/editions/Accomodation";
import CardSlider from "@/components/editions/CardSlider";
import GuestGallery from "@/components/editions/GuestGallery";
import HeroBtn from "@/components/editions/HeroBtn";
import HighLights from "@/components/editions/HighLights";
import ProfileMeet from "@/components/editions/ProfileMeet";
import ProgressCircle from "@/components/editions/ProgressCircle";
import WhatIncluded from "@/components/editions/WhatIncluded";
import { getLocationById } from "@/lib/api";

export const getServerSideProps = async ({ params }) => {
  const location = await getLocationById({ locationId: params.id });
  return {
    props: {
      location,
    },
  };
};

const Editions = ({ location }) => {
  console.log({ location });
  const locationMapped = {
    timeZone: location?.contentTypeLocation?.timeZone,
    temperature: location?.contentTypeLocation?.temperature,
    heading: `${location.contentTypeLocation.city}, ${location.contentTypeLocation.country}`,
    description: location.contentTypeLocation.description,
    description2: location.contentTypeLocation.description2.json,
    hero: location.contentTypeLocation.heroImage.url,
    whatsIncluded: location.contentTypeLocation.facilitiesCollection.items,
    manager: location.contentTypeLocation.managerCollection.items[0],
    highlights: location.contentTypeLocation.highlightsCollection.items,
    accomodation: location.contentTypeLocation.accomodationsCollection.items
  };
  return (
    <Layout>
      <PageSEO title="Location" />
      <div
        style={{
          background: `url(${locationMapped?.hero})`,
          backgroundPosition: "center",
        }}
        // bg-[url('/img/news-bg-2.png')] sm:bg-[url('/img/news-bg.png')] orignally in classname below
        className="w-full bg-center bg-cover h-[382px] sm:h-[800px] max-sm:mt-[7px] max-sm:px-4"
      >
        <div className="flex gap-2 items-center py-2 px-1 sm:hidden">
          <HeroBtn item={{ btn: locationMapped.timeZone }} value={0} />
          <HeroBtn item={{ btn: locationMapped.temperature }} value={1} />
        </div>
      </div>
      <div className="px-2.5 py-8 hidden sm:block">
        <Heading heading={locationMapped?.heading} />
      </div>
      <div className="sm:max-w-[710px] w-full mx-auto max-xl:px-4 hidden sm:block">
        <Subheading paragraph={locationMapped?.description} />
      </div>
      <div className="block sm:hidden px-2.5 pt-2 pb-4">
        <p className="text-center text-[#313131] font-Montserrat text-base font-extrabold leading-normal">
          {locationMapped?.description}
        </p>
      </div>
      <ProgressCircle />
      <WhatIncluded
        d={locationMapped?.description2}
        items={locationMapped?.whatsIncluded}
      />
      <ProfileMeet manager={locationMapped?.manager} />
      <HighLights highlights={locationMapped?.highlights} />
      <Accomodation accomodation={locationMapped?.accomodation || []}/>
      <div className="mt-[85px]">
        <GuestGallery />
      </div>
      <CardSlider />
    </Layout>
  );
};

export default Editions;
