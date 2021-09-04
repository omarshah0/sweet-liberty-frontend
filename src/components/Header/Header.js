import React, { useState } from "react"
import { Link } from "gatsby"

import Nav from "../Nav"
import Container from "../UI/Container"
import ThemeContext from "../../system/ThemeContext"
import Logo_Light from "../../assets/logo_light.svg"
import Logo_Dark from "../../assets/logo_dark.svg"

const Header = ({ hours }) => {
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
        <header className="py-0 absolute top-0 md:top-6 left-0 right-0 z-10">
          {" "}
          {/*For Blog This is Top-0 for Other Pages This is Top-10*/}
          <Container>
            <div className="flex justify-between items-end">
              <Link to="/">
                {/* {theme.dark ? (
                  <img src={Logo_Dark} alt="Sweet Liberty" />
                ) : (
                  <img src={Logo_Light} alt="Sweet Liberty" />
                )} */}
                <img src={Logo_Dark} alt="Sweet Liberty" />
              </Link>
              <button
                className="hamburger block lg:mr-4"
                onClick={buttonHandler}
              >
                <span
                  className={`block ${theme.hamburger} mb-3 w-14 h-1`}
                ></span>
                <span
                  className={`block ${theme.hamburger} mb-3 w-10 h-1 ml-auto`}
                ></span>
                <span className={`block ${theme.hamburger} w-14 h-1`}></span>
              </button>
            </div>
          </Container>
          {/* <Nav hours={hours} modal={modal} closeModal={buttonHandler} /> */}
        </header>
      )}
    </ThemeContext.Consumer>
  )
}

export default Header
