import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Footer from "./components/Footer";
import HostList from "./components/HostList";
import EpisodeList from "./components/EpisodeList";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* <section className="pt-[92px] mt-28 text-base">
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
