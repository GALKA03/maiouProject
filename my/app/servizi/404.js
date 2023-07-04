// import { Heading } from "./components/Heading"
// import { useEffect } from "react"
// import { useRouter } from "next/router"
// import Head from "next/head";
// import s from "./styles/utils/404.module.scss";

function Error({ statusCode }) {
      return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-indigo-600 to-blue-400">
      <div className="px-40 py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-blue-600 text-9xl">404</h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="text-red-500">Oops!</span> Page not found
          </h6>

          <p className="mb-8 text-center text-gray-500 md:text-lg">
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
          <button
            onClick={reset}
            className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
          >
            Reset
          </button>
          <Link href="/">Go Home</Link>
        </div>
      </div>
    </div>
  );
}
 
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
 
export default Error