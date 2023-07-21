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
    <div className="pt-4">
      <div className="absolute max-xs:visible invisible right-4">
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
          className="absolute w-72 h-full z-40 bg-black"
        >
          <ul className="flex flex-col relative list-none max-xs:px-10 max-xs:mt-24">
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
      {/* <nav
        className="absolute w-60 h-full z-30 left-0 top-0"
      >
        <ul className="relative m-0 list-none">
          <li className="relative">
            <Link href="/" className="flex h-12 cursor-pointer items-center text-white">
              <HomeIcon />
              <span>Home</span>
            </Link>
          </li>
          <li className="relative">
            <Link href="/discover" className="flex h-12 cursor-pointer items-center text-white">
              <DiscoverIcon />
              <span>Discover</span>
            </Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default Nav;
