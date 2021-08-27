import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Hero from "../components/Hero"
import PursuingExcellence from "../components/PursuingExcellence"
import { Main } from "../components/UI"

const HomePage = () => {
  return (
    <Layout>
      <Seo title="Sweet Liberty" />
      <Main className="bg-brandDark overflow-hidden">
        <Hero />
        <PursuingExcellence />
        <div className="bg-brandLight h-52"></div>
      </Main>
    </Layout>
  )
}

export default HomePage
