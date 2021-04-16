import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import HomepageTiles from "../../components/index/HomepageTiles/us"
import BasicPage from "../../templates/BasicPage"
import MoreInformation from "../../components/index/MoreInformation/us"
import Form from "../../components/index/Form"
import SpecialAdvice from "../../components/index/SpecialAdvice/us"
import LocalGroups from "../../components/index/LocalGroups"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <BasicPage
        activeCountry={"us"}
        countriesActive={true}
        shareMenuEnabled={false}
      >
        <HomepageTiles />
        <SpecialAdvice />
        {/* <LocalGroups /> */}
        <Form />
        <MoreInformation />
      </BasicPage>
    </Layout>
  )
}

export default IndexPage
