import { links } from "./constants"

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="aspect-square w-12 mobile:w-14 bg-main-soft rounded-full text-main-light flex items-center justify-center font-semibold text-2xl rotate-[30deg] transition hover:rotate-0">
        B
      </div>
      <nav className="flex items-center justify-center gap-1 mobile:gap-5">
        {links.map(link => (
          <a
            key={link.id}
            href={link.to}
            className={`${link.styles} px-3 mobile:px-6 text-foreground-secondary text-base transition`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  )
}

export default Header