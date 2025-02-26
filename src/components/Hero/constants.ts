import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Translations } from "../../services/translations/translations.types";
import { LinkProps } from "../Link";

export const getLinks = (translations: Translations["hero"]): LinkProps[] => [
  {
    label: translations.hireLink,
    variant: "solid",
    link: "#hire",
  },
  {
    label: "Github",
    variant: "bordered",
    link: "https://github.com/brrkrmn",
    icon: FaGithub,
  },
  {
    label: "Linkedin",
    variant: "bordered",
    link: "https://www.linkedin.com/in/berra-karaman-3936471b0/",
    icon: FaLinkedinIn
  }
]