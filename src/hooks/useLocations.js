import { useState, useEffect } from "react"

const useLocations = location => {
  const [hash, setHash] = useState("")
  useEffect(() => {
    if (location.length !== 0) {
      setHash(location)
    }
  }, [location])
  return hash
}

export default useLocations
