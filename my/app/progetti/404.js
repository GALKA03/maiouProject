import { Heading } from "./components/Heading"
import { useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head";
import s from "./styles/utils/404.module.scss";

function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}
 
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
 
export default Error