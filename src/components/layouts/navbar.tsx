"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { dataHeader } from "@/constants";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  // Check if it's the homepage
  const isHomePage = pathname === "/";

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

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Determine background color based on page and scroll state
  const getBackgroundColor = () => {
    if (isHomePage) {
      return isScrolled ? "bg-[#0d2240] shadow-md py-2" : "bg-transparent py-4";
    } else {
      return isScrolled ? "bg-[#0d2240] shadow-md py-2" : "bg-[#0d2240] py-4";
    }
  };

  return (
    <nav
      className={`fixed z-20 top-0 w-full transition-all duration-300 text-white ${getBackgroundColor()}`}>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href={"/"} className="text-xl sm:text-2xl font-bold">
            UniverseH2H
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
            {dataHeader.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="relative group py-2">
                <p className="text-sm lg:text-base font-medium">{item.label}</p>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              size="icon"
              className="dark:text-white hover:bg-gray-700/20 bg-transparent text-white size-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
              {isMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen
            ? "max-h-screen opacity-100 border-t border-blue-800/30"
            : "max-h-0 opacity-0"
        }`}>
        <div className="bg-[#0d2240] shadow-lg px-4 py-2">
          {dataHeader.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              onClick={handleLinkClick}
              className="block">
              <p className="px-4 py-3 text-base font-medium border-b border-blue-800/20 hover:bg-blue-800/20 rounded-md my-1 transition-colors">
                {item.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
