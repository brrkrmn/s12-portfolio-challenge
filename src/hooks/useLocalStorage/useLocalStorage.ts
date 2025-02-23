import { useState } from "react";

type LsValue = boolean | string | number | [] | object

const useLocalStorage = (key: string, defaultValue?: LsValue) => {
  const [value, setValue] = useState(() => {
    const lsValue: string | null = localStorage.getItem(key)

    if (lsValue === null) {
      localStorage.setItem(key, JSON.stringify(defaultValue))
      return defaultValue;
    } else {
      return JSON.parse(lsValue);
    }
  })

  const setLocalStorage = (value: LsValue) => {
    localStorage.setItem(key, JSON.stringify(value))
    setValue(value)
  }

  return [value, setLocalStorage];
}

export default useLocalStorage;