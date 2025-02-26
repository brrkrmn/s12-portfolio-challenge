import { Translations } from "../../services/translations/translations.types";

export const getSkills = (translations: Translations["skills"]) => [
  {
    id: "js",
    title: translations.js.title,
    description: translations.js.description
  },
  {
    id: "reactjs",
    title: translations.react.title,
    description: translations.react.description
  },
  {
    id: "nodejs",
    title: translations.node.title,
    description: translations.node.description
  },
]