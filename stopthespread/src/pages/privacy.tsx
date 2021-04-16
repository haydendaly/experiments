import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import Privacy from "../components/privacy/Privacy"

const PrivacyPage = () => {
  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="All the coronavirus information you need in one place. Find out what you should do. Together we can stop the spread!"
      />
      <BasicPage activeCountry="uk">
        <Privacy />
      </BasicPage>
    </Layout>
  )
}

export default PrivacyPage
