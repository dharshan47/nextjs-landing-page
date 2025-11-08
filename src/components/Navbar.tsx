"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiNextjsFill } from "react-icons/ri";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-20 items-center gap-6 px-6 py-3 rounded-full bg-black/60 backdrop-blur-md border border-zinc-800 text-white">
        <Link href="/" className="text-4xl">
          <RiNextjsFill />
        </Link>
        <Link href="/" className="hover:text-gray-300 transition-colors">
          Features
        </Link>
        <Link href="/" className="hover:text-gray-300 transition-colors">
          Pricing
        </Link>
        <Link href="/" className="hover:text-gray-300 transition-colors">
          Solution
        </Link>
        <Link href="/" className="hover:text-gray-300 transition-colors">
          Contact
        </Link>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-20 bg-black/60 backdrop-blur-md border-b border-zinc-800 flex items-center justify-between px-4 py-3 text-white">
        {/* Logo */}
        <Link href="/" className="text-3xl">
          <RiNextjsFill />
        </Link>

        {/* Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden fixed top-14 left-0 right-0 z-15 bg-black/60 backdrop-blur-md border-b border-zinc-800 text-white ">
          <nav className="  flex flex-col space-y-4 py-6 px-6 text-base font-medium text-right">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 transition-colors"
            >
              Solution
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
