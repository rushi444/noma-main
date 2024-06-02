import { socialMedialist } from "../common/Helper";
import SocialMediaList from "./SocialMediaList";

const SocialMediaCardWapper = () => {
  return (
    <article className="flex flex-wrap justify-center items-center gap-3 sm:gap-8 px-4">
      {socialMedialist.map((List, index) => (
        <SocialMediaList List={List} key={index} index={index} />
      ))}
    </article>
  );
};

export default SocialMediaCardWapper;
