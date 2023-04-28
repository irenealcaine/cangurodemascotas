import { GiDogHouse } from "react-icons/gi";
import { BsFillHouseFill, BsFillSunFill } from "react-icons/bs";
import { FaDog } from "react-icons/fa";

const services = [
  {
    icon: <GiDogHouse className="text-3xl text-purple-800" />,
    title: "Alojamiento sin jaula",
    paragraph1:
      "En nuestro alojamiento de perros sin jaulas, ofrecemos un entorno seguro, limpio y acogedor para tu mascota mientras estás fuera.",
    paragraph2:
      "Sabemos lo importante que es para ti asegurarte de que tu amigo peludo esté cómodo y bien cuidado, por lo que hemos creado un ambiente relajado y hogareño para que se sienta como en casa.",
  },
  {
    icon: <BsFillHouseFill className="text-3xl text-purple-800" />,
    title: "Cuidado a domicilio",
    paragraph1:
      "En nuestro servicio de cuidado a domicilio para perros, nos aseguraremos de que tu mascota reciba la atención y el cuidado que necesita mientras estás fuera.",
    paragraph2:
      "Nos adaptamos a las necesidades específicas de tu perro, así que no importa si necesita una visita rápida para hacer sus necesidades o si necesita compañía durante todo el día. Nos aseguraremos de que tu perro esté feliz y satisfecho cuando vuelvas a casa.",
  },
  {
    icon: <BsFillSunFill className="text-3xl text-purple-800" />,
    title: "Guardería de día",
    paragraph1:
      "En nuestra guardería de día para perros, ofrecemos un ambiente                seguro y emocionante para que tu amigo peludo socialice y se                divierta durante todo el día.",
    paragraph2:
      "Ofrecemos actividades divertidas y emocionantes para mantener a                tu perro ocupado y feliz. Ya sea que les guste correr y jugar,                socializar con otros perros o simplemente relajarse y recibir                caricias, tenemos algo para todos.",
  },
  {
    icon: <FaDog className="text-3xl text-purple-800" />,
    title: "Paseos",
    paragraph1:
      "¿No tienes tiempo para sacar a tu perro a caminar tanto como te                gustaría? En nuestro servicio de paseos de perros, ofrecemos una                solución confiable y segura para asegurarnos de que tu perro                tenga el ejercicio y la actividad física que necesita para                mantenerse feliz y saludable.",
    paragraph2:
      "Nos aseguramos de que tu perro reciba una caminata personalizada                de acuerdo con su nivel de energía, tamaño y necesidades                individuales.",
  },
];
export default services;
