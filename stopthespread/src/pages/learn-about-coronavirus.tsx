import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import HeadingAndIcon from "../components/shared/HeadingAndIcon"

import bat from "../images/emojis/Bat2.png"

const paragraphs = [
  <p key={0}>
    Coronaviruses are a family of viruses that are known to cause a wide range
    of illness, from the common cold to previous epidemics such as SARS.
    COVID-19 is the name of the disease caused by a new strain of the
    coronavirus. This new strain of coronavirus is called SARS-CoV-2. Viruses
    can often have a different name to the disease they cause. For example, HIV
    is the virus that causes AIDS.
  </p>,
  <p key={1}>
    Coronaviruses are zoonotic, which means they can be transmitted between
    animals and humans.The spread of the virus between humans happens through
    droplets produced from coughing and sneezing.
  </p>,
  <p key={2}>
    The most common signs of COVID-19 are a temperature, persistent cough and
    difficulty breathing. In more severe cases, the disease can cause pneumonia,
    organ failure, and even death.
  </p>,
  <p key={3}>
    Currently, there is currently no specific treatment for coronavirus. The
    most effective ways to #StopTheSpread are to wash your hands frequently,
    avoid touching your face, and minimising unnecessary social contact.{" "}
  </p>,
  <p key={4}>
    While all members of the public are at risk of infection, people more
    vulnerable for serious illness include the elderly and those with
    pre-existing medical conditions (e.g. high blood pressure, heart disease,
    diabetes).
  </p>,
  <p key={5}>
    Our understanding of COVID-19 is increasing daily, and we will be updating
    this page over the coming weeks. For more information, please refer to the{" "}
    <a
      href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
      target="_blank"
      rel="noopener noreferrer"
    >
      WHO
    </a>
  </p>,
]

const AboutPage = () => {
  return (
    <Layout>
      <SEO
        title="What is COVID-19"
        description="Coronavirus. COVID-19. Symptoms. Spreading. Treatment. Learn about the details here."
      />
      <BasicPage activeCountry="uk">
        <HeadingAndIcon
          heading={"What is COVID-19"}
          icon={bat}
          paragraphs={paragraphs}
        />
      </BasicPage>
    </Layout>
  )
}

export default AboutPage
