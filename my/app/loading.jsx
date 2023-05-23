"use client";
import s from "./styles/utils/loader.module.scss"
// import { Triangle } from  'react-loader-spinner'
const Loading = () => {
    return (
//         <Triangle
//   height="80"
//   width="80"
//   color="#d3c202"
//   ariaLabel="triangle-loading"
//   wrapperStyle={{}}
//   wrapperClassName=""
//   visible={true}
// />
        <div className={s.customLoader}>Loading...</div>

)
}
export default Loading