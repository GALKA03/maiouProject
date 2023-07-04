"use client";
// import s from "./styles/utils/loader.module.scss"
import styles from "./styles/utils/loaderInfinity.module.scss"
// import { Triangle } from  'react-loader-spinner'
const Loading = () => {
    return (
<div id="loader-container" className={styles.loaderContainer}>
      <div id="loader-circle" className={styles.loaderCircle}></div>
      <div id="loader" className={styles.loader}>
        <div id="circles" className={styles.circles}></div>
      </div>
    </div>
  // <div className={s.customLoader}>Loading...</div>

)
}
export default Loading