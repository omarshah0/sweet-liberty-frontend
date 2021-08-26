import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavLink = ({ title, url, small }) => {
  const StyledLink = styled(props => <Link {...props} />)`
    &.text-custom-vh {
      @media (min-width: 768px) {
        font-size: 12vh;
      }
    }

    &.text-custom-vh {
      @media (min-height: 768px) and (min-width: 768px) {
        font-size: 8rem;
      }
    }
  `
  return (
    <StyledLink
      to={url}
      className={`font-bebas ${
        small ? "text-4xl" : "text-6xl md:text-8xl lg:text-9xl text-custom-vh"
      } text-brandLight hover:text-brandPink transition-colors`}
      activeClassName="text-brandPink"
    >
      {title}
    </StyledLink>
  )
}

export default NavLink
