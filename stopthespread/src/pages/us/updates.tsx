import React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import UpdatesUS from "../../components/updates/Updates/us"

const UpdatesUSPage = () => {
  return (
    <Layout>
      <SEO title="Latest Updates for the US" />
      <BasicPage activeCountry={"us"}>
        <UpdatesUS />
      </BasicPage>
    </Layout>
  )
}

export default UpdatesUSPage
