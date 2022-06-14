import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import { Main, Container } from "../components/UI"

const ShopifyProductTemaplate = ({ location }) => {
  return (
    <Layout smallLogo>
      <Seo title="Shop - Sweet Liberty" />
      <Main className="bg-white overflow-hidden md:pt-48  lg:pb-[163px]">
        <Container>
          <h1 className="font-bebas text-[60px] leading-[60px] text-brandDark text-center md:text-[80px] md:leading-[65px] lg:text-[116px] lg:leading-[119px]">
            Shop Comming Soon
          </h1>
        </Container>
      </Main>
    </Layout>
  )
}

export default ShopifyProductTemaplate
