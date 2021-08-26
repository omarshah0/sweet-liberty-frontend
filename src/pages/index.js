import React from "react"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { Main, Container } from "../components/UI"

const HomePage = () => {
  return (
    <Layout>
      <Main className="bg-brandDark">
        <Container>
          <Hero />
        </Container>
      </Main>
    </Layout>
  )
}

export default HomePage
