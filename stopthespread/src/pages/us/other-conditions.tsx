import React from "react"
import shortid from "shortid"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import FAQ from "../../components/shared/FAQ"
import InfoTile from "../../components/shared/InfoTile"
import TileContent from "../../components/shared/InfoTile/TileContent"

import createParagraphLink from "../../utils/createParagraphLink"

import * as styles from "../../components/otherConditions/otherConditions.module.scss"
import * as questionStyles from "../../components/shared/FAQ/faq.module.scss"
import * as infoTileStyles from "../../components/shared/InfoTile/infoTile.module.scss"

import thermometer from "../../images/emojis/Thermometer1.png"
import siren from "../../images/emojis/siren1.png"
import warning from "../../images/emojis/warning1.png"

const tileContents = [
  {
    title: "Take extra caution",
    byline: null,
    icon: warning,
    details: [
      "Stay home",
      "Wash your hands often",
      "Avoid close contact (6 feet, which is about two arm lengths) with people who are sick",
      "Clean and disinfect frequently touched services",
      "Avoid all cruise travel and non-essential air travel",
      "Call your healthcare professional if you have concerns about COVID-19 and your underlying condition or if you are sick",
    ],
    color: "#f73b28",
    bottomBar: true,
    bottomText: (
      <p className={infoTileStyles.bottomText}>
        Find out more{" "}
        {createParagraphLink(
          "https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/what-you-can-do.html",
          "here"
        )}
      </p>
    ),
  },
  {
    title: "You should be extra careful if:",
    byline: null,
    icon: siren,
    details: [
      "your doctor has told you getting an infection might be very serious",
      "you have a weakened immune system",
      "you have HIV/AIDS (see answer to FAQ question below for more details)",
      "you have had an organ transplant",
      "you have cancer",
      "you are having chemotherapy",
      "your spleen has been removed",
    ],
    color: "#ffffff",
    warning: true,
    bottomBar: false,
    bottomText: (
      <p className={infoTileStyles.bottomText}>
        ...or anything listed{" "}
        {createParagraphLink(
          "https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html",
          "here"
        )}
        . If this is the case, your GP or doctor should have contacted you. If
        they have not, you should call your GP for more information
      </p>
    ),
  },
  {
    title: "Think you might have symptoms?",
    byline: null,
    icon: thermometer,
    details: ["You may need to start self-isolating"],
    color: "#f75050",
    bottomBar: true,
    bottomText: (
      <p className={infoTileStyles.bottomText}>
        Find out{" "}
        {createParagraphLink(
          "https://www.cdc.gov/coronavirus/2019-nCoV/index.html",
          "here"
        )}
      </p>
    ),
  },
]

const faqContent = [
  {
    question: "Do I have another medical condition?",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        If you take regular medication, it is likely you have another medical
        condition. This could include a statin, blood pressure medication, or
        diabetes medication. If you have had a heart attack or a stroke in the
        past, you have an increased risk. You have a specifically high risk if
        your doctor has told you getting an infection could be very serious.
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        If you are not sure if you have another medical condition, you should
        contact your GP to find out.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.gov.uk/government/publications/covid-19-guidance-on-social-distancing-and-for-vulnerable-people/guidance-on-social-distancing-for-everyone-in-the-uk-and-protecting-older-people-and-vulnerable-adults#how-can-i-get-assistance-with-foods-and-medicines-if-i-am-reducing-my-social-contacts",
      linkDisplay: "NHS and Public Health England Coronavirus Guidance",
    },
  },
  {
    question: "I have HIV/AIDS - what should I do?",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        If you have HIV/AIDS and have no detectable viral load and a normal CD4
        count, there is no evidence that indicates you are at a higher risk of
        being infected or becoming very unwell. However, if you have a low CD4
        count or do not take your medication as prescribed, you may be at higher
        risk. You should speak to your HIV consultant about any concerns you may
        have. If you have any additional medical condition (e.g. diabetes, any
        heart or lung condition), you are at a higher risk and should take extra
        caution by strictly following the above advice from the NHS and Public
        Health England. If you just started HIV treatment, you should speak to
        your HIV consultant about your specific risk.
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        You should take your HIV medication as prescribed. Do not increase the
        number of tablets you take. In addition, do not share your medication
        with anyone who has coronavirus, or is worried about getting it. HIV
        medication will not prevent you from getting coronavirus. If you think
        you are ill with coronavirus, you should continue taking your HIV
        medication. If you have any worries or concerns, you should contact{" "}
        {createParagraphLink("https://www.cdc.gov/", "CDC online")} or call 111
        if you cannot get online.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.bhiva.org/coronavirus-and-HIV-responses-to-common-questions-from-BHIVA",
      linkDisplay: "British HIV Association",
    },
  },
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
        Yes, those who have other medical conditions are likely to be at a
        greater risk of getting coronavirus.
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
        1. keep away from anyone ill by at least 2m as long as possible.
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        2. use a separate bathroom - if there's only one bathroom, be sure to
        use the bathroom first, and especially before anyone ill.
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        3. don't share any cups or cutlery - wash everything thoroughly with
        soap and dry your cutlery with a separate tea towel.
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        4. eat in your room and not with anyone ill You should follow our
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

const OtherConditionsPage = () => {
  return (
    <Layout>
      <SEO
        title="Other Conditions"
        description="Do you have other medical conditions? Here's the special coronavirus advice you need to know"
      />
      <BasicPage activeCountry={"us"}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Other Conditions</h1>
          <p className={styles.byline}>
            If you have any another medical condition, you are at increased risk
            of being infected with coronavirus
          </p>
          {tileContents.map(tile => (
            <InfoTile
              key={tile.title}
              title={tile.title}
              icon={tile.icon}
              color={tile.color}
              bottomBar={tile.bottomBar}
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

export default OtherConditionsPage
