import React from "react"
import { motion } from "framer-motion"

const Panels = ({ className, enterAnim, exitAnim }) => {
  return (
    <motion.div
      className={`absolute top-0 bottom-0 bg-brandRed ${className} z-[9]`}
      initial={{ left: ["0%", "0%", "0%"], width: ["0%", "0%", "0%"] }}
      animate={
        enterAnim
          ? {
              left: ["0%", "0%", "100%"],
              right: ["0%", "0%", "100%"],
              width: ["0%", "100%", "0%"],
            }
          : exitAnim
          ? {
              left: ["100%", "0%", "0%"],
              right: ["100%", "0%", "0%"],
              width: ["0%", "100%", "0%"],
            }
          : { left: ["0%", "0%", "0%"], width: ["0%", "0%", "0%"] }
      }
      transition={{
        duration: 1,
        times: [0, 0.5, 1],
        ease: [0.6, -0.05, 0.01, 0.9],
      }}
    ></motion.div>
  )
}

export default Panels
