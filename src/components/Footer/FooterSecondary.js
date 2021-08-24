import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Container from "../UI/Container"

const FooterSecondary = () => {
  return (
    <div className="py-4 bg-brandLight">
      <Container>
        <div className="secondary__footer__grid">
          <Link
            to="/"
            className="sweet__link block uppercase font-bebas font-bold text-brandDark text-xl mb-3 md:mb-0"
          >
            Sweet Liberty Drinks & Supply Co © 2021
          </Link>
          <Link
            to="/"
            className="tos__link block uppercase font-bebas font-bold text-brandDark text-xl mb-3 md:mb-0"
          >
            Terms & Condition
          </Link>
          <Link
            to="/"
            className="privacy__link block uppercase font-bebas font-bold text-brandDark text-xl mb-6 md:mb-0"
          >
            Privacy Policy
          </Link>
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noreferrer"
            className="glass__full block pb-4 md:pb-0"
          >
            <StaticImage
              src="../../assets/glass_full.svg"
              alt="Glass Full"
              placeholder="blurred"
              className="float-right"
            />
          </a>
        </div>
      </Container>
    </div>
  )
}

export default FooterSecondary
