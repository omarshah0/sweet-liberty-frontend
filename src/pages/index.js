import React from "react"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import PursuingExcellence from "../components/PursuingExcellence"
import { Main } from "../components/UI"

const HomePage = () => {
  return (
    <Layout>
      <Main className="bg-brandDark">
        <Hero />
        <PursuingExcellence />
      </Main>
    </Layout>
  )
}

export default HomePage
