import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import HeadingAndIcon from "../components/shared/HeadingAndIcon"

import speechBubble from "../images/emojis/SpeechBubble2.png"

const paragraphs = [
  <p key={0}>
    We are a group of student doctors, programmers and scientists from Cambridge
    aiming to improve access to the advice and guidance regarding the 2020
    Coronavirus outbreak in the UK.
  </p>,
  <p key={1}>
    All of the information on this website is based on World Health Organisation
    (WHO), National Health Service (NHS) and national government guidance,
    unless otherwise indicated. We will seek to update it regularly as new
    information and guidance becomes available.
  </p>,
  <p key={2}>
    We are proud to work with{" "}
    <a
      href="https://www.helpthemhelpus.co.uk/"
      target="_blank"
      rel="noopener noreferrer"
    >
      H E R O E S
    </a>
    .
  </p>,
]

const AboutPage = () => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="Our aim: improve the access to the advice and guidance regarding the 2020 coronavirus outbreak."
      />
      <BasicPage activeCountry="uk">
        <HeadingAndIcon
          heading={"About this website"}
          icon={speechBubble}
          paragraphs={paragraphs}
        />
      </BasicPage>
    </Layout>
  )
}

export default AboutPage
