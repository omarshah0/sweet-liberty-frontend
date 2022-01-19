import React, { useState, useEffect, lazy, Suspense } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Hero from "../components/Hero"
import PursuingExcellence from "../components/PursuingExcellence"

import ScrollTop from "../components/ScrollTop"
import { Main } from "../components/UI"

const FeaturedSection = lazy(() => import("../components/FeaturedSection"))

const MenuBanner = lazy(() => import("../components/MenuBanner"))

const MerchSection = lazy(() => import("../components/MerchSection"))

const MiamiIsShit = lazy(() => import("../components/MiamiIsShit"))

const StylishPursue = lazy(() => import("../components/StylishPursue"))

const BookingSection = lazy(() => import("../components/BookingSection"))

const NewsEvents = lazy(() => import("../components/NewEvents"))

const DoGoodWork = lazy(() => import("../components/DoGoodWork"))

const ShowAndEvents = lazy(() => import("../components/ShowAndEvents"))

const TripleSeatModal = lazy(() =>
  import("../components/Modals/TripleSeatModa")
)

const HomePage = ({ data: { allShopifyProduct } }) => {
  const [tripleSeatModal, setTripleSeatModal] = useState(false)
  const bookTripleSeatHandler = () => {
    setTripleSeatModal(!tripleSeatModal)
  }

  useEffect(() => {
    window.SevenroomsWidget.init({
      venueId: "mysweetliberty",
      triggerId: ["sr-res-root"],
      type: "reservations",
    })
  })

  return (
    <Layout isDark isHomepage>
      <Seo title="Sweet Liberty By Glass Full" />
      <Main className="bg-brandDark overflow-hidden md:pt-48">
        <Hero />
        <PursuingExcellence />
        <Suspense
          fallback={() => <p style={{ display: "none" }}>Loading...</p>}
        >
          <FeaturedSection />
        </Suspense>
        <Suspense
          fallback={() => <p style={{ display: "none" }}>Loading...</p>}
        >
          <MenuBanner />
        </Suspense>
        <Suspense
          fallback={() => <p style={{ display: "none" }}>Loading...</p>}
        >
          <MiamiIsShit />
        </Suspense>
        <Suspense
          fallback={() => <p style={{ display: "none" }}>Loading...</p>}
        >
          <MerchSection products={allShopifyProduct.nodes} />
        </Suspense>

        <Suspense
          fallback={() => <p style={{ display: "none" }}>Loading...</p>}
        >
          <div className="bg-black">
            <StylishPursue />
            <BookingSection openModal={bookTripleSeatHandler} />
          </div>
        </Suspense>
        <Suspense
          fallback={() => <p style={{ display: "none" }}>Loading...</p>}
        >
          <NewsEvents />
        </Suspense>
        <Suspense
          fallback={() => <p style={{ display: "none" }}>Loading...</p>}
        >
          <DoGoodWork />
        </Suspense>
        <Suspense
          fallback={() => <p style={{ display: "none" }}>Loading...</p>}
        >
          <ShowAndEvents />
        </Suspense>
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

export const query = graphql`
  {
    allShopifyProduct(limit: 3, sort: { order: DESC, fields: createdAt }) {
      nodes {
        title
        handle
        priceRangeV2 {
          minVariantPrice {
            amount
          }
        }
        featuredImage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          altText
        }
      }
    }
  }
`

export default HomePage
