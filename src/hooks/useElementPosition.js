import { useState, useEffect } from "react"

const useElementPosition = (el, threshold = 0) => {
  const [position, setPosition] = useState(0)
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    const getDivPosition = () => {
      // const { offsetTop } = el.current
      // setPosition(offsetTop)
      const body = document.body.getBoundingClientRect().top
      const top = el.current.getBoundingClientRect().top
      const offset = top - body
      setPosition(offset)
    }
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    if (!el.current) return setPosition(0)
    getDivPosition()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [position, windowSize, setWindowSize, el])
  return position - threshold
}

export default useElementPosition
