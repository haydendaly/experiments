import React, { useEffect } from "react"
import { navigate } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import HomepageTiles from "../components/index/HomepageTiles/uk"
import BasicPage from "../templates/BasicPage"
import MoreInformation from "../components/index/MoreInformation/uk"
import Form from "../components/index/Form"
import SpecialAdvice from "../components/index/SpecialAdvice/uk"
import LocalGroups from "../components/index/LocalGroups"
import CountryDetails, { CountryAbbreviation } from "../utils/countryDetails"

const countryDetails = new CountryDetails()

const getRedirectLanguage = (forceCountry: CountryAbbreviation | undefined) => {
  if (forceCountry === "uk" || typeof navigator === `undefined`) {
    return null
  }

  if (forceCountry) {
    return forceCountry
  }

  const lang = navigator && navigator.language
  if (!lang) return null

  const countries = countryDetails.getAllCountriesDetails()

  for (const country of countries) {
    if (country.browserLangAbbreviations.includes(lang)) {
      if (country.abbreviation === "uk") {
        return null
      }
      return country.abbreviation
    }
  }

  return null
}

const IndexPage = ({
  location,
}: {
  location?: { state: { forceCountry: CountryAbbreviation } }
}) => {
  useEffect(() => {
    const forceCountry =
      location && location.state && location.state.forceCountry
    const urlLang = getRedirectLanguage(forceCountry)
    urlLang && navigate(`/${urlLang}`)
  }, [location])
  return (
    <Layout>
      <SEO title="Home" />
      <BasicPage countriesActive={true} activeCountry="uk">
        <HomepageTiles />
        <SpecialAdvice />
        <LocalGroups />
        <Form />
        <MoreInformation />
      </BasicPage>
    </Layout>
  )
}
export default IndexPage
