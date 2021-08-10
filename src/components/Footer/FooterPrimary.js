import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Container, FormButton } from "../UI"
import { timeConverter } from "../../utilities"

const FooterPrimary = () => {
  const { allStrapiHours } = useStaticQuery(graphql`
    query HoursQuery($sort: StrapiHoursSortInput = { fields: id }) {
      allStrapiHours(sort: $sort) {
        nodes {
          Day
          Open
          OpeningTime
          ClosingTime
        }
      }
    }
  `)
  const hours = allStrapiHours.nodes
  return (
    <div className="py-16 bg-brandDark">
      <Container>
        <div className="footer__grid">
          <h2 className="footer__text font-bebas text-2xl md:text-3xl text-white uppercase mb-10 lg:w-100">
            Situated in the up-and-coming Collins Park area alongside the Bass
            Art Museum, <span className="text-brandLight">Sweet Liberty</span>{" "}
            offers guests world-class cocktails and creative American food.
          </h2>
          <div className="footer__contact mb-10">
            <h3 className="text-brandLight font-redHatDisplay font-bold text-xl mb-4">
              Contact
            </h3>
            <h4 className="text-white font-redHatDisplay text-xl mb-3">
              <strong>Call:</strong> <a href="tel:05.763.8217">05.763.8217</a>
            </h4>
            <h4 className="text-white font-redHatDisplay text-xl">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@mysweetliberty.com">
                info@mysweetliberty.com
              </a>
            </h4>
          </div>
          <div className="footer__address mb-10">
            <h3 className="text-brandLight font-redHatDisplay font-bold text-xl mb-4">
              Address
            </h3>
            <h4 className="text-white font-redHatDisplay text-xl mb-3">
              237-B 20th Street
            </h4>
            <h4 className="text-white font-redHatDisplay text-xl">
              Miami Beach • FL • 33139
            </h4>
          </div>
          <div className="footer__hours mb-10">
            <h3 className="text-brandLight font-redHatDisplay font-bold text-xl mb-4">
              Hours
            </h3>
            {/* <h4 className="text-white font-redHatDisplay text-xl mb-3">
              <strong>Everyday:</strong> 4:00 PM - 5:00 PM
            </h4>
            <h4 className="text-white font-redHatDisplay text-xl mb-3">
              <strong>Happy Hour:</strong> 4:00 PM - 7:00 PM
            </h4>
            <h4 className="text-white font-redHatDisplay text-xl mb-8">
              <strong>Sunday Brunch:</strong> 12:00 PM - 5:00 PM
            </h4> */}
            {React.Children.toArray(
              hours.map(
                h =>
                  h.Open && (
                    <h4 className="text-white font-redHatDisplay text-xl mb-3">
                      <strong>{h.Day}: </strong>
                      {timeConverter(h.OpeningTime)} -{" "}
                      {timeConverter(h.ClosingTime)}
                    </h4>
                  )
              )
            )}
            <h4 className="text-brandLight font-redHatDisplay font-bold text-xl mb-4">
              For large parties (8+)
            </h4>
            <FormButton>Fill in Form</FormButton>
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
