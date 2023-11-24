import { episodes } from "@/public/data";
import Episode from "./Episode";

const EpisodeList = () => {
  return (
    <div className="w-[90%] max-w-[1300px] grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 justify-center justify-items-center gap-4 gap-y-14 mx-auto mt-5">
      {episodes.map((episode, index) => (
        <Episode key={index + episode.episode} episode={episode} />
      ))}
      <span className="inline-block lg:hidden font-bold text-base leading-8 mt-5 cursor-pointer">
        View all episodes{" "}
        <span className=" inline-block bg-arrow w-[19px] h-[14px] mr-3 ml-1"></span>
      </span>
    </div>
  );
};

export default EpisodeList;
