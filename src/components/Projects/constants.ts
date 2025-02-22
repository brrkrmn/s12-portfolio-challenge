export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  links: { label: string;  to: string}[]
}

export const projects: Project[] = [
  {
    id: "codymate",
    title: "Codymate",
    description: "Make your code presentations stand out! Codymate is a code presentation tool that lets you create interactive code scenes with step-by-step typing animations, transforming your code into engaging slides. Perfect for live demos.",
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
        label: "View Site",
        to: "https://www.codymate.com/",
      }
    ]
  },
  {
    id: "codeandline",
    title: "Code&Line",
    description: "Code&Line is a note-taking app designed for developers to provide a more detailed understanding of their code. Its core feature allows users to target specific code lines with each note, aiming for a line-by-line explanation of the snippet.",
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
        label: "View Site",
        to: "https://www.codeandline.com/",
      }
    ]
  },
  {
    id: "cliphoard",
    title: "Cliphoard",
    description: "ClipHoard is a Chrome extension. It is a productivity tool to quickly access and copy most-used data within seconds. It uses Chrome storage API to store the clips locally on the user’s machine without requiring authentication.",
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
        label: "View Site",
        to: "https://chromewebstore.google.com/detail/cliphoard/amgfihockidjlcbhljidpcefieldgljf?hl=en-US&utm_source=ext_sidebar",
      }
    ]
  },
]