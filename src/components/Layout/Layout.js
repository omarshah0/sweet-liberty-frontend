import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"

// import ScrollProgress from "../ScrollProgress"
import Header from "../Header"
import Footer from "../Footer"

const Layout = ({ children, isDark, isHomepage, smallLogo, menuPageDark }) => {
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
      {/* <ScrollProgress /> */}
      <Header
        hours={hours[0]}
        isDark={isDark}
        isHomepage={isHomepage}
        menuPageDark={menuPageDark}
        smallLogo={smallLogo}
      />
      {children}
      <Footer hours={hours[0]} />
    </Fragment>
  )
}

export default Layout
