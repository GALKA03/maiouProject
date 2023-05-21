import Image from "next/image";
const Productions = () => {



  const styling = {
    backgroundColor: "rgba(77, 73, 73, 0.64)",
   background: "linear-gradient(193deg, rgba(34, 33, 33, 0.91), rgba(77, 73, 73, 0.34) 16%, rgba(88, 87, 87, 0.28)), url('/productions/bg2x.jpg')",
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    padding:"30px",
  };
  return (
    <section style={styling} >
      <h2 className="text-3xl mb-10  font-bold text-white text-center">
        La nostra produzione
      </h2>
      <ul className="w-full  block  md:flex justify-between items-center mx-auto max-w-max sm:justify-center">
        <li >
          {" "}
          <Image
            src="/productions/1.jpg"
            alt="img1"
            width={200}
            height={60}
            className="mb-2 md:mr-10"

          />
        </li>
        <li>
          {" "}
          <Image
            src="/productions/3.jpg"
            alt="img2"
            width={300}
            height={60}
            className="mb-2 md:mr-10"
          />
        </li>
        <li>
          {" "}
          <Image src="/productions/2.jpg" alt="img3" width={200} height={60} />
        </li>
      </ul>
{/* 
        <ul className="inline-block text-center  p-10 md:hidden" style={{ margin: '0 auto', display: 'table' }}>
        <li>
          {" "}
          <Image
            src="/productions/1.jpg"
            alt="img1"
            width={200}
            height={60}
            className="mb-10 ml-10"

          />
        </li>
        <li>
          {" "}
          <Image
            src="/productions/3.jpg"
            alt="img2"
            width={300}
            height={60}
            className="mb-10 "
          />
        </li>
        <li>
          {" "}
          <Image src="/productions/2.jpg" alt="img3" width={200} height={60} className="ml-10" />
        </li>
      </ul> */}
    </section>
  );
};
export default Productions;
