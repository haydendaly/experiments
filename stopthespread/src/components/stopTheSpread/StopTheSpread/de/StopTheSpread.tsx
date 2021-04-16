import React from "react"
import { Link } from "gatsby"
import InfoTile from "../../../shared/InfoTile"
import TileContent from "../../../shared/InfoTile/TileContent"

import * as styles from "../stopTheSpread.module.scss"

import soap from "../../../../images/emojis/Soap1.png"
import elderly from "../../../../images/emojis/Grandma1.png"
import hands from "../../../../images/emojis/RaisedHands1.png"
import attention from "../../../../images/emojis/Attention1.png"
import siren from "../../../../images/emojis/warning1.png"

const tileContents = [
  {
    title:
      "Kontaktsperre - Aktuelle Richtlinien zur Beschränkung sozialer Kontakte in Deutschland",
    byline: null,
    icon: siren,
    // warning: true,
    color: "#fe1e1e",
    bottomBar: true,
    details: [
      "Kontakt zu Angehörigen außerhalb des eigenen Haushalts auf ein Minimum reduzieren",
      "Abstand zu anderen Personen mindestens 1,5 Meter",
      "Aufenthalt in der Öffentlichkeit ist nur alleine / oder mit einer weiteren nicht im Haushalt lebenden Person / oder mit Angehörigen gestattet",
      "Aufenthalt in der Öffentlichkeit nur für trifftige Gründe (Arbeit, Notbetreuung, Einkäufe, Arztbesuche, Teilnahme an Sitzungen, erforderlichen Terminen oder Prüfungen, Sport und Bewegung)",
    ],
  },
  {
    title: "Regelmäßiges Händewaschen",
    byline: null,
    icon: soap,
    details: [
      "Wasche deine Hände für mindestens 20 Sekunden mit Seife",
      "vor jedem Essen, sobald du nach Haus kommst",
    ],
    color: "#33b97d",
  },
  {
    title: "Kein Berühren des Gesichts",
    byline: "(echt schwer)",
    icon: hands,
    details: [
      "Wenn du niest oder hustest, huste in deine Armbeuge",
      "Benutze Taschentücher nur einmal und wirf sie dann weg",
    ],
    color: "#f1b183",
  },
  {
    title: "Kümmere dich um deine Mitmenschen",
    byline: "(mit ausreichend Abstand)",
    icon: elderly,
    details: [
      "z.B. erledige Einkäufe für altere oder immungeschwächte Menschen in deiner Umgebung",
    ],
    color: "#9dafcb",
  },
]

const StopTheSpread = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Stop die Ausbreitung!</h1>
      <h4 className={styles.byline}>Wie kann ich beitragen?</h4>
      {tileContents.map(tile => (
        <InfoTile
          key={tile.title}
          title={tile.title}
          icon={tile.icon}
          color={tile.color}
          bottomBar={true}
        >
          <TileContent
            color={tile.color}
            byline={tile.byline}
            details={tile.details}
          />
        </InfoTile>
      ))}
      <h4 className={styles.bottomText}>
        Hast du Fragen über was du tun kannst, soziale distanzierung oder
        anderes? Finde Deine Antworten hier
      </h4>
      <Link to="de/FAQ" className={styles.linkContainer}>
        <img className={styles.linkIcon} src={attention} alt="" />
        <span className={styles.linkTitle}>Deine Fragen beantwortet</span>
      </Link>
    </div>
  )
}

export default StopTheSpread
