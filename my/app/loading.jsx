"use client";
import { Main } from "next/document";
 import s from "./styles/utils/loader1.module.scss"
// import s from "./styles/utils/loaderInfinity.module.scss"
// import { Triangle } from  'react-loader-spinner'
const Loading = () => {
    return (

 <div className="flex justify-center items-center h-screen">
      <div className={s.customLoader}></div>
    </div>
)
}
export default Loading
