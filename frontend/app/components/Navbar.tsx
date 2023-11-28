"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="absolute w-[100%] z-40 top-[20px] sm:top-[-30px] flex flex-wrap justify-between items-center sm:h-28  px-2 sm:px-11 font-lato lg:pt-5">
      <div className="order-1 w-3/6 sm:w-fit">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={131.81}
          height={19.98}
        />
      </div>
      <div
        className={` ${
          isOpen ? "block p-2 mt-2" : "hidden"
        } order-4 sm:order-2 w-full sm:w-fit sm:bg-inherit text-[#d2d0db] sm:text-inherit bg-black sm:flex`}
      >
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex text-[15px] font-bold`}
        >
          <li className="pr-9 cursor-pointer border-b-[1px] border-slate-200 hover:text-slate-400 sm:border-0">
            Homes
          </li>
          <li className="pr-9 cursor-pointer border-b-[1px] border-slate-200 hover:text-slate-400 sm:border-0">
            Pages
          </li>
          <li className="pr-9 cursor-pointer border-b-[1px] border-slate-200 hover:text-slate-400 sm:border-0">
            Podcast
          </li>
          <li className="pr-9 cursor-pointer border-b-[1px] border-slate-200 hover:text-slate-400 sm:border-0">
            Blog
          </li>
          <li className="cursor-pointer border-b-[1px] border-slate-200 hover:text-slate-400 sm:border-0">
            Shop
          </li>
        </ul>
      </div>
      <div className="flex w-3/6 sm:w-32 order-3 sm:justify-center">
        <div className="hidden sm:flex items-center ">
          <form action="">
            <div className="flex flex-row bg-inherit rounded-xl overflow-hidden px-2 items-center ">
              <img
                className="w-[15px] h-[21px] "
                src="/images/search_icon.png"
                alt="search icon"
              />
              <input
                className="border-none w-full bg-inherit text-[#F8F8F8] pl-1 outline-none"
                type="text"
                placeholder="Search"
              />
            </div>

            {/* <span className="inline-block pl-2">Search</span> */}
          </form>
        </div>
        <button
          className="ml-auto sm:ml-0 sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
