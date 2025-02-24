export type TranslationsResponse = Translations[]

export type Translations = {
  settings: {
    theme: {
      light: string;
      dark: string;
    };
    lang: {
      lang: string;
      text: string;
    };
  };
  header: {
    skillsLink: string;
    projectsLink: string;
    hireLink: string;
  };
  hero: {
    title: string;
    description: string;
    hireLink: string;
  };
  skills: {
    title: string;
    js: {
      title: string;
      description: string;
    };
    react: {
      title: string;
      description: string;
    };
    node: {
      title: string;
      description: string;
    };
  };
  profile: {
    title: string;
    aboutSection: {
      title: string;
      content1: string;
      content2: string;
    };
    profileSection: {
      title: string;
      birthday: {
        title: string;
        content: string;
      };
      residence: {
        title: string;
        content: string;
      };
      education: {
        title: string;
        content: string;
      };
      position: {
        title: string;
        content: string;
      };
    };
  };
  projects: {
    title: string;
    codymate: {
      title: string;
      description: string;
    };
    codeandline: {
      title: string;
      description: string;
    };
    cliphoard: {
      title: string;
      description: string;
    };
    viewLink: string;
  };
  footer: {
    title: string;
    blogLink: string;
  };
};