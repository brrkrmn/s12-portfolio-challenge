import { addToast } from "@heroui/toast"

const toast = (content: string) => {
  addToast({
    title: content,
    variant: "flat",
    timeout: 3000,
    classNames: {
      base: "rounded-lg bg-bg-secondary border-main-dark text-main-dark",
      title: "text-main-dark",
      closeIcon: "text-bg-secondary bg-main-dark"
    }
  })
}

export default toast
