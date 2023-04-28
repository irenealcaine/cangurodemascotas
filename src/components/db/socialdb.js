import { FiInstagram, FiMail } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const socialMedia = [
  {
    title: "canguro.mascotas",
    href: "https://www.instagram.com/canguro.mascotas/",
    icon: <FiInstagram className="text-purple-800" />,
    navbarIcon: <FiInstagram />,
  },
  {
    title: "664 05 18 72",
    href: "https://api.whatsapp.com/send?phone=34664051872&text=Hola!",
    icon: <BsWhatsapp className="text-purple-800" />,
    navbarIcon: <BsWhatsapp />,
  },
  {
    title: "paulablasco3@gmail.com",
    href: "mailto:paulablasco3@gmail.com",
    icon: <FiMail className="text-purple-800" />,
    navbarIcon: <FiMail />,
  },
];
export default socialMedia;
