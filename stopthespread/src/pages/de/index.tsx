import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import HomepageTiles from "../../components/index/HomepageTiles/de"
import BasicPage from "../../templates/BasicPage"
import MoreInformation from "../../components/index/MoreInformation/de"
import SpecialAdvice from "../../components/index/SpecialAdvice/de/SpecialAdvice"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <BasicPage
        activeCountry="de"
        countriesActive={true}
        shareMenuEnabled={false}
      >
        <HomepageTiles />
        <SpecialAdvice />
        <MoreInformation />
      </BasicPage>
    </Layout>
  )
}

export default IndexPage
