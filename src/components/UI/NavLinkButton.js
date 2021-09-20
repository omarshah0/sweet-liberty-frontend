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
      className="font-bebas text-6xl md:text-8xl lg:text-9xl text-custom-vh text-brandLight hover:text-brandPink transition-colors"
      onClick={onClick}
    >
      {title}
    </Button>
  )
}

export default NavLinkButton
