import { emailAddress, links } from "./constants"

const Footer = () => {
  return (
    <section id="hire" className="flex bg-bg-secondary items-center justify-start w-screen py-20 mt-auto text-md">
      <footer className="max-w-[1024px] w-full mx-auto flex flex-col items-start justify-center gap-10 px-2 tablet:px-10">
        <p className="text-foreground text-3xl tablet:text-4xl font-semibold tablet:w-96 w-full text-center tablet:text-start">
          Let’s work together on your next product.
        </p>
        <div className="w-full flex flex-col items-center justify-between tablet:flex-row gap-6">
          <a href={`mailto:${emailAddress}`} className="flex items-center justify-start gap-1">
            <p className="">👉</p>
            <p className="text-red underline">{emailAddress}</p>
          </a>
          <nav className="flex items-center justify-center gap-5">
            {links.map(link => (
              <a
                key={link.id}
                target="_blank"
                href={link.to}
                className={`${link.styles} transition border-b-small border-transparent`}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </section>
  )
}

export default Footer