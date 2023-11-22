import styles from "../../styles/Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="z-20 absolute flex flex-col w-[90%] sm:pl-[160px] sm:items-start items-center justify-center left-[3%] sm:left-[1%] top-[19%]  ">
        <h2 className="hero-heading text-8xl font-bold text-left w-[628px]">
          New episode available now
        </h2>
        <p className="font-sans text-xl font-normal text-left mt-4">
          Available on Apple Soundcast and Spotify.
        </p>
        <div className=" mt-11">
          <span className={`${styles.applePodcasts} mr-3`}></span>
          <span className={`${styles.soundCloud} mr-2`}></span>
        </div>
      </div>
      <div className=" bg-white flex items-center h-[292px] shadow-[0_0_25px_0_#00000014] w-[1136px] mx-auto relative top-[-144px] rounded-xl pr-12 overflow-hidden">
        <Image
          src="/images/h4-newimg3-650x650.png"
          alt="episode_photo"
          width={291}
          height={291}
        />
        <div className="ml-5 w-[936px] m-2 h-[221.17px] pl-7 pb-24">
          <div className="flex justify-between ">
            <p className="font-bold text-4xl w-[406px]">
              {" "}
              Timmy Mike: the nature of design
            </p>{" "}
            <span className="font-bold text-base leading-8 cursor-pointer">
              Episode page{" "}
              <span className=" inline-block bg-arrow w-[19px] h-[14px] mr-3 ml-1"></span>
            </span>
          </div>
          <div className="text-[#8E8B8C] my-4 text-sm">
            {" "}
            <span>Episode 1 •</span> <span>Microphone •</span>
            <span>0:13</span>
          </div>
          <div className="flex flex-row ">
            <span className="border-2 border-[#CECECE] h-[70px] w-[70px] rounded-[70px] mr-6"></span>
            <span className="self-end italic mr-6 mb-2 text-[#8E8B8C] text-sm">
              10s
            </span>
            <span className=" self-end italic mb-2 mr-8 text-[#8E8B8C] text-sm">
              10s
            </span>
            <img
              src="/images/TimeSlider.png"
              alt=""
              className=" h-[12px] w-[350px] self-center  "
            />
            <span className=" self-center mx-3 text-[#8E8B8C] text-sm">
              00:00 / 00:00
            </span>
            <span className=" self-center ml-3 bg-speaker w-6 h-8"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
