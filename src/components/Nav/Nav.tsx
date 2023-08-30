'use client';

import Link from "next/link";
import { useState } from "react";
import HomeIcon from '@/assets/Icons/HomeIcon.svg';
import MenuIcon from '@/assets/Icons/MenuIcon.svg';
import CrossIcon from '@/assets/Icons/CrossIcon.svg';
import DiscoverIcon from '@/assets/Icons/DiscoverIcon.svg';

const Nav = () => {

  const [mobileMenu, isMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    isMobileMenu((mobileMenu) => !mobileMenu);
  };

  return(
    <div className="relative sm:w-full md:w-1/5 border-solid border-r-2">
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
      <nav
        className="flex flex-col relative h-full md:justify-center md:px-6"
      >
        <ul className="relative list-none max-xs:mt-24">
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
    </div>
  );
};

export default Nav;
