import { useLangContext } from "../../context/LangContext";
import Link from "../Link/Link";
import { getLinks } from "./constants";

const Hero = () => {
  const translations = useLangContext().translations;
  if (!translations.hero) return null;
  const links = getLinks(translations)

  return (
    <section className="w-full flex flex-col items-start justify-start gap-3 max-w-96 tablet:max-w-full tablet:mb-10">
      <div className="flex items-center justify-start text-main-dark dark:text-main gap-2">
        <span className="border-t-small w-20"></span>
        <p>Berra Karaman</p>
      </div>
      <div className="flex flex-col-reverse tablet:flex-row items-start justify-between">
        <div className="flex flex-col items-start jusify-start gap-8">
          <h1 data-testid="hero-title" className="text-4xl laptop:text-6xl text-foreground font-semibold pt-6">
            {translations.hero.title}
          </h1>
          <p className="section-paragraph w-full tablet:w-[70%] tracking-wide">
            {translations.hero.description}
          </p>
          <div className="w-full flex-wrap flex items-center justify-start gap-2">
            {links.map((link, index) => (
              <Link {...link} key={index} styles={link.label === "Hire me" ? "w-full tablet:w-28" : "w-full tablet:w-28" } />
            ))}
          </div>
        </div>
        <img src="/public/profile.png" className="dark:brightness-90 dark:saturate-50 rounded-xl w-full tablet:w-[40%] aspect-[4/3] object-cover shadow-xl" />
      </div>
    </section>
  )
}

export default Hero