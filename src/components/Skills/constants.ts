import { Translations } from "../../services/translations/translations.types";

export const getSkills = (translations: Translations) => [
  {
    id: "js",
    title: translations.skills.js.title,
    description: translations.skills.js.description
  },
  {
    id: "reactjs",
    title: translations.skills.react.title,
    description: translations.skills.react.description
  },
  {
    id: "nodejs",
    title: translations.skills.node.title,
    description: translations.skills.node.description
  },
]