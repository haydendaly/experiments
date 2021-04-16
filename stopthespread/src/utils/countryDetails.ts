import { headerStrings as ukHeaderStrings } from "../utils/translationStrings/uk/translations"
import { headerStrings as usHeaderStrings } from "../utils/translationStrings/us/translations"
import { headerStrings as auHeaderStrings } from "../utils/translationStrings/au/translations"
import { headerStrings as deHeaderStrings } from "../utils/translationStrings/de/translations"
import { headerStrings as nlHeaderStrings } from "../utils/translationStrings/nl/translations"

import { HeaderStrings } from "../utils/translationStrings/types"

import usSvg from "../images/countryOutlines/usa.inline.svg"
import ukSvg from "../images/countryOutlines/uk.inline.svg"
import auSvg from "../images/countryOutlines/aus.inline.svg"
import deSvg from "../images/countryOutlines/de.inline.svg"

export type CountryAbbreviation = "au" | "uk" | "us" | "de" | "nl"

type Country = {
  displayName: string
  abbreviation: CountryAbbreviation
  expandedAbbreviation: string
  browserLangAbbreviations: string[]
  enabled: boolean
  icon: string
  headerStrings: HeaderStrings
}

class CountryDetails {
  countries: Country[]
  constructor() {
    this.countries = [
      {
        displayName: "United Kingdom",
        abbreviation: "uk",
        expandedAbbreviation: "uk",
        browserLangAbbreviations: ["en-GB"],
        enabled: process.env.UK_ENABLED === "true",
        icon: ukSvg,
        headerStrings: ukHeaderStrings,
      },
      {
        displayName: "United States",
        abbreviation: "us",
        expandedAbbreviation: "usa",
        browserLangAbbreviations: ["en-US"],
        enabled: process.env.US_ENABLED === "true",
        icon: usSvg,
        headerStrings: usHeaderStrings,
      },
      {
        displayName: "Australia",
        abbreviation: "au",
        expandedAbbreviation: "aus",
        browserLangAbbreviations: ["en-AU"],
        enabled: process.env.AU_ENABLED === "true",
        icon: auSvg,
        headerStrings: auHeaderStrings,
      },
      {
        displayName: "Netherlands",
        abbreviation: "nl",
        expandedAbbreviation: "nl",
        browserLangAbbreviations: ["nl"],
        enabled: process.env.NL_ENABLED === "true",
        icon: deSvg,
        headerStrings: nlHeaderStrings,
      },
      {
        displayName: "Germany",
        abbreviation: "de",
        expandedAbbreviation: "de",
        browserLangAbbreviations: ["de"],
        enabled: process.env.DE_ENABLED === "true",
        icon: deSvg,
        headerStrings: deHeaderStrings,
      },
    ]
  }

  getAllCountriesDetails() {
    return this.countries
  }

  getActiveCountriesDetails() {
    return this.countries.filter(country => country.enabled)
  }

  getCountry(countryAbbreviation: CountryAbbreviation) {
    return this.countries.find(
      country => country.abbreviation === countryAbbreviation
    )
  }
}

export default CountryDetails
