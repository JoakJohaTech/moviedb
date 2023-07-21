'use client';

import Link from "next/link";
import { useState } from "react";
import HomeIcon from '@/assets/Icons/HomeIcon.svg';
import MenuIcon from '@/assets/Icons/MenuIcon.svg';
import CrossIcon from '@/assets/Icons/CrossIcon.svg';
import DiscoverIcon from '@/assets/Icons/DiscoverIcon.svg';
import useWindowDimensions from "@/app/hooks/useWindowDismentions";

const Nav = () => {

  const [mobileMenu, isMobileMenu] = useState(false);
  const { width } = useWindowDimensions();

  const toggleMobileMenu = () => {
    isMobileMenu((mobileMenu) => !mobileMenu);
  };

  return(
    <div className="pt-4 sm:border-r-2 sm:w-full">
      <div className="absolute max-xs:visible invisible right-0 z-40">
        <button className="cursor-pointer" onClick={toggleMobileMenu}>
          {mobileMenu &&
            <CrossIcon />
          }
          {!mobileMenu &&
            <MenuIcon />
          }
        </button>
      </div>
      {mobileMenu &&
        <nav
          className="absolute w-80 h-full z-40 bg-black"
        >
          <ul className="flex flex-col relative list-none px-10 max-xs:mt-24">
            <li className="relative mb-4">
              <Link href="/" className="flex h-12 cursor-pointer items-center text-white">
                <HomeIcon />
                <span className="ml-2">Home</span>
              </Link>
            </li>
            <li className="relative">
              <Link href="/discover" className="flex h-12 cursor-pointer items-center text-white">
                <DiscoverIcon />
                <span className="ml-2">Discover</span>
              </Link>
            </li>
          </ul>
        </nav>
      }
      {width >= 900 && 
        <nav
          className="relative w-72 h-full bg-black flex items-center"
        >
          <ul className="flex flex-col relative list-none px-10">
            <li className="relative mb-4">
              <Link href="/" className="flex h-12 cursor-pointer items-center text-white">
                <HomeIcon />
                <span className="ml-2">Home</span>
              </Link>
            </li>
            <li className="relative">
              <Link href="/discover" className="flex h-12 cursor-pointer items-center text-white">
                <DiscoverIcon />
                <span className="ml-2">Discover</span>
              </Link>
            </li>
          </ul>
        </nav>
      }
    </div>
  );
};

export default Nav;
