import Image from "next/image";

interface PodcastProps {
  podcast: PodcastInterface;
}

interface PodcastInterface {
  id: number;
  thumbnail: string;
  topic: string;
  episode: string;
  category: string;
}

const Podcast = ({ podcast }: PodcastProps) => {
  const podcastImage = {
    src: `${podcast.thumbnail}`,
    width: "393px",
    height: "393px",
    alt: "podcast_image",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  };
  const headphonesImage = {
    width: "17px",
    height: "22px",
    top: "0",
  };
  return (
    <div
      id={`${podcast.id}`}
      className=" flex-shrink-0 snap-center snap-normal flex flex-row w-[786px] shadow-[0_0_25px_0_#00000014] rounded-lg overflow-hidden"
    >
      <div className="relative">
        <img
          style={podcastImage}
          src={podcast.thumbnail}
          width={393}
          height={393}
          alt="podcast_image"
        />
        <div className="absolute top-5 right-5 bg-white rounded-xl w-11 h-11 flex items-center justify-center">
          <img
            style={{ ...headphonesImage }}
            src={"/images/headphones.png"}
            alt="headphones_image"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-[393px] bg-[#fff]">
        <div className=" flex flex-col h-[200px] w-[302px] justify-center">
          <div className="flex flex-row mb-2">
            <span className="text-sm text-[#8E8B8C] inline-block">
              {podcast.episode}
            </span>
            <span className="inline-block text-sm text-[#8E8B8C]">
              {podcast.category}
            </span>
          </div>
          <p className="font-bold text-[27px] border-b-[3px] border-black pb-1">
            {podcast.topic}
          </p>
          <span className="font-bold text-base leading-8 mt-5 cursor-pointer">
            Episode page{" "}
            <span className=" inline-block bg-arrow w-[19px] h-[14px] mr-3 ml-1"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
