import React from "react"
import styled from "styled-components"

const TitleStroke = ({ children, className }) => {
  const Span = styled.span`
    -webkit-text-stroke: 4px #c0f3d4;
    -webkit-text-fill-color: transparent;
    @media screen and (min-width: 768px) {
      -webkit-text-stroke: 4px #c0f3d4;
    }
    /* mix-blend-mode: overlay; */
  `
  return <Span className={`${className} stroked-title`}>{children}</Span>
}

export default TitleStroke
