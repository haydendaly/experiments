import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import Questions from "../components/ifYouMightBeSick/Questions/uk"

const IfYouMightBeSickPage = () => {
  return (
    <Layout>
      <SEO
        title="I Might Be Sick"
        description="Think you might be ill? We'll help you find out what to do next here."
      />
      <BasicPage activeCountry="uk">
        <Questions />
      </BasicPage>
    </Layout>
  )
}

export default IfYouMightBeSickPage
