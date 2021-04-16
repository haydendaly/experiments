import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import HowToSelfIsolate from "../../components/howToSelfIsolate/HowToSelfIsolate/de"

const HowToSelfIsolatePage = () => {
  return (
    <Layout>
      <SEO
        title="Wie kannst du dich isolieren?"
        description="Deine Anleitung zur Isolation."
      />
      <BasicPage activeCountry="de">
        <HowToSelfIsolate />
      </BasicPage>
    </Layout>
  )
}

export default HowToSelfIsolatePage
