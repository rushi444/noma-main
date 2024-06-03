import { colorLookup } from "../blogdetail/OpenBlogIntrestedCard";
import { featuredBlogsBgs } from "../utils/Functions";

const NewsCard = ({ item }) => {
  const BgColor = featuredBlogsBgs({ item });
  return (
    <article className="flex flex-col hover:scale-95 cursor-pointer transition duration-300 ease-in-out pb-5 md:pb-0 items-center">
      <article className="max-w-[328px] w-full pb-8">
        <button
          type="submit"
          className={`p-[8px_7px] rounded-[31px] max-w-[169px] w-full text-carbon-Black font-Montserrat text-sm font-normal leding-normal shadow-[0px_2px_2px_0px_rgba(0,0,0,0.10)]`}
          style={{ backgroundColor: colorLookup[item?.category] || BgColor }}
        >
          {item.category}
        </button>
        <img
          className="rounded-lg mt-2 object-fit h-[328px] w-[328px] object-cover"
          src={item?.cardImage?.url}
          alt={item?.cardImage?.title}
        />
        <h1 className="text-carbon-Black font-Montserrat text-lg font-extrabold mt-2 leading-normal line-clamp-3">
          {item.title}
        </h1>
        <p>{item?.excerpt || ''}</p>
      </article>
      {/* <article className=" mx-auto w-fit">
        <button
          type="submit"
          className="px-8 py-4 bg-main-red rounded-[28px] text-white text-center text-base font-extrabold leading-normal hover:text-main-red hover:bg-transparent transition duration-300 ease-in-out  border border-main-red"
        >
         Read more
        </button>
      </article> */}
    </article>
  );
};

export default NewsCard;
