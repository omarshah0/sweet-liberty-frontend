import React from "react"
import styled from "styled-components"

const TitleWithStroke = ({ children, color, className }) => {
  const Title = styled.span`
    @media screen and (min-width: 768px) {
      -webkit-text-stroke: 2px ${color};
      -webkit-text-stroke: 4px ${color};
      -webkit-text-fill-color: transparent;
    }
  `
  return (
    <span className={`relative ${className}`}>
      {children}
      <Title className="absolute top-0 left-0 z-20">{children}</Title>
    </span>
  )
}

export default TitleWithStroke
