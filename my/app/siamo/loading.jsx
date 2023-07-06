"use client";
// import s from "../styles/utils/loader.module.scss"
import s from "../styles/utils/loader1.module.scss";
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className={s.customLoader}></div>
    </div>
  );
};

export default Loading;
// <div className={s.customLoader}>Loading...</div>
