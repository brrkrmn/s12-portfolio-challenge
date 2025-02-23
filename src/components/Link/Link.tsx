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
        "text-main-dark hover:bg-main-dark hover:text-white border-small border-main-dark"
        : variant === "solid" ?
          "bg-main-dark text-white hover:bg-white hover:text-main-dark border-small border-main-dark"
        : ""
        }
        ${styles}
        `}
    >
      {Icon && <Icon className="text-xl" />}
      <p className="text-sm">
        {label}
      </p>
    </a>
  )
}

export default Link