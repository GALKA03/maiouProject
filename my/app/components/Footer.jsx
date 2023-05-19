
import Image from "next/image";
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
// import { socials } from "../api/data/socials";
// export const getStaticProps = async () => {
//   try {
//     const response = await fetch(`/my/app/api/socials`);
//     // if (!response.ok) {
//     //   throw new Error('Failed to fetch socials');
//     // }
//     const data = await response.json();
//     console.log('data',data)
//     return { props: { socials: data } };

//   } catch (error) {
//     console.error(error);
//     return { props: { socials: null } };
//   }
// };


 const Footer = ({ socials }) => {
//     if (!socials) {
//     return null;
//   }
    // const { id, icon, path } = socials;
const socialMediaIcons = [
    { id: 1, icon: "/SVG/instagram.svg", alt: "Instagram" },
    { id: 2, icon: "/SVG/twitter.svg", alt: "Twitter" },
    { id: 3, icon: "/SVG/facebook.svg", alt: "Facebook" },
    { id: 4, icon: "/SVG/linkedin.svg", alt: "LinkedIn" },
  ];

  return (
    <div className="py-20 flex  p-10 justify-around items-center flex-wrap text-white">
      <div className="footer-conteiner__contacts">
        <a href="WebStudio" lang="en" className="footer__webstudio">
          <span className="footer__web">Web</span>Studio
        </a>
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
      <div className="social-end">
        <h3 className="social-end__title">присоединяйтесь</h3>
        <ul className="flex justify-between items-center">
                  {/* <li key={id}>
               <a href=""></a>        */}
         {/* </li> */}
                  {/* socials.map(({ id, icon }) => (
             <li key={id}>
          <a href={path} target="_blank" rel="noopener noreferrer">
            <i className={`fab fa-${icon}`} aria-hidden="true" />
          </a>
        </li>
          )) */}
        </ul>
      </div>
    </div>
  );
};

export default Footer;








