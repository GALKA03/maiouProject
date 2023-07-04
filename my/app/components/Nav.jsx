"use client";
import { useState } from "react";
import { MenuMobil, CloseBtn } from "./svgs";
import { Suspense } from 'react';
import Link from "next/link";
import Image from "next/image";
const Nav = () => {
  const [navBar, setNavbar] = useState(false);

  return (
    <>
      
      <div className="mx-10 object_contain me-auto animate-pulse">
        <Image
          src="/logo.png"
          alt="logo"
          width={160}
          height={160}
          className="hidden md:block object_contain me-auto animate-pulse"
        />
      </div>
      
      <nav className="hidden text-xl  font-semibold text-cyan-50 w-full h-24 md:flex flex-wrap justify-center items-center w-8/12">
        <Link
          href="/"
          className="transition duration-500  w-1/4 h-full py-8 flex items-center justify-center hover:text-teal-200 hover:bg-cyan-900  active:bg-cyan-600,text-teal-200 focus:outline-none  focus:bg-cyan-900"
        >
          HOME
        </Link>
        <Link
          href="/siamo"
          className="transition duration-500 w-1/4 h-full py-8 flex items-center justify-center hover:text-teal-200 hover:bg-cyan-900  active:bg-cyan-600 focus:outline-none  focus:bg-cyan-900"
        >
          CHI SIAMO
        </Link>{" "}
        <Link
          href="/progetti"
          className="transition duration-500 w-1/4 h-full py-8 flex items-center justify-center hover:text-teal-200 hover:bg-cyan-900  active:bg-cyan-600 focus:outline-none  focus:bg-cyan-900 "
        >
          PROGETTI
        </Link>{" "}
        <Link
          href="/servizi"
          className="transition duration-500 w-1/4 h-full py-8 flex items-center justify-center hover:text-teal-200 py-40px hover:bg-cyan-900  active:bg-cyan-600 focus:outline-none  focus:bg-cyan-900"
        >
          SERVIZI
        </Link>
      </nav>
      <div className="md:hidden">
        <button
          className="inline-block text-white  my-1/2  "
          onClick={() => setNavbar(!navBar)}
        >
          {navBar ? (
            <CloseBtn className="z-50 w-10 h-10  absolute hover:scale-125 transition duration-500 top-0 right-0" style={{ fill: "transparent" }} />
          ) : (
            <MenuMobil className=" absolute top-7 right-5 border-2 border-amber-500 hover:border-none  active:border-none" />
          )}
        </button>
      </div>
      {navBar && <div className="relative w-full ">
        <div className=" flex-1 text-cyan-300 pb-3 mt-8 md:hidden">
          <Link
            href="/"
            className=" transition duration-500  h-full py-8 flex items-center justify-center hover:text-white hover:bg-cyan-900  active:bg-cyan-600,text-teal-200 focus:outline-none  focus:bg-cyan-900"
            onClick={() => setNavbar(!navBar)}
          >
            HOME
          </Link>
          <Link
            href="/siamo"
            className="transition duration-500 h-full py-8 flex items-center justify-center hover:text-white hover:bg-cyan-900  active:bg-cyan-600 focus:outline-none  focus:bg-cyan-900"
            onClick={() => setNavbar(!navBar)}
          >
            CHI SIAMO
          </Link>{" "}
          <Link
            href="/progetti"
            className="transition duration-500  h-full py-8 flex items-center justify-center hover:text-white hover:bg-cyan-900  active:bg-cyan-600 focus:outline-none  focus:bg-cyan-900 "
            onClick={() => setNavbar(!navBar)}
          >
            PROGETTI
          </Link>{" "}
          <Link
            href="/contatti"
            className="transition duration-500  h-full py-8 flex items-center justify-center hover:text-white py-40px hover:bg-cyan-900  active:bg-cyan-600 focus:outline-none  focus:bg-cyan-900"
          >
            CONTATTACI
          </Link>
        </div>
      </div>}
    </>
  );
};
export default Nav;
//  <nav className="text-xl font-semibold text-cyan-50 w-full h-24">
//         <ul className="flex justify-around flex-wrap items-center justify-items-center nav-list h-full ">
//           <li className=" h-full  hover:bg-cyan-900  active:bg-cyan-600 focus:outline-none  focus:bg-cyan-900 items-center">
//             <Link href="/" className=" my-12 hover:text-teal-200 items-center">
//               HOME
//             </Link>
//           </li>
//           <li className=" h-full  hover:bg-cyan-900  active:bg-cyan-600 focus:outline-none  focus:bg-cyan-900 items-center">
//             <Link href="/siamo" className="h-full hover:text-teal-200 hover:bg-cyan-900  active:bg-cyan-600 focus:outline-none  focus:bg-cyan-900">CHI SIAMO</Link>{" "}
//           </li>
//           <li className=" h-full  hover:bg-cyan-900  active:bg-cyan-600 focus:outline-none  focus:bg-cyan-900 items-center">
//             <Link href="/progetti" className="h-full hover:text-teal-200 hover:bg-cyan-900  active:bg-cyan-600 focus:outline-none  focus:bg-cyan-900">PROGETTI</Link>{" "}
//           </li>
//           <li className=" h-full  hover:bg-cyan-900  active:bg-cyan-600 focus:outline-none  focus:bg-cyan-900 items-center">
//             <Link href="/contatti" className="h-full hover:text-teal-200 hover:bg-cyan-900  active:bg-cyan-600 focus:outline-none  focus:bg-cyan-900">CONTATTACI</Link>
//           </li>
//         </ul>
//           </nav>
