import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Footer from "./components/Footer";
import HostList from "./components/HostList";
import EpisodeList from "./components/EpisodeList";
import PodcastList from "./components/PodcastList";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";

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
        <Footer />
      </body>
    </html>
  );
}
