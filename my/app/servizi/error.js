"use client"
import Link from "next/link";
import { ErrorSvg } from "../styles/svgs";
import s from "../styles/utils/errorPage.module.scss"




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

