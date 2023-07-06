"use client"
import Link from "next/link";
import { ErrorSvg } from "./styles/svgs/index";
import s from "./styles/utils/errorPage.module.scss"




export default function Error({ error, reset }) {
  return (
    <div className=" block w-[700px] h-[600px] ml-auto mr-auto">
     <ErrorSvg className="absolute top-1/2 left-1/2 -mt-40 -ml-96 md:-mt-20 md:-ml-40" />
      <div className={s.messageBox}>
        <h1>{error.message || 'Something went wrong'}</h1>
        <p className="text-3xl ">Page not found</p>
        <div className={s.buttonsCon}>
          <div className={s.actionLinkWrap}>
            <button
              className="min-w-full text-center text-lg bg-cyan-800"
              onClick={() => reset()}
            >
              Try again
            </button>
            <Link href="/" className="block min-w-full h-2 text-center text-lg bg-cyan-800">
              Go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

//  <div className="flex flex-col items-center justify-center h-screen">
//       <div className="bg-cyan-900 p-8 rounded-lg w-[600px] h-[400px] shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">
//           {error.message || 'Something went wrong'}
//         </h2>
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 mb-4"
//           onClick={() => reset()}
//         >
//           Try again
//         </button>
//         <Link href="/"className="text-blue-500 hover:text-blue-600">
//           Go home
//         </Link>
//       </div>
//     </div>