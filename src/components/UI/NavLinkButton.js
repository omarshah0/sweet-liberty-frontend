import React from "react"
import styled from "styled-components"

const NavLinkButton = ({ title, onClick }) => {
  const Button = styled.button`
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
    <Button
      className="font-bebas text-[76px] leading-[76px] md:text-8xl lg:text-[128px] lg:leading-[111px] text-brandLight hover:text-brandPink transition-colors"
      onClick={onClick}
    >
      {title}
    </Button>
  )
}

export default NavLinkButton
