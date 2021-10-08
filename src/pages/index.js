import React from "react"
import lodable from "@loadable/component"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Hero from "../components/Hero"
import PursuingExcellence from "../components/PursuingExcellence"
import MenuBanner from "../components/MenuBanner"
import MerchSection from "../components/MerchSection"
import BookingSection from "../components/BookingSection"
import NewsEvents from "../components/NewEvents"
import DoGoodWork from "../components/DoGoodWork"
import ShowAndEvents from "../components/ShowAndEvents"

import ScrollTop from "../components/ScrollTop"
import { Main } from "../components/UI"

//Importing Lazy
const FeaturedSection = lodable(() => import("../components/FeaturedSection"), {
  fallback: (
    <div>
      <p>The Pina Colada</p>
      <p>The Miami Martini</p>
    </div>
  ),
})
const StylishPursue = lodable(() => import("../components/StylishPursue"), {
  fallback: <p>Pursue Happiness</p>,
})
const MiamiIsShit = lodable(() => import("../components/MiamiIsShit"), {
  fallback: <p>Miami Is Shit</p>,
})

const HomePage = () => {
  return (
    <Layout isDark>
      <Seo title="Sweet Liberty By Glass Full" />
      <Main className="bg-brandDark overflow-hidden md:pt-48">
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
        <ScrollTop />
      </Main>
    </Layout>
  )
}

export default HomePage
