import React from "react"
import { Link } from "gatsby"

import Nav from "../Nav"
import Container from "../UI/Container"
import ThemeContext from "../../system/ThemeContext"
import Logo_Light from "../../assets/logo_light.svg"
import Logo_Dark from "../../assets/logo_dark.svg"

const Header = ({ hours }) => {
  const buttonHandler = () => {
    console.log("DO SOMETHING WITH BUTTON")
  }

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <header className="py-3 absolute top-0 left-0 right-0 z-10">
          <Container>
            <div className="flex justify-between items-center">
              <Link to="/">
                {theme.dark ? (
                  <img src={Logo_Dark} alt="Sweet Liberty" />
                ) : (
                  <img src={Logo_Light} alt="Sweet Liberty" />
                )}
              </Link>
              <button className="hamburger block" onClick={buttonHandler}>
                <span
                  className={`block border-4 ${theme.hamburger} mb-3 w-14 `}
                ></span>
                <span
                  className={`block border-4 ${theme.hamburger} mb-3 w-12 ml-auto`}
                ></span>
                <span
                  className={`block border-4 ${theme.hamburger} mb-3 w-14`}
                ></span>
              </button>
            </div>
          </Container>
          <Nav hours={hours} />
        </header>
      )}
    </ThemeContext.Consumer>
  )
}

export default Header
