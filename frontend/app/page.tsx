import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default function Home() {
  const imageStyle = {
    borderRadius: 10,
    height: 519,
    marginLeft: "auto",
  };
  return (
    <main className="">
      <Header />
      <section className=" w-[1136px] mx-auto mt-72 flex flex-row">
        <div className="w-[1136px] flex flex-row">
          <div className="pt-2">
            <h2 className="font-bold text-5xl w-[415px] leading-[55px]">
              Best places to find design inspiration
            </h2>
            <div className="h-[100px] flex flex-row my-3 items-center">
              <span className="inline-block border-2 border-[#CECECE] h-[70px] w-[70px] rounded-[70px] mr-6"></span>
              <div>
                <span className="block text-lg mb-2">Episode 1</span>
                <span className="block text-sm text-[#8E8B8C]">
                  Category • 0:13
                </span>
              </div>
            </div>
            <div className="w-[514px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                explicabo minima reprehenderit velit harum, ea nemo laboriosam
                ex aliquid quae quisquam, ipsum eum nesciunt aspernatur dolore
                rem, similique a minus.
              </p>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                soluta maiores doloribus itaque nemo porro dolorum, dolor
                consectetur tempore deserunt id voluptas illo inventore et
                quisquam corrupti, animi optio maxime.
              </p>
            </div>
            <span className="inline-block font-bold text-base leading-8 mt-5">
              Episode page{" "}
              <span className=" inline-block bg-arrow w-[19px] h-[14px] mr-3 ml-1"></span>
            </span>
          </div>
          <Image
            width={525}
            alt=""
            height={519}
            style={imageStyle}
            src={"/images/h1-podcastimg2.png"}
          />
        </div>
      </section>
      <section className="h-[831.52px] bg-[#F8F8F8] pt-[92px] mt-28 text-base">
        <h2 className="text-center font-bold text-5xl lading-[55px]">
          Top podcasts:
        </h2>
        <p className="text-center mt-5">
          Discover the selection of the most popular podcasts.
        </p>
      </section>
    </main>
  );
}
