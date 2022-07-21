import React, { useState, useEffect, lazy, Suspense } from "react"
// import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Hero from "../components/Hero"
import PursuingExcellence from "../components/PursuingExcellence"

import ScrollTop from "../components/ScrollTop"
import { Main } from "../components/UI"

import FeaturedSection from "../components/FeaturedSection"

import MenuBanner from "../components/MenuBanner"

// const MerchSection = lazy(() => import("../components/MerchSection"))

import MiamiIsShit from "../components/MiamiIsShit"

import StylishPursue from "../components/StylishPursue"

import BookingSection from "../components/BookingSection"

import NewsEvents from "../components/NewEvents"

import DoGoodWork from "../components/DoGoodWork"

import ShowAndEvents from "../components/ShowAndEvents"

const TripleSeatModal = lazy(() =>
  import("../components/Modals/TripleSeatModa")
)

// const HomePage = ({ data: { allShopifyProduct } }) => {
const HomePage = () => {
  const [tripleSeatModal, setTripleSeatModal] = useState(false)
  const bookTripleSeatHandler = () => {
    // setTripleSeatModal(!tripleSeatModal)

    if (!tripleSeatModal) {
      //No Scrolling When Modal is Opened
      document.body.style.overflow = "hidden"
      setTripleSeatModal(true)
    }
    if (tripleSeatModal) {
      //Scrolling When Modal is Opened
      document.body.style.overflow = "auto"

      setTripleSeatModal(false)
    }
  }

  useEffect(() => {
    window.SevenroomsWidget.init({
      venueId: "mysweetliberty",
      triggerId: ["sr-res-root"],
      type: "reservations",
    })
  })

  return (
    <Layout isDark isHomepage openModal={bookTripleSeatHandler}>
      <Seo title="Sweet Liberty By Glass Full" />
      <Main className="bg-brandDark overflow-hidden md:pt-48">
        <Hero />
        <PursuingExcellence />
        <FeaturedSection />
        <MenuBanner />
        <MiamiIsShit />
        <div className="bg-black">
          <StylishPursue />
          <BookingSection openModal={bookTripleSeatHandler} />
        </div>
        <NewsEvents />
        <DoGoodWork />
        <ShowAndEvents />

        {/* <Suspense
          fallback={() => <p style={{ display: "none" }}>Loading...</p>}
        ></Suspense>
        <Suspense
          fallback={() => <p style={{ display: "none" }}>Loading...</p>}
        ></Suspense>
        <Suspense
          fallback={() => <p style={{ display: "none" }}>Loading...</p>}
        ></Suspense> */}
        {/* <Suspense
          fallback={() => <p style={{ display: "none" }}>Loading...</p>}
        >
          <MerchSection products={allShopifyProduct.nodes} />
        </Suspense> */}

        {/* <Suspense
          fallback={() => <p style={{ display: "none" }}>Loading...</p>}
        ></Suspense>
        <Suspense
          fallback={() => <p style={{ display: "none" }}>Loading...</p>}
        ></Suspense>
        <Suspense
          fallback={() => <p style={{ display: "none" }}>Loading...</p>}
        ></Suspense>
        <Suspense
          fallback={() => <p style={{ display: "none" }}>Loading...</p>}
        ></Suspense> */}
        <ScrollTop />
      </Main>
      <Suspense fallback={() => <p style={{ display: "none" }}>Loading...</p>}>
        <TripleSeatModal
          isModelOpen={tripleSeatModal}
          closeModal={bookTripleSeatHandler}
        />
      </Suspense>
    </Layout>
  )
}

// export const query = graphql`
//   {
//     allShopifyProduct(limit: 3, sort: { order: DESC, fields: createdAt }) {
//       nodes {
//         title
//         handle
//         priceRangeV2 {
//           minVariantPrice {
//             amount
//           }
//         }
//         featuredImage {
//           localFile {
//             childImageSharp {
//               gatsbyImageData
//             }
//           }
//           altText
//         }
//       }
//     }
//   }
// `

export default HomePage
