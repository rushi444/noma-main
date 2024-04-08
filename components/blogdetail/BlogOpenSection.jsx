import React from "react";
import BlogopenImagecompo from "../common/BlogopenImagecompo";
import Link from "next/link";
import {
  documentToReactComponents,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

const BlogOpenSection = ({ blog }) => {
  return (
    <>
      <div className="px-4 max-w-[1120px] m-auto">
        {documentToReactComponents(blog?.content?.json, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => (
              <p className="text-carbon-Black font-Montserrat text-base font-medium leading-normal mb-4">
                {children}
              </p>
            ),
            [BLOCKS.HEADING_2]: (node, children) => (
              <h2 className="text-carbon-Black font-Montserrat text-xl sm:text-2xl font-extrabold leading-normal">
                {children}
              </h2>
            ),
            [BLOCKS.HEADING_1]: (node, children) => (
              <h1 className="md:py-8 py-4 font-sergio-trendy text-5xl max-sm:text-2xl font-normal capitalize text-carbon-Black max-w-[814px] w-full text-center leading-normal mx-auto">
                {children}
              </h1>
            ),
            [BLOCKS.HEADING_3]: (node, children) => (
              <h3 className="text-carbon-Black font-Montserrat text-base font-medium leading-normal">
                {children}
              </h3>
            ),
            [BLOCKS.HEADING_5]: (node, children) => (
              <h5 className="sm:py-4 py-2 text-carbon-Black font-Montserrat font-extrabold text-sm sm:text-base text-center max-w-[992px] w-full">
                {children}
              </h5>
            ),
            [BLOCKS.UL_LIST]: (node, children) => (
              <ul className="mt-4 flex flex-col gap-3">{children}</ul>
            ),
            [BLOCKS.LIST_ITEM]: (node, children) => (
              <li className="para">{children}</li>
            ),
            [BLOCKS.HR]: (node, children) => (
              <hr className="mt-8" />
            ),
            // [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
            //   <img
            //     src={node.data.target.fields.file.url}
            //     className="w-full h-auto"
            //   />
            // ),
            [BLOCKS.EMBEDDED_ENTRY]: (node, children) => (
              <div className="py-8 max-w-[992px] w-full mx-auto flex flex-col gap-4 md:gap-8">
                <p className="text-carbon-Black font-Montserrat text-base font-medium leading-normal">
                  {children}
                </p>
              </div>
            ),
            // [BLOCKS.QUOTE] : (node, children) => (
            //   <div className="py-8 max-w-[992px] w-full mx-auto flex flex-col gap-4 md:gap-8">
            //     <p className="text-gray font-Montserrat text-base font-medium leading-normal">
            //       {children}
            //     </p>
            //   </div>
            // ),
          },
        })}
        {/* <div className="max-w-[1120px] w-full mx-auto p-4">
          <h1 className="md:py-8 py-4 font-sergio-trendy text-5xl max-sm:text-2xl font-normal capitalize text-carbon-Black max-w-[814px] w-full text-center leading-normal mx-auto">
            El Dia de los Muertos A Celebration of Life
          </h1>
          <h5 className="sm:py-4 py-2 text-carbon-Black font-Montserrat font-extrabold text-sm sm:text-base text-center max-w-[992px] w-full">
            Día de los Muertos is a celebration full of joy, where families come
            together to cook delicious food, decorate their houses with flowers
            and gather to honor the cycle of life.
          </h5>
          <p className="text-light-grey text-sm sm:text-base font-bold font-Montserrat leading-normal text-center mb-4 md:mb-8">
            Created by <span className="font-normal">Franki Lannaccone</span>{" "}
            Posted on <span className="font-normal">December 2023</span>{" "}
            Stimated read time <span className="font-normal">8 minutes</span>
          </p>
          <BlogopenImagecompo imageUrl="/img/openblogfirst-img.png" />
          <div className="py-8 max-w-[992px] w-full mx-auto flex flex-col gap-4 md:gap-8">
            <p className="text-carbon-Black font-Montserrat text-base font-medium leading-normal">
              Día de los Muertos is a celebration full of joy, where families
              come together to cook delicious food, decorate their houses with
              flowers and gather to honor the cycle of life.
            </p>
            <p className="blogopencelebrationlifepara">
              Are you yet to experience this incredible event? Don't worry -
              Noma has your back (and your bucket list!). As part of our 2024
              remote work trip calendar, we'll be bringing you a very special el
              <span className="font-bold">
                Día de los Muertos Edition in Oaxaca!
              </span>
            </p>
            <p className="blogopencelebrationlifepara">
              El Día de los Muertos, or The Day of the Dead, is typically
              celebrated in Mexico between October 31st and November 2nd and
              honors the return of deceased loved ones to Earth. 
            </p>
            <p className="blogopencelebrationlifepara">
              Contrary to the name, El Día de los Muertos – or Day Of The Dead –
              is a joyful celebration of life; where communities believe that
              death is an integral part of life, the same as birth and not
              something to be feared. El Día de los Muertos is like a family
              reunion where living and dead members of the community come
              together to celebrate life with their loved ones. 
            </p>
          </div>
          <BlogopenImagecompo imageUrl="/img/openblogsecond.png" />
          <div className="py-8 max-w-[992px] w-full mx-auto">
            <h2 className="text-carbon-Black font-Montserrat text-xl sm:text-2xl font-extrabold leading-normal">
              Here are some incredible facts about El Día de los Muertos:
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="para">
                It’s believed that on October 31st, the gates to the afterlife
                open. For the first 24 hours, the spirits of children can
                revisit their families, and for the second 24 hours, adult
                spirits can do the same.
              </li>
              <li className="para">
                <Link
                  href="https://www.nationalgeographic.co.uk/history-and-civilisation/2019/10/la-catrina-dark-history-day-deads-immortal-icon"
                  className="font-bold"
                >
                  La Calavera Catrina
                </Link>{" "}
                is one of the most popular symbols of the holiday, a skeleton
                wearing a wide-brimmed hat with feathers, equal parts eerie and
                elegant. She reminds us that death is not something to be feared
                and no matter your status, we all have the same destiny. 
              </li>
              <li className="para">
                Other popular symbols are calacas (skeletons) and calaveras
                (skulls) which appear in sweets, as parade masks, as dolls or as
                makeup.
              </li>
              <li className="para">
                El Día de los Muertos is often mistaken for Halloween due to the
                similar dates but Halloween is rooted in ancient Celtic
                cultures, and El Día de los Muertos has pre-Columbian Aztec and
                Roman Catholic influences.
              </li>
              <li className="para">
                Families make ofrendas (altars or offerings) in homes and on
                gravestones, they lay marigold flowers called cempasuchil and
                candles leading from cemeteries to their homes.
              </li>
              <li className="para">
                Communities cover ofrendas with their deceased loved ones'
                favorite food, drinks and objects.
              </li>
              <li className="para">
                These traditions were influenced by Catholic All Saints Day and
                the Aztecs. Medieval Spaniards decorated graves with flowers and
                candles to guide the souls of their loved ones back to Earth.
                Ancient Aztecs left supplies and tools out to guide deceased
                family members through the Land of the Dead to the final resting
                place of Mictlán.
              </li>
              <li className="para">
                Despite being celebrated in some form for over 3,000 years, El
                Día de los Muertos was almost exclusively celebrated in rural
                Mexico until the 1980s.
              </li>
              <li className="para">
                Surprisingly, the first-ever Día de los Muertos parade in Mexico
                City didn’t take place until 2016, inspired by the James Bond
                film Spectre. 
              </li>
            </ul>
          </div>
          <BlogopenImagecompo imageUrl="/img/openblogthird.png" />
          <div className="max-w-[992px] w-full mx-auto flex flex-col gap-4 mt-8">
            <p className="blogopenincrediblepara">
              Noma Collective is collaborating with Outsite; beautiful co-living
              spaces for remote workers and creatives, for an unforgettable el
              Día de los Muertos Edition. Outsite provides remote-ready
              accommodation and a co-working hub in the heart of Oaxaca. Noma
              provides incredible activities, excursions and a ready-made
              community of like-minded remote workers. 
            </p>
            <p className="blogopenincrediblepara">
              Visiting Oaxaca during El Día de los Muertos is an experience that
              can’t be missed. Unlike Mexico City, the celebrations are more in
              line with the spiritual and authentic rituals of the holiday.
              Picture this: The streets are lined with colorful papel picado
              banners, the air thick with smells of cempasuchil flowers and
              smoky mezcal. Thousands of candles illuminate the old cemetery,{" "}
              <span className="font-bold">Panteón Viejo Xoxocotlán; </span> the
              atmosphere is infectious. The ancient traditions are combined with
              the wonders of modern connectivity allowing you to work from the
              heart of Oaxaca while being a part of this unique holiday.
            </p>
            <h1 className="text-carbon-Black font-Montserrat text-xl sm:text-2xl font-extrabold leading-normal mt-7">
              Some delicious Oaxacan delicacies you can’t miss:
            </h1>
            <ul className="flex flex-col gap-3">
              <li className="blogopenincrediblepara list-disc ml-8">
                <Link
                  target="_blank"
                  href="https://dayofthedead.holiday/recipes/pan-de-muertos-recipe/"
                  className="underline"
                >
                  Pan de Muerto
                </Link>{" "}
                is a traditional sweet bread sprinkled with sugar. In Oaxaca,
                the bread is decorated with cáritas (faces) that represent the
                deceased.
              </li>
              <li className="blogopenincrediblepara list-disc ml-8">
                If you’re feeling adventurous, Oaxaca is known for its delicacy
                of{" "}
                <Link
                  target="blank"
                  href="https://oaxacaautentico.com/en/chapulines-exotic-food-of-ancestral-origin/"
                  className="underline"
                >
                  chapulines
                </Link>{" "}
                (roasted grasshoppers)
              </li>
              <li className="blogopenincrediblepara list-disc ml-8">
                Holy Mole! Oaxaca has seven distinct types of Mole and has
                gained the nickname “Land of the Seven Moles”. If you like a bit
                of a kick,{" "}
                <Link
                  target="blank"
                  href="https://dayofthedead.holiday/recipes/mole-negro-recipe/"
                  className="underline"
                >
                  Mole Negro
                </Link>{" "}
                is a dark and spicy sauce made from chillies and dark chocolate.
              </li>
              <li className="blogopenincrediblepara list-disc ml-8">
                <Link
                  target="blank"
                  href="https://dayofthedead.holiday/recipes/sugar-skulls-recipe/"
                  className="underline"
                >
                  Calaveras de Azúcar
                </Link>{" "}
                (Sugar Skulls) might look delicious but they're made to decorate
                altars not to be eaten.
              </li>
              <li className="blogopenincrediblepara list-disc ml-8">
                If you’re looking for some comfort, then{" "}
                <Link
                  href="https://dayofthedead.holiday/recipes/sopa-azteca-recipe/"
                  className="underline"
                  target="blank"
                >
                  Atole
                </Link>{" "}
                is a tasty drink made from corn, cinnamon and vanilla. 
              </li>
              <li className="blogopenincrediblepara list-disc ml-8">
                <Link
                  target="blank"
                  className="underline"
                  href="https://dayofthedead.holiday/recipes/atole-recipe/"
                >
                  Sopa Azteca
                </Link>{" "}
                is a spicy tortilla soup you can build yourself by adding
                anything from avocado to cheese.
              </li>
              <li className="blogopenincrediblepara list-disc ml-8">
                Last but definitely not least is mezcal, the smoky variation of
                tequila that translates to ‘oven-cooked agave’. You can drink
                some delicious mezcal in{" "}
                <Link
                  target="blank"
                  href="https://www.instagram.com/lamezcaleritaoax/?hl=en-gb"
                  className="underline"
                >
                  La Mezcalerita, 
                </Link>
                <Link
                  target="blank"
                  href="https://www.tripadvisor.es/Restaurant_Review-g150801-d5969737-Reviews-La_Popular-Oaxaca_Southern_Mexico.html"
                  className=" underline"
                >
                  La Popular,
                </Link>{" "}
                <Link
                  target="blank"
                  href="https://www.instagram.com/mezcaloteca/?hl=en"
                  className="underline"
                >
                  Mezcaloteca
                </Link>{" "}
                <Link
                  target="blank"
                  href="https://www.instagram.com/sabinasabeoaxaca/?hl=en"
                  className="underline"
                >
                  or Sabina Sabe.
                </Link>
              </li>
            </ul>
            <h1 className="text-carbon-Black font-Montserrat text-base  sm:text-2xl font-extrabold leading-normal text-center mt-8">
              What are you waiting for? Book your trip with Noma and experience
              the magic of Día de los Muertos in Oaxaca!
            </h1>
            <button
              type="submit"
              className="p-[16px_32px] max-sm:p-[8px_16px] bg-main-orange transition duration-300 ease-in-out  hover:bg-transparent border-[2px] border-main-orange rounded-[28px] mx-auto text-lynxwhite hover:text-main-orange font-Montserrat text-sm sm:text-base font-extrabold leading-normal mt-4"
            >
              EXPLORE OAXACA EDITION
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default BlogOpenSection;
