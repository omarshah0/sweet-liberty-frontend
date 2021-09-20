import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Hero from "../components/Hero"
import PursuingExcellence from "../components/PursuingExcellence"
import FeaturedSection from "../components/FeaturedSection"
import MenuBanner from "../components/MenuBanner"
import MerchSection from "../components/MerchSection"
import MiamiIsShit from "../components/MiamiIsShit/"
import StylishPursue from "../components/StylishPursue"
import BookingSection from "../components/BookingSection"
import NewsEvents from "../components/NewEvents"
import DoGoodWork from "../components/DoGoodWork"
import ShowAndEvents from "../components/ShowAndEvents"
import { Main } from "../components/UI"

const HomePage = () => {
  return (
    <Layout isHomepage>
      <Seo title="Sweet Liberty" />
      <Main className="bg-brandDark overflow-hidden">
        <Hero />
        <PursuingExcellence />
        <FeaturedSection />
        <MenuBanner />
        <MerchSection />
        <MiamiIsShit />
        <StylishPursue />
        <BookingSection />
        <NewsEvents />
        <DoGoodWork />
        <ShowAndEvents />
      </Main>
    </Layout>
  )
}

export default HomePage
