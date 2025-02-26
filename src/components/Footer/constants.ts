import { Translations } from "../../services/translations/translations.types"

export const getLinks = (translations: Translations["footer"]) => [
  {
    id: "blog-link",
    label: translations.blogLink,
    to: "https://www.berrakaraman.com/",
    styles: "text-foreground dark:text-foreground-secondary hover:border-foreground"
  },
  {
    id: "github-link",
    label: "Github",
    to: "https://github.com/brrkrmn",
    styles: "text-green hover:border-green"
  },
  {
    id: "linkedin-link",
    label: "Linkedin",
    to: "https://www.linkedin.com/in/berra-karaman-3936471b0/",
    styles: "text-blue hover:border-blue"
  },
]

export const emailAddress = "esma.berra.karaman@hotmail.com"