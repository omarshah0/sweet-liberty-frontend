import React from "react"
import styled from "styled-components"

const TitleSolid = ({ children, className }) => {
  const Span = styled.span`
    /* mix-blend-mode: hard-light; */
    /* mix-blend-mode: overlay; */
  `
  return <Span className={`${className}`}>{children}</Span>
}

export default TitleSolid
