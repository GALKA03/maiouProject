"use client";
import { useState } from "react";
import { usePathname } from 'next/navigation'
import { MenuMobil, CloseBtn } from "../../public/svgs";
import { Suspense } from 'react';
import Link from "next/link";
import Image from "next/image";
const Nav = () => {
  const [navBar, setNavbar] = useState(false);
  const pathname = usePathname()
  
  const navLinks = [
    { id: 1, title: "HOME", url: "/" },
    { id: 2, title: "CHI SIAMO", url: "/siamo" },
    { id: 3, title: "PROGETTI", url: "/progetti" },
    { id: 4, title: "SERVIZI", url: "/servizi" },
  
  ];

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
      
      <nav className="hidden text-cyan-50 text-xl font-semibold w-full h-24 md:flex flex-wrap justify-center items-center">
        {navLinks.map((link) => {
          const isActive = pathname === link.url;

          return (
            <Link href={link.url} key={link.title} className={`transition duration-500 w-1/4 h-full py-8 flex items-center justify-center ${isActive ? 'text-teal-900 bg-cyan-600' : 'text-cyan-50 bg-cyan-800 focus:outline-none focus:bg-cyan-900'}`}>
                {link.title}
            </Link>
          );
        })}
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
{navBar && (
    <div className="flex-1 text-cyan-300 pb-3 mt-8 md:hidden">
      {navLinks.map((link) => (
        <Link
          key={link.id}
          href={link.url}
          className="transition duration-500 h-full py-8 flex items-center justify-center hover:text-white hover:bg-cyan-900 active:bg-cyan-600 focus:outline-none focus:bg-cyan-900"
          onClick={() => setNavbar(!navBar)}
        >
          {link.title}
        </Link>
      ))}
    </div>
  )}
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
