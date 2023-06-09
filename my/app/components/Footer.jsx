import s from "../styles/layout/footer.module.scss"
import Image from "next/image";
import { Facebook,Linkedin,Twitter,Instagram , MapPin} from "../../public/svgs";
// npm uninstall expressexport {facebook} from "../../public/SVG/facebook.svg";
 const Footer = () => {
//     if (!socials) {
//     return null;
//   }
    // const { id, icon, path } = socials;
const socialMediaIcons = [
  { id: 1, icon: <Facebook className="text-blue-700" />, alt: "Facebook",href:"#" },
    { id: 2, icon: <Twitter className="text-blue-400"/>, alt: "Twitter" ,href:"#"},
    { id: 3, icon: <Linkedin className="text-white"/>, alt: "Linkedin" ,href:"#"},
    { id: 4, icon: <Instagram className="text-pink-700"/>, alt: "Instagram" ,href:"#" },
  ];

  
   return (
    <>
     {/* <div className="py-20 flex  p-10 justify-around items-center flex-wrap text-white text-lg"> */}
       <div className="flex flex-col flex-wrap justify-center items-center my-10">
                
                <Image          
        src="/logo.png"
        alt="logo"
        width={150}
        height={150}
        className="object_contain text-center animate-pulse"
                    />
                <h2 className="text-xl text-white capitalize align-middle break-words">Isolamento. Efficienza. Sicurezza.</h2>
      </div>
     
      <div className="social-end my-10 w-[200px]">
        <ul className="w-[200px] flex  justify-center  md:justify-between items-center">
               {socialMediaIcons.map(({ id, icon, href }) => {
          return (
            <li key={id} className="mr-2">
              <a href={href} className={s.link_bg}>
                {icon}
              </a>
            </li>
          );
        })}
        </ul>
       </div>
        <div className="footer-conteiner__contacts">
  
        <address className="my-10 text-sm">
          <ul className="footer__list list text-sm">
            <li className=" mb-2">
              <a
                href="https://www.google.com/maps/place/Via+Augusto+Nomis+Di+Cossilla,+23,+10137+Torino+TO/@45.0366039,7.6232565,17z/data=!3m1!4b1!4m6!3m5!1s0x47881337751c6597:0x46c6c43539c5a1d2!8m2!3d45.0366039!4d7.6254452!16s%2Fg%2F11c24vmplz?entry=ttu"
                target="_blank"
                rel="noopener nofollow noreferrer"
                className="flex flex-wrap justify-center hover:text-indigo-600"
              >
                 
                 Via Augusto Nomis Di Cossilla, 23, 10137 Torino TO
                 <MapPin className="ml-2 text-yellow-500 hover:text-indigo-600" />
              </a>
            </li>
            <li className="mb-2">
              <a href="mailto:info@devstudio.com" className=" hover:text-indigo-600">
                DiZetaCoibentazione@gmail.com
              </a>
            </li>
            <li className="footer__item  hover:text-indigo-600">
              <a href="tel:+380961111111" className="">
               +(39)366 5252167
              </a>
            </li>
          </ul>
        </address>
      </div>
</>
  );
};

export default Footer;








