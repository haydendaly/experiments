import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import UsingThisWebsite from "../components/usingThisWebsite/UsingThisWebsite"

const UsingThisWebsitePage = () => {
  return (
    <Layout>
      <SEO
        title="Using this Website"
        description="All the coronavirus information you need in one place. Find out what you should do. Together we can stop the spread!"
      />
      <BasicPage activeCountry="uk">
        <UsingThisWebsite />
      </BasicPage>
    </Layout>
  )
}

export default UsingThisWebsitePage
