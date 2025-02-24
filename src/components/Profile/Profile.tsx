import { useLangContext } from "../../context/LangContext";
import { getProfile } from "./constants";

const Profile = () => {
  const translations = useLangContext().translations;
  if (!translations) return null;
  const profile = getProfile(translations);

  return (
    <section id="profile" className="w-full flex flex-col items-center tablet:items-start justify-center gap-6 tablet:max-w-full max-w-96">
      <h3 className="section-title">
        {translations.profile.title}
      </h3>
      <div className="w-full flex flex-col items-start justify-between tablet:flex-row gap-10">
        <div className="flex flex-col gap-4 h-full items-start justify-start basis-2/5">
          <h2 className="section-subtitle">{translations.profile.title}</h2>
          {profile.details.map((item, index) => (
            <div key={index} className="text-sm text-foreground dark:text-foreground-secondary w-full flex items-start justify-start gap-4">
              <p className="font-semibold w-28">
                {item.label}
              </p>
              <p className="text-sm w-40">
                {item.content}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 h-full w-full tablet:max-w-full max-w-96 items-start justify-start basis-3/5">
          <h2 className="section-subtitle">{translations.profile.aboutSection.title}</h2>
            {profile.about.map((content, index) => (
              <p key={index} className="section-paragraph tablet:w-[80%]">
                {content}
              </p>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Profile