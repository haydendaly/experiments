import React from "react"
import InfoTile from "../../../shared/InfoTile"
import shortid from "shortid"

import * as styles from "../myths.module.scss"

import soapBottle from "../../../../images/emojis/SoapBottle2.png"
import libra from "../../../../images/emojis/Libra2.png"

const tileContents = [
  {
    title: "Desinfektionsmittel ist wirkungsvoller als Hände waschen",
    icon: soapBottle,
    color: "#f49876",
    details: [
      "In einer normalen Umgebung (kein medizinisches Personal, keine Personen mit Immunerkrankungen) ist keine regelmäßige Händedesinfektion empfohlen. Das sorgsame Händewaschen über mindestens 20 Sekunden ist genauso wirksam gegen Corona. Wichtig ist die korrekte Anwendung. Siehe dieses Video: https://www.youtube.com/watch?v=hd1V04xcTds",
    ],
    sources: [],
  },
  {
    title:
      "Die “normale Influenza” ist genauso gefährlich wie das Corona-Virus.",
    icon: libra,
    color: "#91afce",
    details: [
      "In vielen Diskussionen fällt der Vergleich zu der normalen “Grippe”. Dies stimmt aus mehreren Gründen nicht: Der Erreger der jährlichen Influenza ist seit Jahren bekannt, es existieren Erfahrungswerte, es gibt einen Impfstoff sowie eine direkte Medikation gegen das Virus. Bei Corona ist dies anders: Der Virus ist erst seit 4 Monaten bekannt und hat zusätzlich noch eine deutlich höhere Infektionswahrscheinlichkeit.",
      "Gemessen werden kann dies mit der sogenannten Basisreproduktionszahl. Diese beträgt bei der Influenza etwa 1.3, bei Corona 2-3. Somit werden durch einen Infizierten deutlich mehr Personen infiziert. Obwohl wir die Sterblichkeit aktuell noch nicht ganz sicher abgeschätzen können (da es Unterschiede zwischen einzelnen Ländern gibt), sind die Raten deutlich über der normalen Grippe. Eine Therapie oder Impfung existiert zudem nicht. Somit kann dieser Virus nicht mit der normalen Grippe nicht herhalten.",
    ],
    sources: [],
  },
]

const InnerContent = ({
  details,
  sources,
}: {
  details: string[]
  sources: {
    link: string
    title: string
  }[]
}) => (
  <div className={styles.innerContainer}>
    {details.map(detail => (
      <p key={shortid.generate()} className={styles.detail}>
        {detail}
      </p>
    ))}
    {sources.map(source => (
      <p key={shortid.generate()} className={styles.source}>
        <b>Source: </b>{" "}
        <a href={source.link} target="_blank" rel="noopener noreferrer">
          {source.title}
        </a>
      </p>
    ))}
  </div>
)

const HowToSelfIsolate = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Missverständnisse</h1>
      {tileContents.map(tile => (
        <InfoTile
          key={tile.title}
          title={tile.title}
          icon={tile.icon}
          color={tile.color}
          bottomBar={true}
        >
          <InnerContent details={tile.details} sources={tile.sources} />
        </InfoTile>
      ))}
    </div>
  )
}

export default HowToSelfIsolate
