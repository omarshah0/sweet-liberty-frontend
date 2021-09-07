import React from "react"
import styled from "styled-components"

const TitleWithStroke = ({ children, color, className }) => {
  const Title = styled.span`
    -webkit-text-stroke: 2px ${color};
    @media screen and (min-width: 768px) {
      -webkit-text-stroke: 4px ${color};
      -webkit-text-fill-color: transparent;
    }
  `
  return (
    <span className={`relative block ${className}`}>
      {children}
      <Title className="absolute inset-0 z-20">{children}</Title>
    </span>
  )
}

export default TitleWithStroke
