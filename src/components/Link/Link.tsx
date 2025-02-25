import { IconType } from "react-icons";

export type LinkProps = {
  label: string;
  variant?: "bordered" | "solid" | "ghost",
  link: string;
  icon?: IconType;
  styles?: string
}

const Link = ({ variant = "bordered", link, label, icon: Icon, styles }: LinkProps) => {
  return (
    <a
      href={link}
      className={`
        w-28 py-3 flex items-center justify-center gap-2 rounded-lg transition
        ${variant === "bordered" ?
          "text-main-dark dark:text-main-light dark:bg-bg-soft hover:bg-main-dark hover:text-white dark:hover:text-main dark:hover:border-main border-small border-main-dark dark:border-main-light"
        :
          "bg-main-dark dark:bg-main-light text-white dark:text-main-text hover:bg-white hover:text-main-dark border-small border-main-dark dark:border-foreground-secondary dark:hover:text-main-soft"
        }
        ${styles}
        `}
    >
      {Icon && <Icon className="text-xl dark:text-divider" />}
      <p className="text-sm">
        {label}
      </p>
    </a>
  )
}

export default Link