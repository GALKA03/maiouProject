import { MapPin } from "../components/svgs"
const AdressComponent = () => {
    return (
        <div className="border-4 border-teal-700 w-9/12 h-96 block place-content-center">
  
        <address className="my-10">
          <ul className="footer__list list">
            <li className="footer__item">
              <a
                href="https://goo.gl/maps/JEW9ovbfu2PFGyKFA"
                target="_blank"
                rel="noopener nofollow noreferrer"
                className="flex"
              >
                 
                 г.Киев, пр-т Леси Украинки,26
                 <MapPin className="ml-2" />
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
    )
}
export default AdressComponent