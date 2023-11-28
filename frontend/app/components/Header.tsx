import Navbar from "./Navbar";
import Hero from "./Hero";

const Header = () => {
  return (
    <header className="max-h-[900px]">
      <img
        src="/images/image.png"
        className="relative w-full lg:h-[900px] object-cover md:h-[600px] sm:h-[500px] h-[350px]"
        srcSet="images/image_.png 400w, images/image_md.png  800w, images/image_lg.png 1024w, images/image.png 1440w"
      />
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
