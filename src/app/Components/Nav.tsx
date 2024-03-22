"use client";
import Image from "next/image";
import Link from "next/link";
import {
  SearchIcon,
  BookmarkIcon,
  UserIcon,
  ClipboardIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  return (
    <li>
      <Link href={href}>
        <p>{children}</p>
      </Link>
    </li>
  );
};

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="w-full bg-inherit mx-20 text-black">
      <div className="flex items-center justify-between font-semibold text-xs font-noto-sans py-4 px-4 md:px-0 bg-inherit border-b border-black">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Apponovi Logo"
            width={92}
            height={18}
            priority
            className="cursor-pointer"
          />
          <ul className="hidden md:flex   items-center space-x-8 ml-8">
            <NavItem href="/">HOME</NavItem>
            <NavItem href="/pages">PAGES</NavItem>
            <NavItem href="/shop">SHOP</NavItem>
            <NavItem href="/portfolio">PORTFOLIO</NavItem>
            <NavItem href="/blog">BLOG</NavItem>
          </ul>
        </div>
        <div className="flex items-center space-x-6 md:hidden">
          <div onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6">
        <div className="flex items-center space-x-2">
            <p className="pt-0">SEARCH</p>
            <SearchIcon className="w-3  h-3" />
          </div>

          <div className="flex items-center ">
            <p className="pt-0">CART</p>
            <ClipboardIcon className="w-4 ml-2 h-4" />
            <p className="text-[8px] pt-1 ">0</p>
          </div>

          <div className="flex items-center ">
            <BookmarkIcon className="w-4 h-4" />
            <p className="text-[8px] pt-1">0</p>
          </div>

          <div className="flex items-center ">
            <UserIcon className="w-4  font-normal h-4" />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-inherit  py-4 px-4">
          <ul className="flex flex-col items-start space-y-4">
            <NavItem href="/">HOME</NavItem>
            <NavItem href="/pages">PAGES</NavItem>
            <NavItem href="/shop">SHOP</NavItem>
            <NavItem href="/portfolio">PORTFOLIO</NavItem>
            <NavItem href="/blog">BLOG</NavItem>
          </ul>
        </div>
      )}
    </main>
  );
};

export default Nav;
