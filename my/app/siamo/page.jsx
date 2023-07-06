import Loading from "../loading";
import AboutSection from "./(components)/AboutSection"
import { Suspense } from "react";
const Siamo = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <AboutSection />
        </Suspense>
    )
}
export default Siamo