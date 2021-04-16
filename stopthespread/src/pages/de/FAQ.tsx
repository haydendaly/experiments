import React from "react"
import shortid from "shortid"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import FAQ from "../../components/shared/FAQ"

import styles from "../../components/shared/FAQ/faq.module.scss"

const faqContent = [
  {
    question:
      "Ist Corona in Wirklichkeit nicht nur eine Influenza und es herrscht zu viel Panik?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        In vielen Diskussionen fällt der Vergleich zu der normalen “Grippe”.
        Dies stimmt aus mehreren Gründen nicht: Der Erreger der jährlichen
        Influenza ist seit Jahren bekannt, es existieren Erfahrungswerte, es
        gibt einen Impfstoff sowie eine direkte Medikation gegen das Virus. Bei
        Corona ist dies anders: Der Virus ist erst seit 4 Monaten bekannt und
        hat zusätzlich noch eine deutlich höhere Ansteckungswahrscheinlichkeit.
        Obwohl wir die Sterblichkeit aktuell noch nicht ganz sicher abgeschätzen
        können (da es Unterschiede zwischen einzelnen Ländern gibt), sind die
        Raten deutlich über der normalen Grippe. Eine Therapie oder Impfung
        existiert zudem nicht. Somit kann dieser Virus nicht mit der normalen
        Grippe nicht herhalten.
      </p>,
    ],
  },
  {
    question: "Kann ich mich gegen Sars-CoV2 impfen lassen?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Nein, aktuell existiert kein Impfstoff. Es wird weltweit intensiv
        geforscht. Mit einer Verarbeichung kann nach aktuellen Berichten
        frühestens 2021 gerechnet werden.
      </p>,
    ],
  },
  {
    question:
      "Muss ich meine Hände desinfizieren oder reicht normales Händewaschen?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Für die Normalbevölkerung (kein medizinisches Personal, keine erkrankte
        Personen im Familienkreis) ist neben den bereits beschriebenen Maßnahmen
        normales Händewaschen ausreichend. Auch damit können Viren unschädlich
        gemacht werden. Leben in deinem Umfeld sehr infektionsanfällige Menschen
        oder Menschen mit Störungen im Immunsystem, kann man über eine
        Desinfektion der Hände nachdenken. Allerdings muss das Händewaschen
        korrekt durchgeführt werden, dazu folgendes{" "}
        <a
          href="https://www.youtube.com/watch?v=hd1V04xcTds"
          target="_blank"
          rel="noopener noreferrer"
        >
          Video
        </a>
      </p>,
    ],
  },
  {
    question:
      "Ich bin jung und ich kann nicht so schwer erkranken. Warum soll ich mich dann an die empfohlenen Maßnahmen halten?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Das Alter spielt eine deutliche Rolle, d.h. ältere Patienten oder
        Patienten mit Vorerkrankungen zeigten häufiger schwere Verläufe und
        sterben häufiger. Dennoch können auch junge Patienten schwer erkranken,
        das bedeutet, dass dies zumindest einen längeren Aufenthalt auf einer
        Intensivstation (z.B. mit Beatmungsgerät, Dialyse o.ä.) nach sich ziehen
        kann. Aus diesem Grund ist die bewußte Inkaufnahme des Risikos sicher
        keine sinnvolle Maßnahme. Zudem leben wir als Menschen in einer
        Gemeinschaft, d.h. wir kümmern uns auch um unsere Mitmenschen und deren
        Wohlergehen. Wenn sich das Virus immer stärker verbreitet, sind diese
        Menschen deutlich gefährdeter. Auch du kannst durch dein Verhalten zu
        einer Verbesserung etwas beitragen.
      </p>,
    ],
  },
  {
    question: "Wie verbreitet sich der Virus?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Der Virus wird über eine Tröpfcheninfektion übertragen, d.h. er
        verbreitet sich durch Anniesen, Anhusten, Händeschütteln (und danach ins
        Gesicht fassen) etc. Alle Maßnahmen zielen darauf ab, dies zu vermeiden.
        Dies gilt übrigens nicht nur für Corona, sondern für einen Großteil der
        infektiösen Atemwegserkrankungen.
      </p>,
    ],
  },
  {
    question:
      "Ich habe keine Symptome. Ich war in keinem Risikogebiet. Soll ich mich testen lassen?",
    answerParagraphs: [
      <p key={shortid.generate()} className={styles.questionAnswer}>
        Nein. Die Labortestung sollte nur bei Krankheitszeichen durchgeführt
        werden. Da die Zeit von der Ansteckung bis zum Ausbruch
        (=Inkubationszeit) bis zu 14 Tage dauern kann, muss auch ein Labortest
        in dieser Zeit nicht unbedingt positiv sein. Zudem sind die
        Laborkapazitäten beschränkt d.h. sie sollen wichtigen Tests bei Kranken
        vorbehalten sein.
      </p>,
    ],
  },
]

const FAQPage = () => {
  return (
    <Layout>
      <SEO
        title="FAQs"
        description="Seife oder Desinfektionsmittel? Soll ich eine Maske tragen? Was soll ich als nächstes machen? Die Top Corona Fragen beantwortet hier."
      />
      <BasicPage activeCountry="de">
        <FAQ title="Deine Fragen beantwortet" faqContent={faqContent} />
      </BasicPage>
    </Layout>
  )
}

export default FAQPage
