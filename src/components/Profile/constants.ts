import { Translations } from "../../services/translations/translations.types";

export const getProfile = (translations: Translations) => ({
  details: [
    {
      label: translations.profile.profileSection.birthday.title,
      content: translations.profile.profileSection.birthday.content
    },
    {
      label: translations.profile.profileSection.residence.title,
      content: translations.profile.profileSection.residence.content
    },
    {
      label: translations.profile.profileSection.education.title,
      content: translations.profile.profileSection.education.content
    },
    {
      label: translations.profile.profileSection.position.title,
      content: translations.profile.profileSection.position.content
    },
  ],
    about: [
      translations.profile.aboutSection.content1,
      translations.profile.aboutSection.content2,
  ]
})