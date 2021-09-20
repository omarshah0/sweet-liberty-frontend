import React, { useState } from "react"
import { Link } from "gatsby"

import Nav from "../Nav"
import { Container, Hamburger } from "../UI"
import ThemeContext from "../../system/ThemeContext"
import Logo_Light from "../../assets/logo_light.svg"
import Logo_Dark from "../../assets/logo_dark.svg"

const Header = ({ hours, isHomepage }) => {
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
    <ThemeContext.Consumer>
      {({ theme }) => (
        <header className="absolute top-0 left-0 right-0 z-10">
          <Container>
            <div className="py-8 relative flex">
              <Link to="/">
                {isHomepage ? (
                  <img src={Logo_Dark} alt="Sweet Liberty" />
                ) : theme.dark ? (
                  <img src={Logo_Dark} alt="Sweet Liberty" />
                ) : (
                  <img src={Logo_Light} alt="Sweet Liberty" />
                )}
              </Link>
              <Hamburger
                className={`absolute top-1/2 right-0 -translate-y-1/2 z-20 ${
                  modal ? "open" : ""
                }`}
                color={`${
                  isHomepage || modal ? "bg-brandLight" : theme.hamburger
                }`}
                onClick={buttonHandler}
              />
            </div>
          </Container>
          <Nav hours={hours} modal={modal} closeModal={buttonHandler} />
        </header>
      )}
    </ThemeContext.Consumer>
  )
}

export default Header
