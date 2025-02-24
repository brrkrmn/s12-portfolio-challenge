import { Translations } from "../../services/translations/translations.types";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  links: { label: string;  to: string}[]
}

export const getProjects = (translations: Translations): Project[] => [
  {
    id: "codymate",
    title: translations.projects.codymate.title,
    description: translations.projects.codymate.description,
    image: "/public/codymate.png",
    stack: [
      "NextJS", "TypeScript", "TanStack"
    ],
    links: [
      {
        label: "Github",
        to:  "https://github.com/brrkrmn/codymate",
      },
      {
        label: translations.projects.viewLink,
        to: "https://www.codymate.com/",
      }
    ]
  },
  {
    id: "codeandline",
    title: translations.projects.codeandline.title,
    description: translations.projects.codeandline.description,
    image: "/public/codeandline.png",
    stack: [
      "MongoDB", "NodeJS", "React"
    ],
    links: [
      {
        label: "Github",
        to:  "https://github.com/brrkrmn/codeandline-frontend",
      },
      {
        label: translations.projects.viewLink,
        to: "https://www.codeandline.com/",
      }
    ]
  },
  {
    id: "cliphoard",
    title: translations.projects.cliphoard.title,
    description: translations.projects.cliphoard.description,
    image: "/public/cliphoard.png",
    stack: [
      "JSON", "Tailwind", "Webpack"
    ],
    links: [
      {
        label: "Github",
        to: "https://github.com/brrkrmn/cliphoard",
      },
      {
        label: translations.projects.viewLink,
        to: "https://chromewebstore.google.com/detail/cliphoard/amgfihockidjlcbhljidpcefieldgljf?hl=en-US&utm_source=ext_sidebar",
      }
    ]
  },
]