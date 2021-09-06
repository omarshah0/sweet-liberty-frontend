import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Hero from "../components/Hero"
import PursuingExcellence from "../components/PursuingExcellence"
import FeaturedSection from "../components/FeaturedSection"
import MenuBanner from "../components/MenuBanner"
import MerchSection from "../components/MerchSection"
import { Main } from "../components/UI"

const HomePage = () => {
  return (
    <Layout>
      <Seo title="Sweet Liberty" />
      <Main className="bg-brandDark overflow-hidden">
        <Hero />
        <PursuingExcellence />
        <FeaturedSection />
        <MenuBanner />
        <MerchSection />
      </Main>
    </Layout>
  )
}

export default HomePage
