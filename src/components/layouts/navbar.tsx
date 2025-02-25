"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon, Menu, X } from "lucide-react";
import { dataHeader } from "@/constants";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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
      className={`sticky z-20 top-0 w-full  flex items-center justify-between  transition-colors duration-300 text-white ${
        isMenuOpen && "bg-[#0d2240]"
      } ${isScrolled ? "bg-[#0d2240]" : " bg-[#0d2240]"}`}>
      <div className="container flex justify-between h-full py-8">
        <Link href={"/"} className="text-2xl ">
          VazzStore
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
            className="bg-transparent dark:bg-black dark:text-white ring-1 ring-gray-700 bg-white text-black size-7"
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
        <div className="absolute top-full left-0 right-0 bg-card shadow-lg md:hidden  overflow-hidden">
          {dataHeader.map((item) => (
            <Link href={item.href} key={item.href}>
              <p className="px-4 py-2    text-xl hover:bg-gray-100 dark:hover:bg-neutral-700">
                {item.label}
              </p>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          className="bg-transparent dark:bg-black dark:text-white ring-1 ring-gray-700 bg-white text-black size-7">
          <SunIcon className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Header;
