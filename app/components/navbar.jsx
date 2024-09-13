"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const menu = [
  {
    label: "About",
    href: "/about",
    button: false,
  },
  {
    label: "Projects",
    href: "/project",
    button: false,
  },
  {
    label: "Resume",
    href: "/resume",
    button: false,
  },
  {
    label: "Constact me",
    href: "/contact",
    button: true,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // <div className="w-full border flex justify-center sticky top-0 left-0 z-50 bg-white">
    //   <div className="w-10/12 flex justify-between items-center shadow-sm sticky top-0 left-0">
    //     <Link href="/" className="text-2xl font-bold">
    //       <div className="flex justify-center items-center">
    //         <Image src="/mzj.png" alt="brand-logo" width={80} height={80} />
    //         Zeya Imran
    //       </div>
    //     </Link>
    //     <div>
    //       {menu.map((item, i) => (
    //         <Link
    //           href={item.href}
    //           key={i}
    //           className={
    //             item.button
    //               ? "bg-blue-600 px-4 py-2 text-white rounded-lg"
    //               : "mr-16"
    //           }
    //         >
    //           {item.label}
    //         </Link>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="w-full border bg-white sticky top-0 left-0 z-50">
      {/* Mobile Navbar */}
      <div className="w-full flex justify-between items-center py-4 px-4 md:hidden">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <Image src="/mzj.png" alt="brand-logo" width={50} height={50} />
          <span className="ml-2">Zeya Imran</span>
        </Link>
        <button
          className="text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Desktop Navbar */}
      <div className="w-10/12 mx-auto hidden md:flex md:justify-between md:items-center md:py-4">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <Image src="/mzj.png" alt="brand-logo" width={80} height={80} />
          <span className="ml-2">Zeya Imran</span>
        </Link>
        <div className="flex items-center">
          {menu.map((item, i) => (
            <Link
              href={item.href}
              key={i}
              className={
                item.button
                  ? "bg-blue-600 px-4 py-2 text-white rounded-lg"
                  : "mr-16"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white shadow-lg`}
      >
        <div className="flex flex-col items-center py-4">
          {menu.map((item, i) => (
            <Link
              href={item.href}
              key={i}
              className={`block w-full text-center py-2 ${
                item.button ? "bg-blue-600 text-white" : "text-black"
              }`}
              onClick={() => setIsOpen(false)} // Close the menu on item click
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
