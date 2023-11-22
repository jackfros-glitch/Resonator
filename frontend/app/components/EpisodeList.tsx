import { episodes } from "@/public/data";
import Episode from "./Episode";

const EpisodeList = () => {
  return (
    <div className=" max-w-[1300px] grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 justify-center justify-items-center gap-4 gap-y-14 mx-auto mt-5">
      {episodes.map((episode, index) => (
        <Episode key={index + episode.episode} episode={episode} />
      ))}
    </div>
  );
};

export default EpisodeList;
