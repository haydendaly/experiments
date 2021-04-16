import React from "react"
import shortid from "shortid"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import FAQ from "../../components/shared/FAQ"
import InfoTile from "../../components/shared/InfoTile"
import TileContent from "../../components/shared/InfoTile/TileContent"

import createParagraphLink from "../../utils/createParagraphLink"

import * as mythStyles from "../../components/myths/Myths/myths.module.scss"
import * as styles from "../../components/otherConditions/otherConditions.module.scss"
import * as questionStyles from "../../components/shared/FAQ/faq.module.scss"
import * as infoTileStyles from "../../components/shared/InfoTile/infoTile.module.scss"

import thermometer from "../../images/emojis/Thermometer1.png"
import house from "../../images/emojis/House1.png"
import helmet1 from "../../images/emojis/helmet1.png";

const tileContents = [
  {
    title: "Developing Symptoms?",
    byline: null,
    icon: thermometer,
    details: [
      "Fever and cough are common symptoms",
      "If you are having trouble breathing, get medical help! Call your doctor or emergency room first before going in.",
      "Refer to your state health department for COIVD-19 hotlines and testing guidelines",
      "Wear a face-covering cloth and practice hand hygiene before leaving the home."
    ],
    color: "#f49876",
    bottomBar: true,
    bottomText: null,
  },
  {
    title: "Household Prevention",
    byline: null,
    icon: house,
    details: [
      "Wash hands often with soap and water for 20 seconds",
      "Have a designated \"sick room\" and \"sick bathroom\" if possible.",
      "Wear a cloth face cover over your nose and mouth when around others",
      "Cover coughs and sneezes with tissue",
      "Do not share dishes, towels, or bedding",
      "Clean and disinfect all high-touch surfaces in your \"sick room\" routinely",
    ],
    color: "#91afce",
    warning: false,
    bottomBar: true,
    bottomText: null,
  },
  {
    title: "Doctor's Appointments",
    byline: null,
    icon: helmet1,
    details: [
      "Call ahead, even if you are having trouble breathing! They will tell you what to do.",
      "Many visits are being postponed or transitioned to telemedicine.",
      "If you think you may have COVID-19 symptoms contact your state health department hotline State Health Department Phone Numbers and Websites"
    ],
    color: "#7fbe4d",
    bottomBar: true,
    bottomText: (
      <p className={infoTileStyles.bottomText}>
        Find state hotlines {" "}
        {createParagraphLink(
          "https://www.cdc.gov/coronavirus/2019-ncov/downloads/Phone-Numbers_State-and-Local-Health-Departments.pdf",
          "here"
        )}
      </p>
    ),
  },
]

const faqContent = [
  {
    question: "Can my pets get COVID-19?",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        At this point, there is no evidence that COVID-19 has infected pets in the United States. Additionally, pets do not need to be tested. Maintaining good hygiene remains important to practice around your pets. If sick, have another household member care for the animals and avoid petting, snuggling, and sharing food with your pet.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/animals.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fprepare%2Fanimals.html ",
      linkDisplay: "CDC Daily Life Coping Guidance",
    },
  },
  {
    question: "When is it safe to leave my home after isolation?",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        If you are NOT receiving formal COVID-19 Testing, you can leave home if:
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        1) you have not had a fever for a full three days without medications AND 2) cough and shortness of breath have improved AND 3)it has been at least 7 days since your symptoms started.
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        2) cough and shortness of breath have improved AND
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        3) it has been at least 7 days since your symptoms started.
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        If you are being tested for COVID-19, you can leave the home if:
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        1) you no longer have a fever without medication AND,
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        2) cough or shortness of breath have improved, AND,
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
          3) you have received two negative tests in a row 24 hours apart.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.cdc.gov/coronavirus/2019-ncov/hcp/disposition-in-home-patients.html",
      linkDisplay: "CDC Disposition In Home Guidelines",
    },
  },
  {
    question: "Why a cloth face cover instead of a medical mask?",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        Cloth face coverings can be made at a low cost using regular household items. They have been shown to effectively slow the spread of the virus and prevent transmission, especially among people who may not know they are sick. Medical, surgical, and N-95 respirator masks should be reserved for healthcare workers and medical responders. There are many youtube tutorials on creating your own face masks using cloths, bandanas, sewing machines, etc.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cloth-face-cover.html](https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cloth-face-cover.html",
      linkDisplay: "CDC Sickness Prevention Guidelines",
    },
  },
]

const IfYouMightBeSickPage = () => {
  return (
    <Layout>
      <SEO
        title="What To Do If You Are Sick"
      />
      <BasicPage activeCountry={"us"}>
        <div className={styles.container}>
          <h1 className={mythStyles.heading}>What To Do If You Are Sick</h1>
          {tileContents.map(tile => (
            <InfoTile
              key={tile.title}
              title={tile.title}
              icon={tile.icon}
              color={tile.color}
              bottomBar={tile.bottomBar}
              bottomText={tile.bottomText}
            >
              <TileContent
                color={tile.color}
                byline={tile.byline}
                details={tile.details}
                warning={tile.warning}
              />
            </InfoTile>
          ))}
        </div>
        <FAQ title="Your Questions Answered" faqContent={faqContent} />
      </BasicPage>
    </Layout>
  )
}

export default IfYouMightBeSickPage
