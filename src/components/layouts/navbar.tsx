"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { dataHeader, IMAGE_LOGO } from "@/constants";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();

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

  const getBackgroundColor = () => {
    if (isHomePage) {
      return isScrolled ? "bg-[#0d2240] shadow-md py-2" : "bg-transparent py-4";
    } else {
      return isScrolled ? "bg-[#0d2240] shadow-md py-2" : "bg-[#0d2240] py-4";
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const activeLinkStyle = (href: string) => {
    return pathname === href ? "text-blue-400" : "";
  };

  return (
    <nav
      className={`fixed z-20 top-0 w-full transition-all duration-300 text-white ${getBackgroundColor()}`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Changed to align left */}
          <div className="flex-shrink-0">
            <Link href={"/"} className="flex  justify-start items-start">
              <Image
                src={'/logo.png'}
                alt="logo universe h2h"
                width={700}
                height={80}
                priority
                className="p-0 max-w-[200px] object-cover"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-end">
            <div className="flex items-center space-x-1 lg:space-x-4">
              {dataHeader.map((item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  className={`relative group py-2 px-2 lg:px-3 ${activeLinkStyle(
                    item.href
                  )}`}>
                  <p className="text-sm xl:text-base font-medium hover:text-blue-300 transition-colors whitespace-nowrap">
                    {item.label}
                  </p>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
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
        className={`md:hidden fixed inset-0 bg-[#0d2240]/95 z-30 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="flex flex-col h-full pt-20 px-4">
          <Button
            size="icon"
            className="absolute top-4 right-4 hover:bg-gray-700/20 bg-transparent text-white size-10"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu">
            <X className="size-5" />
          </Button>

          {dataHeader.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              onClick={handleLinkClick}
              className={`block ${activeLinkStyle(item.href)}`}>
              <p className="px-4 py-3 text-lg font-medium border-b border-blue-800/20 hover:bg-blue-800/20 rounded-md my-1 transition-colors">
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
