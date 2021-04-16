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

import warning from "../../images/emojis/siren1.png"
import thermometer from "../../images/emojis/Thermometer1.png"
import sadFace from "../../images/emojis/Sadface1.png"

const tileContents = [
  {
    title: "Take extra caution",
    byline: null,
    icon: warning,
    details: [
      "Avoid public activities, e.g. restaurants, cafes",
      "If you go outside, keep away from others - at least 6ft",
      "Try to have as few visitors to your home as possible",
      "Do your best to work at home",
      "Vary your commute to avoid public transport",
    ],
    color: "#f73b28",
    warning: false, // Including these to suppress typesccript warnings below
    bottomText: null,
  },
  {
    title: "Think you might have symptoms?",
    byline: null,
    icon: thermometer,
    details: [
      "Contact your maternity unit ASAP by phone and ask for advice",
      "You may need to start self-isolating",
    ],
    color: "#f75050",
    bottomText: (
      <p className={infoTileStyles.bottomText}>
        Find out{" "}
        {createParagraphLink("https://www.cdc.gov/coronavirus/2019-nCoV/index.html", "here")}
      </p>
    ),
  },
  {
    title: "Already self-isolating and think you're getting worse?",
    byline: null,
    icon: sadFace,
    details: [],
    color: "#ffbf58",
    bottomText: (
      <p className={infoTileStyles.bottomText}>
        Contact your maternity unit ASAP OR{" "}
        {createParagraphLink("https://www.cdc.gov/", "Contact CDC")}
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
        "https://www.rcog.org.uk/en/guidelines-research-services/guidelines/coronavirus-pregnancy/covid-19-virus-infection-and-pregnancy/",
      linkDisplay: "Royal College of Obstetricians & Gynaecologists",
    },
  },
  {
    question: "Am I more likely to get coronavirus?",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        There is no evidence to date that pregnant women are more likely to get
        coronavirus, but it’s important to be extra careful to reduce any risk
        that may be present.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.rcog.org.uk/en/guidelines-research-services/guidelines/coronavirus-pregnancy/covid-19-virus-infection-and-pregnancy/",
      linkDisplay: "Royal College of Obstetricians & Gynaecologists",
    },
  },
  {
    question: "If I get coronavirus, will it affect my baby?",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        We are still learning more about the virus, and our knowledge will
        improve over the coming weeks and months. So far, there is no evidence
        that coronavirus will increase the risk of miscarriage or that you can
        pass it on to your baby. Two weeks after you recover from coronavirus,
        you should get an ultrasound scan to make sure everything is ok with
        your baby.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.rcog.org.uk/en/guidelines-research-services/guidelines/coronavirus-pregnancy/covid-19-virus-infection-and-pregnancy/",
      linkDisplay: "Royal College of Obstetricians & Gynaecologists",
    },
  },
  {
    question: "Should I go to my antenatal appointments?",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        Antenatal appointments are very important to ensure your pregnancy is
        healthy. A few days before any appointment, you should contact your
        maternity unit to see if there are any changes. If you have symptoms,
        you must contact your maternity unit before and inform them. If you have
        any urgent problem, please contact the emergency contact details you
        have been provided. If you do not have any emergency contact details,
        please contact your GP, midwife, or NHS 111.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.rcog.org.uk/en/guidelines-research-services/guidelines/coronavirus-pregnancy/covid-19-virus-infection-and-pregnancy/",
      linkDisplay: "Royal College of Obstetricians & Gynaecologists",
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
        "https://www.rcog.org.uk/en/guidelines-research-services/guidelines/coronavirus-pregnancy/covid-19-virus-infection-and-pregnancy/",
      linkDisplay: "Royal College of Obstetricians & Gynaecologists",
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
        "https://www.rcog.org.uk/en/guidelines-research-services/guidelines/coronavirus-pregnancy/covid-19-virus-infection-and-pregnancy/",
      linkDisplay: "Royal College of Obstetricians & Gynaecologists",
    },
  },
  {
    question: "Someone in my home as symptoms – what should I do?",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        You should do your best to strictly avoid anyone who has symptoms. You
        should also self-isolate during this period. You can learn more about
        self-isolation{" "}
        {createParagraphLink("/how-to-self-isolate", "here", true)}. If you
        start to get symptoms, you should contact your maternity unit or
        midwife. .
      </p>,
    ],
    source: {
      linkTo:
        "https://www.rcog.org.uk/en/guidelines-research-services/guidelines/coronavirus-pregnancy/covid-19-virus-infection-and-pregnancy/",
      linkDisplay: "Royal College of Obstetricians & Gynaecologists",
    },
  },
  {
    question:
      "I am self-isolating and I have some worries/concerns about my pregnancy",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        Please contact your maternity unit or midwife ASAP by phone. If you need
        urgent care, you should attend early pregnancy units or A&E but inform
        the maternity unit in advance of entering the hospital. They will inform
        you with specific advice.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.rcog.org.uk/en/guidelines-research-services/guidelines/coronavirus-pregnancy/covid-19-virus-infection-and-pregnancy/",
      linkDisplay: "Royal College of Obstetricians & Gynaecologists",
    },
  },
  {
    question:
      "What happens if I have the symptoms of coronavirus when I go into labour?",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        Most likely your labour will be in an obstetric unit with extra
        monitoring to ensure everything is safe with your baby. If you are
        coming to the hospital and you have symptoms, you should travel by
        private transport if you can or call 111/999 if necessary. It is likely
        you will be met outside the hospital by the maternity unit, fitted with
        a mask, and tested for coronavirus. While your birth partner(s) will be
        able to stay with you, it is likely that other visitors will be limited.
        If you think you have the symptoms of coronavirus and you are near your
        due date, you should call your maternity unit and inform them.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.rcog.org.uk/en/guidelines-research-services/guidelines/coronavirus-pregnancy/covid-19-virus-infection-and-pregnancy/",
      linkDisplay: "Royal College of Obstetricians & Gynaecologists",
    },
  },
  {
    question:
      "If I have coronavirus and have just given birth, can I stay with my baby?",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        The current UK guidance is that if your baby is well and doesn’t require
        additional care in a neonatal unit, your baby can stay with you if you
        would like. However, the specific risks and benefits will be discussed
        with you by your doctor at the time.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.rcog.org.uk/en/guidelines-research-services/guidelines/coronavirus-pregnancy/covid-19-virus-infection-and-pregnancy/",
      linkDisplay: "Royal College of Obstetricians & Gynaecologists",
    },
  },
  {
    question:
      "Can I breastfeed my baby if I have (the symptoms of) coronavirus?",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        Yes you are able to breasftfeed your baby. If you plan to, please follow
        this advice: Wash your hands with soap and warm water before touching
        your baby, breast pump, or any bottles Avoid coughing or sneezing on
        your baby while feeding Consider wearing a face mask while breastfeeding
        Follow the recommended advice for pump cleaning Considering asking
        someone who is well to feed your expressed breast milk to your baby
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        If you are feeding your baby with formula or expressed breast milk,
        strictly follow the sterilisation guidelines{" "}
        {createParagraphLink(
          "https://www.nhs.uk/conditions/pregnancy-and-baby/sterilising-bottles/",
          "here"
        )}
        {"."}
      </p>,
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        If you are expressing breast milk in a hospital, you should use a
        separate breast pump.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.rcog.org.uk/en/guidelines-research-services/guidelines/coronavirus-pregnancy/covid-19-virus-infection-and-pregnancy/",
      linkDisplay: "Royal College of Obstetricians & Gynaecologists",
    },
  },
  {
    question: "I’m a healthcare worker and pregnant",
    answerParagraphs: [
      <p key={shortid.generate()} className={questionStyles.questionAnswer}>
        You should speak to your occupational health department – they will be
        able to provide you with more specific advice
      </p>,
    ],
    source: {
      linkTo:
        "https://www.rcog.org.uk/en/guidelines-research-services/guidelines/coronavirus-pregnancy/covid-19-virus-infection-and-pregnancy/",
      linkDisplay: "Royal College of Obstetricians & Gynaecologists",
    },
  },
]

const ElderlyPage = () => {
  return (
    <Layout>
      <SEO
        title="Pregnant Women"
        description="Are you pregnant? Here's the special coronavirus advice you need to know"
      />
      <BasicPage activeCountry={"us"}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Pregnant Women</h1>
          <p className={styles.byline}>
            If you're pregnant, you are at increased risk of being infected with
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
