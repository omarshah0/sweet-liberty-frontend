import { useState, useEffect } from "react"

const useScrollValue = () => {
  const [scrollValue, setScrollValue] = useState(0)
  const handleScroll = () => {
    setScrollValue(document.documentElement.scrollTop)
  }
  useEffect(() => {
    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  })
  return scrollValue
}

export default useScrollValue
