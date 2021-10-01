import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const TitleSolid = ({ children, className }) => {
  const Span = styled(motion.span)`
    /* mix-blend-mode: hard-light; */
    /* mix-blend-mode: overlay; */
  `
  return <Span className={`${className}`}>{children}</Span>
}

export default TitleSolid
