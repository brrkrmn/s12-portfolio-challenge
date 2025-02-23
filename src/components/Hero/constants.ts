import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LinkProps } from "../Link";

export const heroLinks: LinkProps[] = [
  {
    label: "Hire me",
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