import React from "react"
import shortid from "shortid"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BasicPage from "../templates/BasicPage"
import FAQ from "../components/shared/FAQ"
import InfoTile from "../components/shared/InfoTile"
import TileContent from "../components/shared/InfoTile/TileContent"

import createParagraphLink from "../utils/createParagraphLink"

import * as styles from "../components/otherConditions/otherConditions.module.scss"
import * as questionStyles from "../components/shared/FAQ/faq.module.scss"
import * as infoTileStyles from "../components/shared/InfoTile/infoTile.module.scss"

import siren from "../images/emojis/siren1.png"
import thermometer from "../images/emojis/Thermometer1.png"

const tileContents = [
  {
    title: "Take extra caution",
    byline: null,
    icon: siren,
    details: [
      "Strictly avoid public activities, e.g. restaurants, cafes",
      "If you go outside, keep away from others - at least 2m",
      "Avoid having visitors to your home",
      "Do your best to work at home",
      "Avoid public transport",
    ],
    color: "#f73b28",
    warning: false, // Including these to suppress typesccript warnings below
    bottomText: null,
  },
  {
    title: "Think you might have symptoms?",
    byline: null,
    icon: thermometer,
    details: ["You may need to start self-isolating"],
    color: "#f75050",
    bottomText: (
      <p className={infoTileStyles.bottomText}>
        Find out{" "}
        {createParagraphLink("https://111.nhs.uk/service/COVID-19/", "here")}
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
    question: "Am I more likely to get coronavirus?",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        Yes, those who are older in society have a greater risk of getting
        coronavirus.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.who.int/docs/default-source/coronaviruse/situation-reports/20200311-sitrep-51-covid-19.pdf?sfvrsn=1ba62e57_4",
      linkDisplay: "World Health Organisation, Situation Report",
    },
  },
  {
    question: "I still work - should I go?",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        You should make every effort to work from home if possible. Your
        employer should support you in this. If you cannot work from home, try
        to avoid having a public-facing role.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.gov.uk/government/publications/covid-19-guidance-on-social-distancing-and-for-vulnerable-people/guidance-on-social-distancing-for-everyone-in-the-uk-and-protecting-older-people-and-vulnerable-adults#how-can-i-get-assistance-with-foods-and-medicines-if-i-am-reducing-my-social-contacts",
      linkDisplay: "NHS and Public Health England Coronavirus Guidance",
    },
  },
  {
    question: "Should I travel?",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        You should minimise travel as much as possible. This includes avoiding
        public transport. If you must travel, you should vary your travel times
        to less busy times. The FCO currently advises against all but essential
        foreign travel.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.gov.uk/government/publications/covid-19-guidance-on-social-distancing-and-for-vulnerable-people/guidance-on-social-distancing-for-everyone-in-the-uk-and-protecting-older-people-and-vulnerable-adults#how-can-i-get-assistance-with-foods-and-medicines-if-i-am-reducing-my-social-contacts",
      linkDisplay: "NHS and Public Health England Coronavirus Guidance",
    },
  },
  {
    question: "Someone in my home as symptoms – what should I do?",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        If you can, you should move immediately to a friend or other family
        member's place - they should not be ill or self-isolating. If you cannot
        move homes, you should
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        1. Keep away from anyone ill by at least 2m as long as possible
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        2. Use a separate bathroom - if there's only one bathroom, be sure to
        use the bathroom first, and especially before anyone ill
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        3. Avoid sharing any cups or cutlery - wash everything thoroughly with
        soap and dry your cutlery with a separate tea towel
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        4. Eat in your room and not with anyone ill You should follow our
        self-isolation guidance{" "}
        {createParagraphLink("/how-to-self-isolate", "here", true)}.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.gov.uk/government/publications/covid-19-guidance-on-social-distancing-and-for-vulnerable-people/guidance-on-social-distancing-for-everyone-in-the-uk-and-protecting-older-people-and-vulnerable-adults#how-can-i-get-assistance-with-foods-and-medicines-if-i-am-reducing-my-social-contacts",
      linkDisplay: "NHS and Public Health England Coronavirus Guidance",
    },
  },
]

const ElderlyPage = () => {
  return (
    <Layout>
      <SEO
        title="Elderly"
        description="Are you over 70? Here's the special coronavirus advice you need to know"
      />
      <BasicPage activeCountry="uk">
        <div className={styles.container}>
          <h1 className={styles.heading}>Elderly</h1>
          <p className={styles.byline}>
            If you're over 70, you are at increased risk of being infected with
            coronavirus
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
