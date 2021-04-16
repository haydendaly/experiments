import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import FAQ from "../../components/shared/FAQ"

import styles from "../../components/shared/FAQ/faq.module.scss"
import shortid from "shortid"
import { Link } from "gatsby"
import createParagraphLink from "../../utils/createParagraphLink"

const faqContent = [
  {
    question: "Is this as big of a deal as some people say?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Coronavirus is a major public health concern for the world. With more
        people needing medical attention and hospitalisation, there is a major
        strain on healthcare infrastructure. Resources are limited and the
        broader the spread of the virus, the bigger the consequence on
        everyone's individual healthcare. In addition, the disease can pose a
        serious risk to anyone who becomes infected. While the fatality rate of
        the disease depends upon a variety of factors, for coronavirus
        (COVID-19) this may be somewhere between 1-5%.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.gov.uk/government/publications/covid-19-stay-at-home-guidance/stay-at-home-guidance-for-people-with-confirmed-or-possible-coronavirus-covid-19-infection",
      linkDisplay: "NHS and Public Health England Coronavirus Guidance",
    },
  },
  {
    question: "Should I wash my hands with soap or use hand sanitiser?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Washing your hands with soap for at least 20 seconds is the best way to
        avoid the virus. Soap breaks down the virus, and lubricates the virus
        away from the skin. If soap is not available, using an alcohol-based
        sanitiser gel is your next best option - ensure that every corner of
        your hands are soaked with the gel. Any sanitiser gel you use should be
        at least 60% alcohol.
      </p>,
    ],
    source: {
      linkTo: "https://www.cdc.gov/coronavirus/2019-ncov/index.html",
      linkDisplay: "CDC Coronavirus Guidance ",
    },
  },
  {
    question: "I have high blood pressure, heart disease, or diabetes",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        You are at an increased risk of developing severe illness. If you have
        symptoms, you should find out what to do next{" "}
        <a
          href="https://111.nhs.uk/service/COVID-19/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        . If you do not have symptoms, you should lower your risk of disease by
        significantly minimising contact in public settings and following the
        steps outlined <Link to="/how-you-can-help">here</Link>.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.gov.uk/government/publications/covid-19-stay-at-home-guidance/stay-at-home-guidance-for-people-with-confirmed-or-possible-coronavirus-covid-19-infection",
      linkDisplay: "NHS and Public Health England Coronavirus Guidance ",
    },
  },
  {
    question: "I am over 65 yrs old",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        You are at an increased risk of developing severe illness. If you have
        symptoms, you should find out what to do next{" "}
        <a
          href="https://111.nhs.uk/service/COVID-19/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        . If you do not have symptoms, you should lower your risk of disease by
        significantly minimising contact in public settings and following the
        steps outlined <Link to="/how-you-can-help">here</Link>.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.gov.uk/government/publications/covid-19-stay-at-home-guidance/stay-at-home-guidance-for-people-with-confirmed-or-possible-coronavirus-covid-19-infection",
      linkDisplay: "NHS and Public Health England Coronavirus Guidance",
    },
  },
  {
    question: "I'm young and healthy - should I worry?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Everyone should be careful. Although coronavirus is more likely to make
        older people very sick, in Italy 5.6% of people in intensive care are 30
        to 39 years old. Young people can also infect someone who is more
        vulnerable.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.irishtimes.com/news/world/coronavirus-italian-doctors-on-how-ireland-can-avoid-disaster-1.4202054",
      linkDisplay: "As reported by The Irish Times",
    },
  },
  {
    question: "I have a hospital/GP appointment - should I still go?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        It is recommended that everyone seek medical assistance remotely if
        possible. Your GP or doctor should contact you about what you should do.
        If you have not heard from your GP or doctor but you have an appointment
        soon, you should call them and ask if you should come in person or can
        discuss over a phone or another platform.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.gov.uk/government/publications/covid-19-guidance-on-social-distancing-and-for-vulnerable-people/guidance-on-social-distancing-for-everyone-in-the-uk-and-protecting-older-people-and-vulnerable-adults",
      linkDisplay: "NHS and Public Health England Coronavirus Guidance",
    },
  },
  {
    question: "Should I take ibuprofen or other NSAIDs?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Generally, paracetamol is preferred for temperatures/coughs/sore throat.
        The WHO currently does not recommend against the use of ibuprofen or
        other NSAIDs (e.g. naproxen). There is currently no strong clinical
        evidence between ibuprofen/NSAIDs and worsening of coronavirus. UK
        guidance suggests taking either paracetamol or ibuprofen. Paracetamol is
        generally preferable as a first choice. If your GP or doctor has told
        you not to take paracetamol, please call them to find out what you
        should do.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.gov.uk/government/publications/covid-19-stay-at-home-guidance/stay-at-home-guidance-for-people-with-confirmed-or-possible-coronavirus-covid-19-infection",
      linkDisplay: "NHS and Public Health England Coronavirus Guidance",
    },
  },
  {
    question: "Can I breastfeed?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Coronavirus is not known to spread via breastmilk. You should speak to
        your GP or midwife by phone to discuss this with them. If you do
        breastfeed, please use extra precautions. You can find them{" "}
        {createParagraphLink(
          "https://www.rcog.org.uk/en/guidelines-research-services/guidelines/coronavirus-pregnancy/covid-19-virus-infection-and-pregnancy/",
          "here"
        )}
        .
      </p>,
    ],
    source: {
      linkTo:
        "https://www.gov.uk/government/publications/covid-19-stay-at-home-guidance/stay-at-home-guidance-for-people-with-confirmed-or-possible-coronavirus-covid-19-infection",
      linkDisplay: "NHS and Public Health England Coronavirus Guidance",
    },
  },
  {
    question: "How is coronavirus spread?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        The disease most likely spreads through small droplets that are released
        when someone with coronavirus coughs or exhales. These droplets can then
        land directly on someone else. Droplets can also be on surfaces; when
        someone touches a surface with droplets and then touches their face,
        they can also get coronavirus. You should clean surfaces with a
        disinfectant and wash your hands with soap regularly. More research is
        being done on the spread of the disease.
      </p>,
    ],
    source: {
      linkTo: "https://www.who.int/news-room/q-a-detail/q-a-coronaviruses",
      linkDisplay: "WHO Coronavirus Q&A",
    },
  },
  {
    question: "Will I know if I have caught the virus?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        The most common symptoms of the virus are a temperature and a continuous
        cough (dry or wet). However, some cases of coronavirus may have slightly
        different symptoms and other infections like the cold or flu can lead to
        similar symptoms. While you may not know for certain if you have
        coronavirus, if you have symptoms you should find out what to do{" "}
        <a
          href="https://111.nhs.uk/service/COVID-19/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>,
    ],
    source: {
      linkTo:
        "https://www.gov.uk/government/publications/covid-19-stay-at-home-guidance/stay-at-home-guidance-for-people-with-confirmed-or-possible-coronavirus-covid-19-infection",
      linkDisplay: "NHS and Public Health England Coronavirus Guidance",
    },
  },
  {
    question: "Should I take antibiotics?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        No. Antibiotics do not work against coronavirus (or any other virus) and
        cannot be used to prevent or treat the disease.
      </p>,
    ],
    source: {
      linkTo: "https://www.who.int/news-room/q-a-detail/q-a-coronaviruses",
      linkDisplay: "WHO Coronavirus Q&A",
    },
  },
  {
    question: "Do I need to be tested?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        The current UK guidance is that most people will not be tested. Those
        who need to be tested will be told directly by NHS 111 or a doctor. If
        you are self-isolating at home, as of currently available information
        you will not be tested.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.gov.uk/government/publications/covid-19-stay-at-home-guidance/stay-at-home-guidance-for-people-with-confirmed-or-possible-coronavirus-covid-19-infection",
      linkDisplay: "NHS and Public Health England Coronavirus Guidance",
    },
  },
  {
    question: "Should I wear a face mask?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        There is a global shortage of masks and we need to use them carefully.
        Only wear a face mask if (1) you are taking care of someone who is ill,
        or (2) you are ill and may encounter individuals who are not ill during
        your isolation. If neither of these apply to you, you should not wear a
        face mask.
      </p>,
    ],
    source: {
      linkTo: "https://www.who.int/news-room/q-a-detail/q-a-coronaviruses",
      linkDisplay: "WHO Coronavirus Q&A",
    },
  },
  {
    question: "How long does the virus survive on surfaces?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        The virus can survive up to several days on surfaces. The WHO recommends
        cleaning surfaces with a simple disinfectant. You should wash your hands
        with soap or, if soap is not available, use an alcohol-based hand rub.
        Avoid touching your face.
      </p>,
    ],
    source: {
      linkTo: "https://www.who.int/news-room/q-a-detail/q-a-coronaviruses",
      linkDisplay: "WHO Coronavirus Q&A",
    },
  },
  {
    question: "Can people without symptoms spread the virus?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Although it is possible for an infected person to spread the virus
        before the symptoms appear, the risk is very low. The main way for the
        virus to spread is through droplets when an infected person coughs or
        sneezes. Therefore, it is important to stay at least 2m away from a
        person who is sick.
      </p>,
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Many infected people experience only mild symptoms, especially in the
        early stages of the disease. Therefore, it is possible to catch the
        virus from someone who has a mild cough, but does not feel ill.
      </p>,
    ],
    source: {
      linkTo: "https://www.who.int/news-room/q-a-detail/q-a-coronaviruses",
      linkDisplay: "WHO Coronavirus Q&A",
    },
  },
  {
    question: "When is it safe to stop self-isolation?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        This is according to currently available UK health guidance. If you have
        been told to self-isolate, you must do so for at least 7 days. At the
        end, if you still have a temperature or if you feel worse, you should
        call NHS 111. If you still have a cough but feel otherwise fine, you can
        step self-isolating.{" "}
      </p>,
    ],
    source: {
      linkTo:
        "https://www.gov.uk/government/publications/covid-19-stay-at-home-guidance/stay-at-home-guidance-for-people-with-confirmed-or-possible-coronavirus-covid-19-infection",
      linkDisplay: "NHS and Public Health England Coronavirus Guidance",
    },
  },
  {
    question: "Should I stop going to the gym/yoga/etc? ",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        The latest UK guidance against all but essential public contact and
        activities. Being in public spaces like the gym or in groups of people
        will significantly increase your chances of infection. However, it is
        important to stay active. Exercising at home is preferable; you can find
        more about how to exercise at home{" "}
        {createParagraphLink(
          "https://www.sportengland.org/news/how-stay-active-while-youre-home",
          "here"
        )}
        {". "}
        You can also go outside to exercise in the open air, but be sure to
        maintain at least 2m of distance from others.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.sportengland.org/news/coronavirus-information-sector",
      linkDisplay: "Sports England",
    },
  },
  {
    question: "Can I do my laundry if I'm ill?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        You can do your laundry if you have a machine at home. It doesn't matter
        if there are others in your home who are not ill. Be sure to use laundry
        detergent. Use the hottest temperature setting if you can. Don't shake
        your laundry before washing as this may spread the virus. If you do your
        laundry in a public place, wait an extra 72 hours after the end of your
        7 day self-isolation to wash your clothes.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.gov.uk/government/publications/covid-19-stay-at-home-guidance/stay-at-home-guidance-for-people-with-confirmed-or-possible-coronavirus-covid-19-infection",
      linkDisplay: "NHS and Public Health England Coronavirus Guidance",
    },
  },
  {
    question: "How do I deal with my waste if I'm ill?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Double bag your waste and tie it securely. Leave it aside for 72 hours.
        You may then throw it away in your waste collection bin.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.gov.uk/government/publications/covid-19-stay-at-home-guidance/stay-at-home-guidance-for-people-with-confirmed-or-possible-coronavirus-covid-19-infection",
      linkDisplay: "NHS and Public Health England Coronavirus Guidance",
    },
  },
  {
    question: "Can someone catch coronavirus twice?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Not much is yet known about coronavirus. If you have recovered from
        falling ill, you should still follow guidance on stopping the spread:
        wash your hands regularly, don't touch your face, and avoid the unwell.
      </p>,
    ],
    source: {
      linkTo:
        "https://www.gov.uk/government/publications/covid-19-stay-at-home-guidance/stay-at-home-guidance-for-people-with-confirmed-or-possible-coronavirus-covid-19-infection",
      linkDisplay: "NHS and Public Health England Coronavirus Guidance",
    },
  },
  {
    question: "Can I catch it from or give it to my pet?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        There is no evidence that indicates a pet can transmit coronavirus.
        However, you should regularly wash your hands with soap after touching
        your pets and follow the more general advice{" "}
        <Link to="/how-you-can-help">here</Link>.
      </p>,
    ],
    source: {
      linkTo: "https://www.who.int/news-room/q-a-detail/q-a-coronaviruses",
      linkDisplay: "WHO Coronavirus Q&A",
    },
  },
  {
    question: "Is it safe to receive mail?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Yes. It is unlikely for an infected person to contaminate commercial
        packages. The risk of catching the virus from a package that was exposed
        to different environmental conditions as it travelled is also low.
      </p>,
    ],
    source: {
      linkTo: "https://www.who.int/news-room/q-a-detail/q-a-coronaviruses",
      linkDisplay: "WHO Coronavirus Q&A",
    },
  },
  {
    question: "What's the difference between coronavirus and COVID-19?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Coronavirus refers to a large family of viruses. COVID-19 is the disease
        caused by the specific coronavirus currently spreading across the world.
        For simplicity, we use the terms interchangeably on this website.
      </p>,
    ],
    source: {
      linkTo: "https://www.who.int/news-room/q-a-detail/q-a-coronaviruses",
      linkDisplay: "WHO Coronavirus Q&A",
    },
  },
  {
    question: "What is the best way to strengthen my immune system?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Normal healthy living is the most reliable way to maintain a strong
        immune system. Get as much sleep as you can, maintain a balanced diet,
        exercise moderately and don’t overwork. If you smoke, try to give up and
        reduce your intake of alcohol and other drugs.
      </p>,
    ],
    source: {
      linkTo: "https://www.nhs.uk/live-well/",
      linkDisplay: "NHS Live Well Guidance",
    },
  },
  {
    question: "When will symptoms appear after catching coronavirus?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        It is estimated that a person would usually develop the symptoms within
        1 to 14 days after catching coronavirus. The most common time for the
        symptoms to start is around 5 days.
      </p>,
    ],
    source: {
      linkTo: "https://www.who.int/news-room/q-a-detail/q-a-coronaviruses",
      linkDisplay: "WHO Coronavirus Q&A",
    },
  },
]

const FAQPage = () => {
  return (
    <Layout>
      <SEO
        title="FAQs"
        description="Soap or hand sanitiser? Should I wear a mask? What should I do next? The top coronavirus FAQs answered here."
      />
      <BasicPage activeCountry={"us"}>
        <FAQ title="Your Questions Answered" faqContent={faqContent} />
      </BasicPage>
    </Layout>
  )
}

export default FAQPage
