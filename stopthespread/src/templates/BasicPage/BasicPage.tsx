import * as React from "react"
import * as styles from "./basicPage.module.scss"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Country } from "../../components/Header/Header"
// import CookieNotification from "../../components/shared/CookieNotification"

const BasicPage = ({
  children,
  activeCountry = "UK",
  countriesActive = false,
  shareMenuEnabled = false,
}: {
  children: React.ReactNode
  activeCountry?: Country
  countriesActive?: boolean
  shareMenuEnabled?: boolean
}) => (
  <div className={styles.pageContainer}>
    <Header
      shareMenuEnabled={shareMenuEnabled}
      countriesActive={countriesActive}
      activeCountry={activeCountry}
    />
    {children}
    <Footer />
    {/* <CookieNotification /> */}
  </div>
)

export default BasicPage
