import React from "react"

import FooterPrimary from "./FooterPrimary"
import FooterSecondary from "./FooterSecondary"
import "./footerStyle.css"

const Footer = ({ hours }) => {
  return (
    <footer>
      <FooterPrimary hours={hours} />
      <FooterSecondary />
    </footer>
  )
}

export default Footer
