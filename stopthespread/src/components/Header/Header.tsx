import React, { useState } from "react"
import { navigate } from "gatsby"
import { Link } from "gatsby"
import classnames from "classnames"
import useOutsideClick from "../../utils/hooks/useOutsideClick"
import SharingMenu from "../shared/SharingMenu/SharingMenu"
import CountryDetails, { CountryAbbreviation } from "../../utils/countryDetails"

import * as styles from "./header.module.scss"

const countryDetails = new CountryDetails()

const Header = ({
  shareMenuEnabled = false,
  countriesActive = false,
  activeCountry,
}: {
  shareMenuEnabled: boolean
  activeCountry: CountryAbbreviation
  countriesActive?: boolean
}) => {
  const [
    activeTooltip,
    setActiveTooltip,
  ] = useState<CountryAbbreviation | null>(null)

  // Determines if the abbreviation is the same as the active country prop.
  const isActive = (abbreviation: CountryAbbreviation) =>
    abbreviation === activeCountry

  // Content (translation strings and country details) from the active country
  const activeContent = countryDetails.getCountry(activeCountry)

  const ref = useOutsideClick(() => {
    setActiveTooltip(null)
  })

  const navigateOnCountryClick = (abbreviation: CountryAbbreviation) => {
    if (countryDetails.getCountry(abbreviation)?.enabled) {
      abbreviation === "uk"
        ? navigate("/", { state: { forceCountry: abbreviation } })
        : navigate(`/${abbreviation}`)
    } else {
      setActiveTooltip(abbreviation)
    }
  }
  if (!activeContent) {
    throw ReferenceError("Could not find local content active country")
  } else {
    return (
      <div className={styles.container}>
        {shareMenuEnabled && <SharingMenu />}
        <div
          onClick={() => navigateOnCountryClick(activeCountry)}
          className={styles.titleContainer}
        >
          <h1 className={styles.title}>coronavirus</h1>
          <h2 className={styles.byline}>stopthespread.info</h2>
        </div>
        {countriesActive ? (
          <div className={styles.countriesActiveContainer}>
            <div ref={ref} className={styles.countriesContainer}>
              {countryDetails.getAllCountriesDetails().map(country => {
                const Icon = country.icon
                return (
                  <div
                    onClick={() => navigateOnCountryClick(country.abbreviation)}
                    key={country.abbreviation}
                    className={classnames(
                      styles.countryContainer,
                      isActive(country.abbreviation)
                        ? styles.activeCountryContainer
                        : null
                    )}
                  >
                    <Icon />
                    <p
                      className={classnames(
                        styles.label,
                        isActive(country.abbreviation) ? styles.active : null
                      )}
                    >
                      {country.expandedAbbreviation.toUpperCase()}
                    </p>
                    <div
                      className={classnames(
                        styles.unavailableTooltip,
                        activeTooltip === country.abbreviation
                          ? styles.activeTooltip
                          : null
                      )}
                    >
                      <span className={styles.tooltipText}>
                        {activeContent.headerStrings.tooltipText}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className={styles.informationContainer}>
              <p className={styles.information}>
                {activeContent.headerStrings.sources}
              </p>
              <p className={styles.information}>
                {activeContent.headerStrings.createdByText}
              </p>
            </div>
          </div>
        ) : (
          <p className={styles.informationFromWhere}>
            {activeContent.headerStrings.informationFor}
          </p>
        )}
      </div>
    )
  }
}

export default Header
