import React from "react"
import shortid from "shortid"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import FAQ from "../../components/shared/FAQ"
import InfoTile from "../../components/shared/InfoTile"
import TileContent from "../../components/shared/InfoTile/TileContent"

import * as styles from "../../components/otherConditions/otherConditions.module.scss"
import * as questionStyles from "../../components/shared/FAQ/faq.module.scss"
import * as infoTileStyles from "../../components/shared/InfoTile/infoTile.module.scss"

import phone from "../../images/emojis/phone1.png"
import speechBubble from "../../images/emojis/SpeechBubble1.png"

const tileContents = [
  {
    title: "Talk to your employer",
    byline: null,
    icon: phone,
    details: [
      "They should provide you with specific advice",
      "Offer you personal protective equipment (PPE) if you need it: gloves, aprons, fluid-repellant surgical masks, eye protection",
    ],
    color: "#333333",
    warning: false, // Including these to suppress typesccript warnings below
    bottomText: null,
  },
  {
    title: "Talk to the person you care for:",
    byline: null,
    icon: speechBubble,
    details: [
      "Do they have symptoms of coronavirus: a high fever or a new, continuous cough?",
      "Have they been in contact with someone who has these symptoms?",
    ],
    color: "#a3a3a3",
    bottomText: (
      <p className={infoTileStyles.bottomText}>
        If yes, you should take extra steps to be careful (described below)
      </p>
    ),
  },
]

const faqContent = [
  {
    question: "How can I reduce the risk of getting coronavirus?",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        1. Reduce as much public contact as possible – for example, avoid
        restaurants
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        2. Wash your hands with soap and water regularly
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        3. Don’t touch your face
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        4. Strictly follow the advice at the very top of this page
      </p>,
    ],
    source: {
      linkTo:
        "https://www.gov.uk/government/publications/covid-19-guidance-on-social-distancing-and-for-vulnerable-people/guidance-on-social-distancing-for-everyone-in-the-uk-and-protecting-older-people-and-vulnerable-adults#how-can-i-get-assistance-with-foods-and-medicines-if-i-am-reducing-my-social-contacts",
      linkDisplay: "NHS and Public Health England Coronavirus Guidance",
    },
  },
  {
    question:
      "I think I might have the symptoms of coronavirus - what should I do?",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        You should follow the CDC self-isolation
        guidance as found here. Inform your employer immediately of your
        situation, and do not go back to caring until your self-isolation has
        ended. It can be very dangerous if you have symptoms and still care for
        someone.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.gov.uk/government/publications/covid-19-residential-care-supported-living-and-home-care-guidance",
      linkDisplay: "NHS and Public Health England Coronavirus Guidance",
    },
  },
  {
    question:
      "I am caring for someone that has (the symptoms of) coronavirus - what should I do?",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        1 - Use personal protective equipment (PPE) every time you are in close
        contact with the person you are caring for. This involves:
      </p>,
      <ul key={shortid.generate()} className={questionStyles.questionList}>
        <li className={questionStyles.questionAnswer}>aprons</li>
        <li className={questionStyles.questionAnswer}>gloves </li>
        <li className={questionStyles.questionAnswer}>
          fluid-repellant surgical masks
        </li>
        <li className={questionStyles.questionAnswer}>eye protection</li>
      </ul>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        if there is a risk of splashing You must use new PPE for each time you
        care for someone. If you care for someone multiple times a day, you
        should use new PPE each time. Never re-use PPE.
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        2 - Clean frequently touched surfaces with a disinfectant wipe or spray
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        3 - Take extra caution. Be sure to wash your hands with soap and water
        regularly for 20 seconds each time, avoid touching your face, and keep
        as much distance as possible.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.gov.uk/government/publications/covid-19-residential-care-supported-living-and-home-care-guidance",
      linkDisplay: "NHS and Public Health England Coronavirus Guidance",
    },
  },
  {
    question:
      "Someone else in the household I'm going to has (the symptoms of) coronavirus - what should I do?",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        Find out if the person you are caring for is properly self-isolating
        from the person who is ill. This means not sharing a bathroom, not
        sharing a bedroom, and keeping 2m at all times from the person who is
        ill.
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        If you think this is the case, you do not need to use any personal
        protective equipment (PPE).
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        If the person you are caring for has been in contact with the person who
        is ill, or shares a bathroom or bedroom with the person who is ill, you
        should care for them as if they had the symptoms of coronavirus. This
        means: - Using PPE (aprons, gloves, masks, eye protection if necessary)
        - Cleaning frequently touched surfaces with disinfectants - Taking extra
        caution by washing your hands regularly, avoiding touching your face,
        and keeping as much distance as possible
      </p>,
    ],
    source: {
      linkTo:
        "https://www.gov.uk/government/publications/covid-19-residential-care-supported-living-and-home-care-guidance",
      linkDisplay: "NHS and Public Health England Coronavirus Guidance",
    },
  },
  {
    question: "What should I do with waste?",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        If you're caring for someone with the symptoms of coronavirus, you
        should double bag personal waste, tie it securely, and leave it aside
        for 72 hours. Do not put it next to any other waste. You can then put it
        in your normal waste bin.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.gov.uk/government/publications/covid-19-residential-care-supported-living-and-home-care-guidance",
      linkDisplay: "NHS and Public Health England Coronavirus Guidance",
    },
  },
  {
    question: "What should I do with laundry?",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        If you're caring for someone with the symptoms of coronavirus, you
        should wash clothing with laundry detergent at a high temperature
        setting. Do not shake laundry before washing, as this can help spread
        the virus.
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        If there is no laundry machine on site, you should leave laundry in a
        bag and wait for 72 hours. After this, you can do the laundry in a
        public laundromat.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.gov.uk/government/publications/covid-19-residential-care-supported-living-and-home-care-guidance",
      linkDisplay: "NHS and Public Health England Coronavirus Guidance",
    },
  },
  {
    question: "Should I use PPE if no one has symptoms of coronavirus?",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        You should use only what PPE you normally use. If there are symptoms of
        coronavirus, you should use aprons, gloves, masks, and eye protection if
        necessary.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.gov.uk/government/publications/covid-19-residential-care-supported-living-and-home-care-guidance",
      linkDisplay: "NHS and Public Health England Coronavirus Guidance",
    },
  },
]

const ElderlyPage = () => {
  return (
    <Layout>
      <SEO
        title="Carer"
        description="Are you a carer? Here's the special coronavirus advice you need to know"
      />
      <BasicPage activeCountry={"us"}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Carer</h1>
          <p className={styles.byline}>
            You may need to take extra caution as a carer.
          </p>
          {tileContents.map(tile => (
            <InfoTile
              key={tile.title}
              title={tile.title}
              icon={tile.icon}
              color={tile.color}
              bottomBar={true}
              bottomText={tile.bottomText}
              warning={tile.warning}
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

export default ElderlyPage
