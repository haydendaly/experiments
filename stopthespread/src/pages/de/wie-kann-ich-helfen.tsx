import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import StopTheSpread from "../../components/stopTheSpread/StopTheSpread/de"

const StopTheSpreadPage = () => {
  return (
    <Layout>
      <SEO
        title="Wie du helfen kannst"
        description="Die Top Dinge, die du tun kannst um die Ausbreitung zu verringern."
      />
      <BasicPage activeCountry="de">
        <StopTheSpread />
      </BasicPage>
    </Layout>
  )
}

export default StopTheSpreadPage
