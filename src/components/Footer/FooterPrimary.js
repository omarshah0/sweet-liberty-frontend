import React from "react"

import { Container, FormButton, Contact, Address, Hours } from "../UI"

const FooterPrimary = ({ hours, openModal }) => {
  return (
    <div className="py-16 bg-brandDark">
      <Container>
        <div className="footer__grid">
          <h2 className="footer__text font-bebas text-2xl md:text-3xl text-center xl:text-left text-white uppercase mb-10 lg:w-4/5 xl:w-100">
            Situated in the up-and-coming Collins Park area alongside the Bass
            Art Museum, <span className="text-brandLight">Sweet Liberty</span>{" "}
            offers guests world-class cocktails and creative American food.
          </h2>
          <Contact className="mb-10" />
          <Address className="mb-10" />
          <div className="footer__hours mb-10">
            <Hours hours={hours} />
            <h4 className="text-brandLight font-redHatDisplay font-bold text-xl mb-4">
              For large parties (8+)
            </h4>
            <FormButton onClick={openModal}>Fill in Form</FormButton>
          </div>
          <div className="footer__social font-redHatDisplay font-bold text-socialLink">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brandLight"
            >
              Instagram
            </a>{" "}
            /{" "}
            <a
              href="https://www.facebok.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brandLight"
            >
              Facebook
            </a>{" "}
            /{" "}
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brandLight"
            >
              Twitter
            </a>{" "}
            /{" "}
            <a
              href="https://www.yelp.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brandLight"
            >
              Yelp
            </a>{" "}
            /{" "}
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brandLight"
            >
              Google
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FooterPrimary
