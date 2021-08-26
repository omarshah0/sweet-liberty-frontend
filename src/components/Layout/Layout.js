import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import Footer from "../Footer"

const Layout = ({ children, homepage }) => {
  const { allDatoCmsHour } = useStaticQuery(graphql`
    query MyQuery {
      allDatoCmsHour {
        nodes {
          hour {
            day
            open
            openingTime(formatString: "hh:mm a")
            closingTime(formatString: "hh:mm a")
          }
        }
      }
    }
  `)
  const hours = allDatoCmsHour.nodes
  return (
    <Fragment>
      <Header hours={hours[0]} homepage={homepage} />
      {children}
      <Footer hours={hours[0]} />
    </Fragment>
  )
}

export default Layout
