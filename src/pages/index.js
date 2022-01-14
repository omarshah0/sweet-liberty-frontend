import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import loadable from "@loadable/component"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Hero from "../components/Hero"

import ScrollTop from "../components/ScrollTop"
import { Main } from "../components/UI"

const PursuingExcellence = loadable(
  () => import("../components/PursuingExcellence"),
  {
    fallback: (
      <p className="font-bebas text-[60px] leading-[60px] text-brandLight md:text-[80px] md:leading-[65px] lg:text-[116px] lg:leading-[119px]">
        This is sweet liberty. Enjoyed by tourists, loved by locals.
      </p>
    ),
  }
)

const FeaturedSection = loadable(
  () => import("../components/FeaturedSection"),
  {
    fallback: (
      <div>
        <p>The Florida Cocktail</p>
        <p>Our Pina Colada</p>
        <p>Blue Zombie Cocktail</p>
      </div>
    ),
  }
)

const MenuBanner = loadable(() => import("../components/MenuBanner"), {
  fallback: (
    <p>PursuingExcellence Sprited Awards Logo Best Bars Logo Timeout Logo</p>
  ),
})

const MerchSection = loadable(() => import("../components/MerchSection"), {
  fallback: <p>Order Your Sweet LibertySweet Liberty Merch NowMerch Now</p>,
})
const MiamiIsShit = loadable(() => import("../components/MiamiIsShit"), {
  fallback: <p>Miami Is The Shit Bro</p>,
})

const StylishPursue = loadable(() => import("../components/StylishPursue"), {
  fallback: <p>Pursing Happiness</p>,
})

const BookingSection = loadable(() => import("../components/BookingSection"), {
  fallback: (
    <div>
      <p>Book A Party</p>,<p>Make A Reservation</p>,
    </div>
  ),
})

const NewsEvents = loadable(() => import("../components/NewEvents"), {
  fallback: <p>News and Events</p>,
})

const DoGoodWork = loadable(() => import("../components/DoGoodWork"), {
  fallback: <p>Our greatest award is being able to open every day</p>,
})

const ShowAndEvents = loadable(() => import("../components/ShowAndEvents"), {
  fallback: (
    <p>
      Fruit cock tail drag show <br />
      Every sunday 12:30 PM & 2:30 PM shows
    </p>
  ),
})

const TripleSeatModal = loadable(() =>
  import("../components/Modals/TripleSeatModa")
)

const HomePage = ({ data: { allShopifyProduct } }) => {
  const [tripleSeatModal, setTripleSeatModal] = useState(false)
  useEffect(() => {
    window.SevenroomsWidget.init({
      venueId: "mysweetliberty",
      triggerId: "sr-res-root",
      type: "reservations",
    })
  })

  const bookTripleSeatHandler = () => {
    setTripleSeatModal(!tripleSeatModal)
  }

  return (
    <Layout isDark isHomepage>
      <Seo title="Sweet Liberty By Glass Full" />
      <Main className="bg-brandDark overflow-hidden md:pt-48">
        <Hero />
        <PursuingExcellence />
        <FeaturedSection />
        <MenuBanner />
        <MerchSection products={allShopifyProduct.nodes} />
        <MiamiIsShit />
        <div className="bg-black">
          <StylishPursue />
          <BookingSection openModal={bookTripleSeatHandler} />
        </div>
        <NewsEvents />
        <DoGoodWork />
        <ShowAndEvents />
        <ScrollTop />
      </Main>

      {tripleSeatModal && (
        <TripleSeatModal closeModal={bookTripleSeatHandler} />
      )}
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
