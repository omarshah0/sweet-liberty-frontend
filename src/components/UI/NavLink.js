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
        small
          ? "text-[40px] leading-[46px]"
          : "text-[76px] leading-[76px] md:text-8xl lg:text-[128px] lg:leading-[111px]"
      } text-brandLight hover:text-brandPink transition-colors`}
      activeClassName="text-brandPink"
    >
      {title}
    </StyledLink>
  )
}

export default NavLink
