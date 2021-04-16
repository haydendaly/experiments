import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import ImStruggling from "../../components/imStruggling/ImStruggling/de"

const ImStrugglingPage = () => {
  return (
    <Layout>
      <SEO
        title="Ich habe Probleme"
        description="Mit dem coronavirus umzugehen kann schwer sein. Wir wollen es einfacher für dich machen."
      />
      <BasicPage activeCountry="de">
        <ImStruggling />
      </BasicPage>
    </Layout>
  )
}

export default ImStrugglingPage
