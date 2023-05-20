import s from "../styles/layout/footer.module.scss"
import Image from "next/image";
import { Facebook,Linkedin,Twitter,Instagram } from "./svgs";
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
       <div className="flex flex-col justify-center items-center my-10">
                
                <Image          
        src="/logo.png"
        alt="logo"
        width={150}
        height={150}
        className="object_contain text-center animate-pulse"
                    />
                <h2 className="text-xl text-white capitalize align-middle break-words">Un'azienda specializzata nell'isolamento dei tubi.</h2>
      </div>
     
      <div className="social-end my-10">
        <ul className="flex justify-between items-center">
               {socialMediaIcons.map(({ id, icon, href }) => {
          return (
            <li key={id} className="mr-10">
              <a href={href} className={s.link_bg}>
                {icon}
              </a>
            </li>
          );
        })}
        </ul>
       </div>
        <div className="footer-conteiner__contacts">
  
        <address className="my-10">
          <ul className="footer__list list">
            <li className="footer__item">
              <a
                href="https://goo.gl/maps/JEW9ovbfu2PFGyKFA"
                target="_blank"
                rel="noopener nofollow noreferrer"
                className="futer__maps"
              >
                г.Киев, пр-т Леси Украинки,26
              </a>
            </li>
            <li className="footer__item">
              <a href="mailto:info@devstudio.com" className="footer__mail link">
                info@devstudio.com
              </a>
            </li>
            <li className="footer__item">
              <a href="tel:+380961111111" className="footer__tel link">
                +38 096 111 11 11
              </a>
            </li>
          </ul>
        </address>
      </div>
</>
  );
};

export default Footer;








