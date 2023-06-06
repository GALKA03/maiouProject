"use client";
import s from "../styles/utils/loader.module.scss"
// import { Triangle } from  'react-loader-spinner'
const Loading = () => {
    return (
        // <div className="flex justify-center items-center h-screen">  
        <div style={{ position:"relative"}}>
  <div className={s.customLoader}>Loading...</div>
</div>
// </div>
)
}
export default Loading