import { useState, useEffect } from "react"

const useBodyHeight = () => {
  const [position, setPosition] = useState(0)
  const [windowSize, setWindowSize] = useState(null)

  useEffect(() => {
    const getDivPosition = () => {
      const body = document.body.scrollHeight
      setPosition(body)
    }
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    getDivPosition()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [position, windowSize])
  return position
}

export default useBodyHeight
