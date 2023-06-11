import { Heading } from "./components/Heading"
import { useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head";
import s from "./styles/utils/404.module.scss";


const Error = () => {
    const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);
    return (
    //     <div className={styles.wrapper}>
    //   <Head>
    //     <title>Error</title>
    //   </Head>
    //   <div>
    //     <Heading text="404" />
    //     <Heading tag="h2" text="Something is going wrong..." />
    //   </div>
    // </div>
      <div className={s.errorContainer}>
        <p id="error" className={s.errorText}>E <span>r</span>ror</p>
        <p id="code">4<span>0</span><span>4</span></p>
    </div>
    )
}
export default Error