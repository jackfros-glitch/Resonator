import styles from "../../styles/PodcastList.module.css";
import { podcasts } from "@/public/data";
import Podcast from "./Podcast";

const PodcastList = () => {
  return (
    <div className=" h-[483px]  py-2 mt-10">
      <div
        className={`${styles.slider} flex flex-row gap-x-10 w-[full] overflow-x-scroll snap-mandatory scroll-smooth`}
      >
        {podcasts.map((podcast) => (
          <Podcast key={podcast.id} podcast={podcast} />
        ))}
      </div>
      <nav className=" mt-[59px] flex flex-row justify-center w-full h-fit">
        <a
          href="#1"
          className="flex items-center justify-center h-[30px] w-[30px] rounded-[50%] active:border-[1px] active:border-black  "
        >
          <span className=" inline-block w-[6px] h-[6px] rounded-[3px] bg-black mx-3"></span>
        </a>
        <a
          href="#2"
          className="flex items-center justify-center h-[30px] w-[30px] rounded-[50%] active:border-[1px] active:border-black "
        >
          <span className=" inline-block w-[6px] h-[6px] rounded-[3px] bg-black mx-3"></span>
        </a>
        <a
          href="#3"
          className="flex items-center justify-center h-[30px] w-[30px] rounded-[50%] active:border-[1px] active:border-black "
        >
          <span className=" inline-block w-[6px] h-[6px] rounded-[3px] bg-black mx-3"></span>
        </a>
      </nav>
    </div>
  );
};

export default PodcastList;
