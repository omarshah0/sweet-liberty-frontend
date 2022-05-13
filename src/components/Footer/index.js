import React from "react"

import FooterPrimary from "./FooterPrimary"
import FooterSecondary from "./FooterSecondary"
import "./footerStyle.css"

const Footer = ({ hours, openModal }) => {
  return (
    <footer id="contact">
      <FooterPrimary hours={hours} openModal={openModal} />
      <FooterSecondary />
    </footer>
  )
}

export default Footer
