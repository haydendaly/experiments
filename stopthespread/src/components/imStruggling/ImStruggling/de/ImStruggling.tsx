import React from "react"
import InfoTile from "../../../shared/InfoTile"

import * as styles from "../imStruggling.module.scss"

import sick from "../../../../images/emojis/Sick1.png"
import sad from "../../../../images/emojis/Sadface1.png"

const tileContents = [
  {
    title: "Ich habe typische Corona-Symptome, an wen kann ich mich wenden?",
    byline: null,
    icon: sick,
    color: "#ffbf58",
  },
  {
    title: "Ich fühle mich einsam und allein.",
    byline: null,
    icon: sad,
    color: "#ffbf58",
  },
]

const ImStruggling = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Ich habe Probleme</h1>
      <h4 className={styles.byline}>Wir sind hier um Dir zu helfen.</h4>
      <InfoTile
        key={tileContents[0].title}
        title={tileContents[0].title}
        icon={tileContents[0].icon}
        color={tileContents[0].color}
        bottomBar={true}
      >
        <ul className={styles.details}>
          <li className={styles.detail}>
            Ärztlicher Bereitschaftsdienst: 116117
          </li>
          <li className={styles.detail}>lokale Fieberambulanz</li>
          <li className={styles.detail}>
            telefonische Rücksprache mit Hausarzt
          </li>
        </ul>
      </InfoTile>
      <InfoTile
        key={tileContents[1].title}
        title={tileContents[1].title}
        icon={tileContents[1].icon}
        color={tileContents[1].color}
        bottomBar={true}
      >
        <ul className={styles.details}>
          <li className={styles.detail}>
            telefonische Kontaktaufnahme mit Freunden
          </li>
          <li className={styles.detail}>
            Reduziere den Konsum von Nachrichten + Fernsehen mit negativen
            Meldungen
          </li>
          <li className={styles.detail}>
            Einhalten einer Tagesstruktur (Einrichten des Arbeitsplatzes im
            Homeoffice, digitale Mittagspause mit Kollegen usw)
          </li>
          <li className={styles.detail}> ausreichende Bewegung </li>
          <li className={styles.detail}> regelmäßiges Essen + Trinken </li>
        </ul>
      </InfoTile>
    </div>
  )
}

export default ImStruggling
