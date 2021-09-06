import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SmoothScrollWrapper from "../SmoothScrollWrapper"
import Header from "../Header"
import Footer from "../Footer"

const Layout = ({ children }) => {
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
    <SmoothScrollWrapper>
      <Header hours={hours[0]} />
      {children}
      <Footer hours={hours[0]} />
    </SmoothScrollWrapper>
  )
}

export default Layout
