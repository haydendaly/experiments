import React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import HeadingAndIcon from "../../components/shared/HeadingAndIcon"

import bat from "../../images/emojis/Bat2.png"

const paragraphs = [
  <p key={0}>
    Das Virus SARS-CoV-2 ist ein neuartiges Virus, das es in dieser Art bislang
    nicht gab. COVID-19 hingegen ist die Erkrankung, die durch das Virus
    SARS-CoV-2 verursacht wird. Die Gruppe der Viren (Coronaviren) sind seit
    langem bekannt und auch oft bei Erkältungskrankheiten zu finden. Bereits vor
    einigen Jahren (2002/2003) waren Coronaviren im Rahmen der SARS-Pandemie in
    den Medien, damals hatten sich die meisten Fälle jedoch auf Asien / Kanada
    und USA beschränkt, in anderen Ländern traten nur vereinzelte Fälle auf.
  </p>,
  <p key={1}>
    <h3>Woher kommt das Virus?</h3>
    Coronaviren kommen bei verschiedenen Wirbeltieren (z.B. Säugetiere, Vögel,
    Fische) vor und verursachen dort unterschiedliche Erkrankungen. Sie sind
    genetisch sehr variabel und können daher auch die Grenzen zwischen den Arten
    überspringen, sprich von Tier auf den Menschen übertragen werden. Nach
    derzeitigen Erkenntnissen ist somit die SARS-Pandemie 2002/2003 sowie auch
    die aktuelle Pandemie entstanden.
  </p>,
  <p key={2}>
    <h3>Wie erfolgt die Übertragung zwischen den Menschen?</h3>
    Der wichtigste Übertragungsweg ist die Tröpfcheninfektion. Dies bedeutet,
    anhusten, anniesen o.ä. sollten vermieden werden. Genau hierauf zielen auch
    sämtliche Schutzmaßnahmen: ausreichend Abstand zwischen den Menschen, Nies-
    und Hustenhygiene (sprich in den Arm und nicht in die Handfläche o.ä.),
    Vermeidung von Ansammlungen von vielen Menschen, Abschirmung von besonders
    gefährdeten Personen. Da das Virus erst sehr kurz existiert, gibt es
    natürlich auch nur wenige Studien. Eine Übertragung durch eine
    Schmierinfektion (z.B. über Gegenstände) oder Konjunktiven (sprich Auge)
    kann derzeit nicht ausgeschlossen werden. Durch die Einhaltung der oben
    genannten Maßnahmen deckst du allerdings auch diese Risiken weitgehend ab.
  </p>,
  <p key={3}>
    <h3>Wie bemerkt ich, dass ich an Corona erkrankt bin?</h3>
    Die Patienten klagen sehr häufig über Fieber, anhaltenden Husten sowie
    Probleme beim Atmen. Insbesondere der anhaltende Husten wird in vielen
    Fallberichten als klassisches Symptom genannt. Die Symptome allein können
    natürlich die Infektion und Erkrankung nicht bestätigen, liefern aber einen
    möglichen Hinweis (insbesondere dann, wenn du vielleicht auch Kontakt zu
    erkrankten Personen hattest oder dich in einem sogenannten Risikogebiet
    aufgehalten hast). Klarheit bringt nur ein genauer Virustest.
  </p>,
  <p key={4}>
    <h3>Gibt es aktuell eine Behandlung gegen das Virus?</h3>
    Das Virus ist sehr neu, aber die Forschung läuft weltweit auf Hochtouren. Da
    wir es mit einem Virus zu tun haben, können herkömmliche antibiotische
    Therapien wie z.B. bei Bakterien nicht angewandt werden. Hierzu müssen
    spezielle antivirale Mittel getestet werden. Zusätzlich stützt sich die
    aktuelle Forschung sehr auf die Entwicklung eines Impfstoffes. Hier wurden
    schon Teilerfolge erzielt, allerdings muss sich zunächst eine ausführliche
    Überprüfung und Testung anschließen, damit Menschen nicht gefährdet werden.
  </p>,
  <p key={5}>
    <h3>Wer ist besonders gefährdet?</h3>
    Betrachtet man die Fallberichte der Kollegen aus China sowie Italien, sieht
    man, dass dieses Virus besonders für die älteren Patienten und Menschen mit
    Vorerkrankungen (z.B. Diabetes, Bluthochdruck, Herzerkrankungen) gefährlich
    ist. Diese Patienten haben ein sehr hohes Risiko, dass die Erkrankung schwer
    und lebensgefährlich verläuft. Aber auch jüngere Patienten können schwere
    Verläufe zeigen und müssen teilweise auf Intensivstationen behandelt werden.
  </p>,
]

const AboutPage = () => {
  return (
    <Layout>
      <SEO
        title="What is COVID-19"
        description="Coronavirus. COVID-19. Symptoms. Spreading. Treatment. Learn about the details here."
      />
      <BasicPage activeCountry="de">
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
