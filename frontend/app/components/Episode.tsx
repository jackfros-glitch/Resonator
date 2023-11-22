import Image from "next/image";

interface EpisodeProps {
  episode: EpisodeInterface;
}

interface EpisodeInterface {
  thumbnail: string;
  topic: string;
  episode: string;
  category: string;
}

const Episode = ({ episode }: EpisodeProps) => {
  const episodeImage = {
    src: `${episode.thumbnail}`,
    width: "387px",
    height: "387px",
    alt: "episode_image",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  };
  const headphonesImage = {
    width: "17px",
    height: "22px",
    top: "0",
  };
  return (
    <div className=" flex flex-col w-[387px]  shadow-[0_0_25px_0_#00000014] rounded-lg overflow-hidden">
      <div className="relative">
        <img
          style={episodeImage}
          src={episode.thumbnail}
          width={387}
          height={387}
          alt="episode_image"
        />
        <div className="absolute top-5 right-5 bg-white rounded-xl w-11 h-11 flex items-center justify-center">
          <img
            style={{ ...headphonesImage }}
            src={"/images/headphones.png"}
            alt="headphones_image"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-[387px] h-[215px] bg-[#fff] ">
        <div className=" flex flex-col h-[200px] w-[302px] justify-center">
          <div className="flex flex-row mb-2">
            <span className="text-sm text-[#8E8B8C] inline-block">
              {episode.episode}
            </span>
            <span className="inline-block text-sm text-[#8E8B8C]">
              {episode.category}
            </span>
          </div>
          <p className="font-bold text-[27px] border-b-[3px] border-black pb-1">
            {episode.topic}
          </p>
          <span className="text-sm text-[#8E8B8C] leading-8 mt-5">
            Share{" "}
            <span className=" inline-block bg-share w-[21px] h-[21px] mr-3 ml-1 -mb-1"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Episode;
