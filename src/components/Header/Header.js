import React, { useState } from "react"
import { Link } from "gatsby"
import { AnimatePresence } from "framer-motion"
import { document } from "browser-monads"

import Nav from "../Nav"
import Container from "../UI/Container"
import ThemeContext from "../../system/ThemeContext"
import Logo_Light from "../../assets/logo_light.svg"
import Logo_Dark from "../../assets/logo_dark.svg"

const Header = ({ hours, homepage }) => {
  const [modal, setModal] = useState(false)
  const buttonHandler = () => {
    // if (!modal) {
    //   //No Scrolling When Modal is Opened
    //   document.body.style.overflow = "hidden"
    //   setModal(true)
    // }
    // if (modal) {
    //   //Scrolling When Modal is Opened
    //   document.body.style.overflow = "auto"
    //   setModal(false)
    // }
    setModal(!modal)
  }

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <header
          className={`py-3 absolute ${
            homepage ? "top-0 md:top-10" : "top-0 md:top-10"
          } left-0 right-0 z-10`}
        >
          {" "}
          {/*For Blog This is Top-0 for Other Pages This is Top-10*/}
          <Container>
            <div className="flex justify-between items-center">
              <Link to="/">
                {theme.dark || homepage ? (
                  <img src={Logo_Dark} alt="Sweet Liberty" />
                ) : (
                  <img src={Logo_Light} alt="Sweet Liberty" />
                )}
              </Link>
              <button className="hamburger block" onClick={buttonHandler}>
                <span
                  className={`block border-2 ${
                    homepage ? "bg-brandLight" : theme.hamburger
                  } mb-3 w-14 `}
                ></span>
                <span
                  className={`block border-2 ${
                    homepage ? "bg-brandLight" : theme.hamburger
                  } mb-3 w-10 ml-auto`}
                ></span>
                <span
                  className={`block border-2 ${
                    homepage ? "bg-brandLight" : theme.hamburger
                  } mb-3 w-14`}
                ></span>
              </button>
            </div>
          </Container>
          <AnimatePresence>
            {modal && <Nav hours={hours} closeModal={buttonHandler} />}
          </AnimatePresence>
        </header>
      )}
    </ThemeContext.Consumer>
  )
}

export default Header
