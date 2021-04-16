import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import ImStruggling from "../components/imStruggling/ImStruggling/uk"

const ImStrugglingPage = () => {
  return (
    <Layout>
      <SEO
        title="I'm Struggling"
        description="Dealing with coronavirus can be tricky. We want to help make things easier for you."
      />
      <BasicPage activeCountry="uk">
        <ImStruggling />
      </BasicPage>
    </Layout>
  )
}

export default ImStrugglingPage
