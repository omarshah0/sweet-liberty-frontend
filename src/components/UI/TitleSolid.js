import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const TitleSolid = ({ children, className, initial, animate, transition }) => {
  const Span = styled(motion.span)`
    /* mix-blend-mode: hard-light; */
    /* mix-blend-mode: overlay; */
  `
  return (
    <Span
      className={`${className}`}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </Span>
  )
}

export default TitleSolid
