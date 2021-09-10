import React from "react"

import Layout from "../components/Layout"
import { Main, Container } from "../components/UI"

const HomePage = () => {
  return (
    <Layout>
      <Main>
        <Container>
          <h1 className="font-bebas text-[116px] leading-[119px] text-brandLight ml-[120px]">
            This is Sweet Liberty.
            <br />
            Enjoyed by the <br />
            Tourists, Loved By <br />
            The Locals
          </h1>
        </Container>
      </Main>
    </Layout>
  )
}

export default HomePage
