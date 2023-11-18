import styles from "../../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className="z-20 absolute flex flex-col w-[90%] sm:pl-[160px] sm:items-start items-center justify-center left-[3%] sm:left-[1%] top-[19%]  ">
      <h2 className="hero-heading text-8xl font-bold text-left">
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
  );
};

export default Hero;
