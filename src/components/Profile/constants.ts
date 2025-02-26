import { Translations } from "../../services/translations/translations.types";

export const getProfile = (translations: Translations["profile"]) => ({
  details: [
    {
      label: translations.profileSection.birthday.title,
      content: translations.profileSection.birthday.content
    },
    {
      label: translations.profileSection.residence.title,
      content: translations.profileSection.residence.content
    },
    {
      label: translations.profileSection.education.title,
      content: translations.profileSection.education.content
    },
    {
      label: translations.profileSection.position.title,
      content: translations.profileSection.position.content
    },
  ],
    about: [
      translations.aboutSection.content1,
      translations.aboutSection.content2,
  ]
})