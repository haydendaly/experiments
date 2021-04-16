import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import Updates from "../components/updates/Updates/uk"

const UpdatesUKPage = () => {
  return (
    <Layout>
      <SEO title="Latest Updates for the UK" />
      <BasicPage activeCountry="uk">
        <Updates />
      </BasicPage>
    </Layout>
  )
}

export default UpdatesUKPage
