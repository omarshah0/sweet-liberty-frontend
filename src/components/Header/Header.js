import React, { useState, useEffect, lazy, Suspense } from "react"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import { useSelector } from "react-redux"

import Logo_Light from "../../assets/logo_light.svg"
import Logo_Dark from "../../assets/logo_dark.svg"
import { CartSvg } from "../UI/Svgs"
import { Container, Hamburger } from "../UI"
import { useScrollValue } from "../../hooks"

const Nav = lazy(() => import("../Nav"))

const Header = ({ hours, isDark, smallLogo, isHomepage, menuPageDark }) => {
  const cart = useSelector(state => state.cartReducer)
  const location = useLocation()
  const scrollValue = useScrollValue()
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

  useEffect(() => {
    setModal(false)
  }, [location])

  return (
    <header
      className={`
        ${
          isHomepage && isDark && !menuPageDark
            ? "fixed top-0 left-0 right-0 z-[9999] bg-brandDark"
            : "absolute top-0 left-0 right-0 z-10"
        }
          ${isHomepage && scrollValue > 50 ? "shadow-2xl" : ""}
      `}
    >
      <Container
        className={`px-[17px] md:px-10 lg:px-12 max-w-screen-2xl mx-auto relative flex items-center justify-between transition-all duration-200 ${
          isHomepage && scrollValue > 50 ? "py-1 md:py:4" : "py-3 md:py-8"
        }`}
      >
        <Link to="/">
          {isDark ? (
            <img
              src={Logo_Dark}
              alt="Sweet Liberty"
              className={`w-[79px] h-[52px] transition-all duration-200 ${
                smallLogo || scrollValue > 50
                  ? "md:w-[114px] md:h-[75px]"
                  : "md:w-[154px] md:h-[103px]"
              }`}
            />
          ) : (
            <img
              src={Logo_Light}
              alt="Sweet Liberty"
              className={`w-[79px] h-[52px] transition-all duration-200 ${
                smallLogo || scrollValue > 50
                  ? "md:w-[114px] md:h-[75px]"
                  : "md:w-[154px] md:h-[103px]"
              }`}
            />
          )}
        </Link>
        <div className="flex items-center">
          {cart.products.length > 0 && (
            <Link to="/cart" className="mr-10">
              <CartSvg
                svgClassName={isDark ? "text-brandLight" : "text-brandDark"}
                quantity={cart.products.length}
              />
            </Link>
          )}

          <Hamburger
            className={`${modal ? "open" : ""}`}
            color={`${modal || isDark ? "bg-brandLight" : "bg-brandDark"}`}
            onClick={buttonHandler}
          />
        </div>
      </Container>
      <Suspense fallback={"loading..."}>
        <Nav
          hours={hours}
          modal={modal}
          closeModal={buttonHandler}
          location={location}
        />
      </Suspense>
    </header>
  )
}

export default Header
