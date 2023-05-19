import s from "../styles/layout/footer.module.scss"
import Image from "next/image";

 const Footer = ({ socials }) => {
//     if (!socials) {
//     return null;
//   }
    // const { id, icon, path } = socials;
const socialMediaIcons = [
    { id: 1, icon: "/Subtract.png", alt: "WhatsApp",href:"#" },
    { id: 2, icon: "/Telegramm.png", alt: "Telegramm" ,href:"#"},
    { id: 3, icon: "/Viber.png", alt: "Viber" ,href:"#"},
    { id: 4, icon: "/Skype.png", alt: "Skype" ,href:"#" },
  ];

   return (
    <>
     {/* <div className="py-20 flex  p-10 justify-around items-center flex-wrap text-white text-lg"> */}
      <div>LOGO</div>
     
      <div className="social-end">
        <ul className="flex justify-between items-center">
          {socialMediaIcons.map(({ id, icon, alt,href }) => {
             return (
               <li key={id} className="mr-10">
                 <a href={href} className={s.link_bg}>
              <Image src={icon} alt={alt} width={id===4 ?50 :40} height={40} />
           {/* {id === 1 || id === 2 ? 150 : id === 3 || id === 4 ? 300 : id === 5 ? 400 : 100} */}
                 </a> </li>
             )
               })}
        </ul>
       </div>
        <div className="footer-conteiner__contacts">
  
        <address className="footer__address">
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








