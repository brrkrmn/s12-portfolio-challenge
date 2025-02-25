import { useLangContext } from "../../context/LangContext";
import { getLinks } from "./constants";

const Header = () => {
  const translations = useLangContext().translations;
  if (!translations) return null;
  const links = getLinks(translations)

  return (
    <div className="w-full flex items-center justify-between">
      <div className="aspect-square w-10 mobile:w-14 text-lg bg-main-soft rounded-full text-main-light dark:text-main-dark flex items-center justify-center font-semibold mobile:text-2xl rotate-[30deg] transition hover:rotate-0">
        B
      </div>
      <nav className="flex items-center justify-center gap-0 mobile:gap-5 *:text-sm mobile:*:text-base">
        {links.map(link => (
          <a
            key={link.id}
            href={link.to}
            className={`${link.styles} px-3 mobile:px-6 text-foreground-secondary dark:text-foreground-soft text-base transition`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  )
}

export default Header