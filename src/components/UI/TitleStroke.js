import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const TitleStroke = ({
  children,
  className,
  strokeWidth,
  initial,
  animate,
  transition,
}) => {
  const Span = styled(motion.span)`
    -webkit-text-stroke: ${strokeWidth ? strokeWidth : "4px"} #c0f3d4;
    -webkit-text-fill-color: transparent;
    /* mix-blend-mode: overlay; */
  `
  return (
    <Span
      className={`${className} stroked-title`}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </Span>
  )
}

export default TitleStroke
