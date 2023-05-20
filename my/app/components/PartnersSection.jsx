'use client';
import Image from "next/image";
const PartnersSections = () => {
const partners = [
    {id:1, src: "/partners/partners1.png", alt: "fratelligianuzzi", href: "https://fratelligianuzzi.com/" },
    {id:2, src: "/partners/partners2.png", alt: "ziniimpianti", href: "https://ziniimpianti.com/" },
    {id:3, src: "/partners/partners3.png", alt: "tecnositer", href: "https://www.tecnositer.com/" },
    {id:4, src: "/partners/partners4.png", alt: "idraulicabaiguera", href: "https://idraulicabaiguera.it/" },
    {id:5, src: "/partners/partners5.png", alt: "pyrocrystal", href: "http://www.pyrocrystal.it/" },
  ];

const styling = {
    backgroundColor: "rgba(77, 73, 73, 0.64)",
    background: " url('/productions/bg2x.jpg')",
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    // padding:"30px",
  };
  return (
    <section style={styling} className="w-full h-full">
          <ul className=" flex item-baseline justify-between flex-wrap py-10 px-10 ">
              {partners.map(({ id, src, alt, href }) => (
                  <li key={id} className="py-10 hover:scale-125 transition duration-500" >
                      <a href={href} >
                          <Image src={src} alt={alt}  width={id === 1 || id === 2 ? 150 : id === 3 || id === 4 ? 300 : id === 5 ? 400 : 100} height={20} />
                      </a>
                  </li>

              ))
                  
              }
     </ul>
    </section>
  );
};
export default PartnersSections
//   <section className="w-full h-full">
//       <ul>
//         <li>
//            <a href="https://fratelligianuzzi.com/">
//             <Image src="/partners/perpartners1.png" alt="fratelligianuzzi"  width={80} height={20}></Image>
//          </a>
//         </li>
//         <li>
//           <a href="https://ziniimpianti.com/">
//             <Image src="/perpartners2.png" alt="ziniimpianti"  width={80} height={20}></Image>
//           </a>
//         </li>
//         <li>
//           <a href="https://www.tecnositer.com/">
//             <Image src="/perpartners3.png" alt="tecnositer"  width={80} height={20}></Image>
//           </a>
//         </li>
//         <li>
//           <a href="https://idraulicabaiguera.it/">
//             <Image src="/perpartners4.png" alt="idraulicabaiguera"  width={80} height={20}></Image>
//           </a>
//         </li>
//         <li>
//           <a href="http://www.pyrocrystal.it/">
//             <Image src="/perpartners5.png" alt="pyrocrystal"  width={80} height={20}></Image>
//           </a>
//         </li>
//       </ul>
//     </section>