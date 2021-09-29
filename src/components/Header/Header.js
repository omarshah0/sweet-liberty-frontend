import React, { useState } from "react"
import { Link } from "gatsby"

import Nav from "../Nav"
import Logo_Light from "../../assets/logo_light.svg"
import Logo_Dark from "../../assets/logo_dark.svg"
import { Container, Hamburger } from "../UI"

const Header = ({ hours, isDark }) => {
  const [modal, setModal] = useState(false)
  const buttonHandler = () => {
    if (!modal) {
      //No Scrolling When Modal is Opened
      document.body.style.overflow = "hidden"
      setModal(true)
    }
    if (modal) {
      //Scrolling When Modal is Opened
      document.body.style.overflow = "auto"

      setModal(false)
    }
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <Container className="px-[17px] md:px-10 lg:px-12 max-w-screen-2xl mx-auto py-2 md:py-8 relative flex items-center justify-between">
        <Link to="/">
          {isDark ? (
            <img src={Logo_Dark} alt="Sweet Liberty" />
          ) : (
            <img src={Logo_Light} alt="Sweet Liberty" />
          )}
        </Link>
        <Hamburger
          className={`${modal ? "open" : ""}`}
          color={`${modal || isDark ? "bg-brandLight" : "bg-brandDark"}`}
          onClick={buttonHandler}
        />
      </Container>
      <Nav hours={hours} modal={modal} closeModal={buttonHandler} />
    </header>
  )
}

export default Header
