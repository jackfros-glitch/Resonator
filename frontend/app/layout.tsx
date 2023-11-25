import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Footer from "./components/Footer";
import HostList from "./components/HostList";
import EpisodeList from "./components/EpisodeList";
import PodcastList from "./components/PodcastList";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resonator",
  description:
    "We collaborate with ambitious brands and people; let’s build something great together.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const imageStyle = {
    borderRadius: 10,
    height: 519,
    marginLeft: "auto",
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* <section className="  w-full md:max-w-[1136px] mx-auto mt-72 flex md:flex-row justify-center">
          <div className="sm:max-w-[1136px]   flex flex-col lg:flex-row min-w-[320px] justify-center ">
            <div className="pt-2 flex flex-col justify-center px-2 sm:px-0">
              <h2 className="font-bold text-5xl max-w-[415px] leading-[55px]">
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
              <div className="max-w-[514px]">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  explicabo minima reprehenderit velit harum, ea nemo laboriosam
                  ex aliquid quae quisquam, ipsum eum nesciunt aspernatur dolore
                  rem, similique a minus.
                </p>
                <p className="mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem soluta maiores doloribus itaque nemo porro dolorum,
                  dolor consectetur tempore deserunt id voluptas illo inventore
                  et quisquam corrupti, animi optio maxime.
                </p>
              </div>
              <span className="inline-block font-bold text-base leading-8 mt-5">
                Episode page{" "}
                <span className=" inline-block bg-arrow w-[19px] h-[14px] mr-3 ml-1"></span>
              </span>
            </div>
            <img
              className="max-w-[525px] max-h-[519px] rounded-[10px] md:ml-auto"
              src={"/images/h1-podcastimg2.png"}
            />
          </div>
        </section>
        <section className="h-[954px] md:h-[831.52px] bg-[#F8F8F8] pt-[92px] mt-28 text-base">
          <h2 className="text-center font-bold text-5xl lading-[55px]">
            Top podcasts:
          </h2>
          <p className="text-center mt-5">
            Discover the selection of the most popular podcasts.
          </p>
          <PodcastList />
        </section>
        <section className="pt-[92px] mt-20 sm:mt-28 text-base">
          <div className="flex flex-row lg:justify-between max-w-[1300px] xl:px-6 mx-auto mb-14 md:px-11 justify-center">
            <h2 className="text-center font-bold text-5xl lading-[55px]">
              Essential episodes:
            </h2>
            <span className=" hidden lg:inline-block font-bold text-base leading-8 mt-5 cursor-pointer">
              View all episodes{" "}
              <span className=" inline-block bg-arrow w-[19px] h-[14px] mr-3 ml-1"></span>
            </span>
          </div>
          <EpisodeList />
        </section>
        <div className="mt-[140px] mb-[150px] relative">
          <img
            src="/images/h1-video-paralax-img-2048x758.png"
            alt="video_parrallex"
            className="max-w[1920px] max-h-[710.61px]"
          />
          <span className="inline-flex items-center justify-center w-[90px] h-[90px] rounded-[45px] bg-white absolute top-[50%] -mt-[55px] -ml-[55px] left-[50%]">
            <span className="inline-block bg-play w-[25px] h-[28px]"></span>
          </span>
        </div>
        <section className=" mb-24">
          <div className="flex flex-row md:justify-between max-w-[1300px] px-8 lg:px-6 mx-auto mb-14  justify-center">
            <h2 className="text-center font-bold text-5xl leading-[55px] ">
              Meet your hosts:
            </h2>
            <span className="hidden md:inline-block font-bold text-base leading-8 mt-5 cursor-pointer">
              View all of them{" "}
              <span className=" inline-block bg-arrow w-[19px] h-[14px] mr-3 ml-1"></span>
            </span>
          </div>
          <div>
            <HostList />
          </div>
        </section> */}
        <Footer />
      </body>
    </html>
  );
}
