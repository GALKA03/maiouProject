'use client';
import Link from "next/link";
import Image from "next/image";
const Nav = () => {
  return (
      <>
          <div   className="mx-10">
      <Image
        src="/logo.png"
        alt="logo"
        width={160}
        height={160}
        className="object_contain me-auto animate-pulse"
      /></div>
      <nav className="text-xl  font-semibold text-cyan-50 w-full h-24 flex flex-wrap justify-center items-center w-8/12">
       
            <Link href="/" className="transition duration-500  w-1/4 h-full py-8 flex items-center justify-center hover:text-teal-200 hover:bg-cyan-900  active:bg-cyan-600 focus:outline-none  focus:bg-cyan-900">
              HOME
            </Link>
         
            <Link href="/siamo" className="transition duration-500 w-1/4 h-full py-8 flex items-center justify-center hover:text-teal-200 hover:bg-cyan-900  active:bg-cyan-600 focus:outline-none  focus:bg-cyan-900">CHI SIAMO</Link>{" "}
        
            <Link href="/progetti" className="transition duration-500 w-1/4 h-full py-8 flex items-center justify-center hover:text-teal-200 hover:bg-cyan-900  active:bg-cyan-600 focus:outline-none  focus:bg-cyan-900 ">PROGETTI</Link>{" "}
          
            <Link href="/contatti" className="transition duration-500 w-1/4 h-full py-8 flex items-center justify-center hover:text-teal-200 py-40px hover:bg-cyan-900  active:bg-cyan-600 focus:outline-none  focus:bg-cyan-900">CONTATTACI</Link>
          
          </nav>
    
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