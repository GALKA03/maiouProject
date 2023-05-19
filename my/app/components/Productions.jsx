import Image from "next/image";
const Productions = () => {
  const styling = {
    backgroundColor: "rgba(77, 73, 73, 0.64)",
    background: " url('/productions/bg2x.jpg')",
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    padding:"30px",
  };
  return (
    <section style={styling} >
      <h2 className="text-3xl font-bold text-teal-950 text-center">
        La nostra produzione
      </h2>
      <ul className=" p-10 flex justify-around items-center">
        <li>
          {" "}
          <Image
            src="/productions/1.jpg"
            alt="img1"
            width={200}
            height={60}
            className="mb-10"
          />
        </li>
        <li>
          {" "}
          <Image
            src="/productions/3.jpg"
            alt="img2"
            width={300}
            height={60}
            className="mb-10"
          />
        </li>
        <li>
          {" "}
          <Image src="/productions/2.jpg" alt="img3" width={200} height={60} />
        </li>
      </ul>
    </section>
  );
};
export default Productions;
