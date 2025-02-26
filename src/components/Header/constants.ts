import { Translations } from "../../services/translations/translations.types";

export const getLinks = (translations: Translations["header"]) => [
  {
    id: "skills-link",
    to: "#skills",
    label: translations.skillsLink,
    styles: "hover:text-foreground dark:hover:text-main"
  },
  {
    id: "projects-link",
    to: "#projects",
    label: translations.projectsLink,
    styles: "hover:text-foreground dark:hover:text-main"
  },
  {
    id: "hire-link",
    to: "#hire",
    label: translations.hireLink,
    styles: "py-1 mobile:py-2 border-small dark:bg-main-light dark:border-foreground-secondary dark:hover:text-main-soft dark:text-main-text rounded-lg border-main-dark text-main-dark hover:bg-main-dark hover:text-white"
  }
]