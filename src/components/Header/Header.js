import React, { useState } from "react"
import { Link } from "gatsby"
import { document, window } from "browser-monads"

import Nav from "../Nav"
import Container from "../UI/Container"
import ThemeContext from "../../system/ThemeContext"
import Logo_Light from "../../assets/logo_light.svg"
import Logo_Dark from "../../assets/logo_dark.svg"

const Header = ({ hours }) => {
  const [modal, setModal] = useState(false)
  const buttonHandler = () => {
    if (!modal) {
      // When the modal is shown, we want a fixed body
      document.body.style.position = "fixed"
      document.body.style.top = `-${window.scrollY}px`
      setModal(true)
    }
    if (modal) {
      // When the modal is hidden, we want to remain at the top of the scroll position
      document.body.style.position = ""
      document.body.style.top = ""
      setModal(false)
    }
  }

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <header className="py-3 absolute top-10 left-0 right-0 z-10">
          {" "}
          {/*For Blog This is Top-0 for Other Pages This is Top-10*/}
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
          {modal && <Nav hours={hours} closeModal={buttonHandler} />}
        </header>
      )}
    </ThemeContext.Consumer>
  )
}

export default Header
