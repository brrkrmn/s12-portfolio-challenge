import { Translations } from "../../services/translations/translations.types";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  links: { label: string;  to: string}[]
}

export const getProjects = (translations: Translations["projects"]): Project[] => [
  {
    id: "codymate",
    title: translations.codymate.title,
    description: translations.codymate.description,
    image: "/codymate.png",
    stack: [
      "NextJS", "TypeScript", "TanStack"
    ],
    links: [
      {
        label: "Github",
        to:  "https://github.com/brrkrmn/codymate",
      },
      {
        label: translations.viewLink,
        to: "https://www.codymate.com/",
      }
    ]
  },
  {
    id: "codeandline",
    title: translations.codeandline.title,
    description: translations.codeandline.description,
    image: "/codeandline.png",
    stack: [
      "MongoDB", "NodeJS", "React"
    ],
    links: [
      {
        label: "Github",
        to:  "https://github.com/brrkrmn/codeandline-frontend",
      },
      {
        label: translations.viewLink,
        to: "https://www.codeandline.com/",
      }
    ]
  },
  {
    id: "cliphoard",
    title: translations.cliphoard.title,
    description: translations.cliphoard.description,
    image: "/cliphoard.png",
    stack: [
      "JSON", "Tailwind", "Webpack"
    ],
    links: [
      {
        label: "Github",
        to: "https://github.com/brrkrmn/cliphoard",
      },
      {
        label: translations.viewLink,
        to: "https://chromewebstore.google.com/detail/cliphoard/amgfihockidjlcbhljidpcefieldgljf?hl=en-US&utm_source=ext_sidebar",
      }
    ]
  },
]