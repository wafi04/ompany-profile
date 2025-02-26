"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { dataHeader } from "@/constants";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed z-20 top-0 w-full  flex items-center justify-between  transition-colors duration-300 text-white ${
        isMenuOpen && "bg-[#0d2240]"
      } ${isScrolled ? "bg-[#0d2240]" : "bg-transparent"}`}>
      <div className="container flex justify-between  py-4">
        <Link href={"/"} className="text-2xl font-bold">
          UniverseH2H
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {dataHeader.map((item) => (
            <Link href={item.href} key={item.href} className="relative group">
              <p className="text-sm">{item.label}</p>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        <div className="md:hidden flex items-center space-x-2 ">
          <Button
            size="icon"
            className="  dark:text-white hover:bg-gray-700 bg-transparent text-black size-7"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="size-4" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0d2240] shadow-lg md:hidden  overflow-hidden">
          {dataHeader.map((item) => (
            <Link href={item.href} key={item.href}>
              <p className="px-8 py-4   text-xl hover:bg-gray-100 dark:hover:bg-blue-800">
                {item.label}
              </p>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
export default Header;

{
  /* <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">
                Subscribe to our newsletter
              </h3>
              <p className="text-gray-400 text-sm">
                Get the latest updates and offers
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 bg-blue-800 text-white rounded-l-md focus:outline-none w-full md:w-64"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-4 py-3 rounded-r-md transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div> */
}
