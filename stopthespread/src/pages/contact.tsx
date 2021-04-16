import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import Contact from "../components/contact/Contact"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact Us" description="We would love to hear from you." />
      <BasicPage activeCountry="uk">
        <Contact />
      </BasicPage>
    </Layout>
  )
}

export default ContactPage
