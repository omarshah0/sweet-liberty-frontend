import React from "react"
import styled from "styled-components"

const TitleSolid = ({ children, className }) => {
  const Span = styled.span`
    mix-blend-mode: difference;
  `
  return <Span className={`${className}`}>{children}</Span>
}

export default TitleSolid
