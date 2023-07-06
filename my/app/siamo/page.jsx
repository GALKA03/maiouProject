import Loading from "../loading";
import AboutSection from "./(components)/AboutSection"
import { Suspense } from "react";
import ScrollUpBtn from "../components/ScrollUp";

const Siamo = () => {
    return (
        <>
        <Suspense fallback={<Loading/>}>
            <AboutSection />
        </Suspense>
            <ScrollUpBtn />
            </>
    )
}
export default Siamo