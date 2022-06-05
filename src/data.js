import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";
import img1 from "./images/flappy.jpg";
import img2 from "./images/code.png";
import img3 from "./images/preview.png";
import img4 from "./images/snake.png";
import img5 from "./images/thumb-videoblog-firebase-reactjs-feb-22.png";
import img6 from "./images/thumb-whatsappui-clone-nextjs.png";

export const Experience = [
  {
    id: 1,
    date: "2022 - 2027 ",
    iconsSrc: <IoCodeWorking />,
    title: "Engenharia de Materiais e Manufatura",
    location: "Universidade de São Paulo(USP)",
    description:
      "Ingressei em 2022 na USP, no curso de Eng. de Materiais e Manufatura. Membro da Ganesh (Equipe que estuda segurança da informação e que participa de maratonas de hacking), membro da GEMA (Grupo que participa de maratonas de programação em campeonatos nacionais e internacionais)",
  },
  {
    id: 2,
    date: "2017 - 2019",
    iconsSrc: <IoCodeWorking />,
    title: "Técnico em Agropecuária",
    location: "Etec Dr. Carolino da Motta & Silva",
    description:
    "Ingressei no curso de Técnico em Agropecuária em 2017, na ETEC. Eu tive contato com diversas áreas, bem como à agropecuária. Tive a oportunidade de participar das feiras de ciências anualmente.",
  },
 
];

export const Projects = [
  {
    id: 1,
    name: "Flappy Bird",
    imageSrc: img1,
    techs: "HTML, CSS e JavaScript",
    github: "#",
  },
  {
    id: 2,
    name: "Code Boss",
    imageSrc: img2,
    techs: "React Js, Sanity, Tailwind CSS",
    github: "#",
  },
  {
    id: 3,
    name: "Portfólio Pessoal",
    imageSrc: img3,
    techs: "HTML, CSS e JavaScript",
    github: "#",
  },
  {
    id: 4,
    name: "Snake Game",
    imageSrc: img4,
    techs: "JavaScript",
    github: "#",
  },
  {
    id: 5,
    name: "Em produção",
    imageSrc: img5,
    techs: "Aguarde...",
    github: "#",
  },
  {
    id: 6,
    name: "Em produção",
    imageSrc: img6,
    techs: "Aguarde...",
    github: "#",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/viniciusfreis",
  },  
  {
    id: 1,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/viniciusfreis/",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "Whatsapp",
    link: "https://wa.me/5535998700216",
  },
];
