"use client";
import s from "../styles/utils/loader1.module.scss"
// import { Triangle } from  'react-loader-spinner'
const Loading = () => {

    return (
        <div className="flex justify-center items-center h-screen">
      <div className={s.customLoader}>progetti...</div>
  </div>)
};

export default Loading;