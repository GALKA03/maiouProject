"use client";
import { Main } from "next/document";
 import s from "./styles/utils/loader1.module.scss"
// import s from "./styles/utils/loaderInfinity.module.scss"
// import { Triangle } from  'react-loader-spinner'
const Loading = () => {
    return (

  <div className={s.customLoader}>Loading Main...</div>

)
}
export default Loading
{/* <div id="loader-container" className={s.loaderContainer}>
      <div id="loader-circle" className={s.loaderCircle}></div>
      <div id="loader" className={s.loader}>
        <div id="circles" className={s.circles}></div>
      </div>
    </div> */}