import "./styles/globals.scss";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Loading from "./loading";
// import { useSelectedLayoutSegment } from 'next/navigation';
// import { Providers } from "./provider";
import { Suspense } from "react";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const styling = {
  backgroundColor: "rgba(77, 73, 73, 0.84)",
  background:
    "linear-gradient(193deg, rgba(34, 33, 33, 0.91), rgba(77, 73, 73, 0.64) 66%, rgba(88, 87, 87, 0.68)), url('/productions/bg2x.jpg')",
  width: "100%",
  height: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  // padding:"30px",
};
const stylingMain = {
  background:"#303434",
background: "radial-gradient(circle, rgba(61, 64, 78, 0.959) 0%, rgba(145,145,145,1) 100%)"
}
export default function RootLayout(props) {
  return (
    <html lang="it">
      <body>
        {/* <Providers> */}
          <Suspense fallback={<Loading />}>
            <div className="w-full h-full">
              <header className=" block md:flex  bg-cyan-800 justify-between">
                <Nav />
              </header>
              <main className="p-0" style={stylingMain}>
                {props.children}
        {props.modal}
              </main>
              <footer
                style={styling}
                className="w-full h-full p-2 flex  justify-around items-center flex-wrap text-white text-lg"
              >
                <Footer />
              </footer>
            </div>
          </Suspense>
        {/* </Providers> */}
      </body>
    </html>
  );
}
