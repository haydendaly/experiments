import React from "react"
import InfoTile from "../../../shared/InfoTile"
import * as styles from "../howToSelfIsolate.module.scss"
import styled from "styled-components"

import house from "../../../../images/emojis/House2.png"
import arm from "../../../../images/emojis/Arm2.png"
import microscope from "../../../../images/emojis/Microscope1.png"
import dontIcon from "../../../../images/emojis/DoNot1.png"
import sadFace from "../../../../images/emojis/Sadface1.png"
import doIcon from "../../../../images/emojis/Tick1.png"
import elderly from "../../../../images/emojis/Grandma1.png"
import soap from "../../../../images/emojis/Soap1.png"
import { Link } from "gatsby"

const List = styled.ul`
  li::before {
    color: ${props => props.color};
  }
`

const tileContents = [
  {
    title: "Wann wird dies angeordnet?",
    icon: house,
    color: "#d6ba91",
  },
  {
    title: "Warum wird dies durchgeführt?",
    icon: microscope,
    color: "#f1b183",
  },
  {
    title: "Was muss ich tun?",
    icon: arm,
    color: "#75a3c8",
  },
  {
    title: "Wie gehe ich mit Familienangehörigen um?",
    icon: elderly,
    color: "#9dafcb",
  },
  {
    title: "Was gibt es sonst noch zu beachten?",
    icon: soap,
    color: "#33b97d",
  },
]

const HowToSelfIsolate = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Wie kannst du Dich isolieren?</h1>
      <h4 className={styles.byline}>
        Isolation hilft wenn du krank bist andere zu schützen. Beachte einige
        Dinge:
      </h4>
      <InfoTile
        key={tileContents[0].title}
        title={tileContents[0].title}
        icon={tileContents[0].icon}
        color={tileContents[0].color}
        bottomBar={true}
      >
        <List
          color={tileContents[0].color}
          className={styles.plainDetailsContainer}
        >
          <li className={styles.plainDetail}>
            innerhalb der letzten 14 Tage in einem Risikogebiet
          </li>
          <li className={styles.plainDetail}>Kontakt zu COVID-19-Erkrankten</li>
        </List>
      </InfoTile>
      <InfoTile
        key={tileContents[1].title}
        title={tileContents[1].title}
        icon={tileContents[1].icon}
        color={tileContents[1].color}
        bottomBar={true}
      >
        <List
          color={tileContents[1].color}
          className={styles.plainDetailsContainer}
        >
          <li className={styles.plainDetail}>du bist ansteckungsverdächtig</li>
          <li className={styles.plainDetail}>
            dient deinem Schutz und dem Schutz der Bevölkerung und Verringerung
            der Ausbreitung
          </li>
        </List>
      </InfoTile>
      <InfoTile
        key={tileContents[2].title}
        title={tileContents[2].title}
        icon={tileContents[2].icon}
        color={tileContents[2].color}
        bottomBar={true}
      >
        <ul className={styles.details}>
          <li className={styles.detail}>
            <span className={styles.detailText}>
              Unbedingt zuhause bleiben:
            </span>
            <ul className={styles.subDetails}>
              <li className={styles.subDetail}>
                <img className={styles.icon} src={dontIcon} alt="" />
                <span className={styles.detailText}>
                  <b>KEINE</b> Besucher
                </span>
              </li>
              <li className={styles.subDetail}>
                <img className={styles.icon} src={dontIcon} alt="" />
                <span className={styles.detailText}>
                  <b>NICHT</b> zur Arbeit oder Schule gehen
                </span>
              </li>
              <li className={styles.subDetail}>
                <img className={styles.icon} src={dontIcon} alt="" />
                <span className={styles.detailText}>
                  <b>KEINE</b> öffentlichen Verkehrsmittel benutze
                </span>
              </li>
            </ul>
          </li>
          <li className={styles.detail}>
            <span className={styles.detailText}>
              Klärung der Lebensmittelversorgung:
            </span>
            <ul className={styles.subDetails}>
              <li className={styles.detail}>
                <img className={styles.icon} src={doIcon} alt="" />
                <span className={styles.detailText}>
                  <b>DO</b> telefonische Kontaktaufnahme mit Freunden / Familie
                </span>
              </li>
              <li className={styles.detail}>
                <img className={styles.icon} src={doIcon} alt="" />
                <span className={styles.detailText}>
                  <b>DO</b> Essen vor Tür abstellen lassen
                </span>
              </li>
              <li className={styles.detail}>
                <img className={styles.icon} src={doIcon} alt="" />
                <span className={styles.detailText}>
                  <b>DO</b> alternativ über ehrenamtliche Helfer in der Gemeinde
                </span>
              </li>
            </ul>
          </li>
          <li className={styles.detail}>
            <span className={styles.detailText}>
              Telefonische Kontaktaufnahme und Information an Hausarzt
            </span>
          </li>
        </ul>
      </InfoTile>
      <InfoTile
        key={tileContents[3].title}
        title={tileContents[3].title}
        icon={tileContents[3].icon}
        color={tileContents[3].color}
        bottomBar={true}
      >
        <List
          color={tileContents[3].color}
          className={styles.plainDetailsContainer}
        >
          <li className={styles.plainDetail}>
            Insbesondere zu immungeschwächten / älteren Menschen kein direkter
            Kontakt
          </li>
          <li className={styles.plainDetail}>
            Besonders auf Hygiene achten (Keine gemeinsamen Handtücher oder
            Essensbesteck benutzen etc.)
          </li>
        </List>
      </InfoTile>
      <InfoTile
        key={tileContents[4].title}
        title={tileContents[4].title}
        icon={tileContents[4].icon}
        color={tileContents[4].color}
        bottomBar={true}
      >
        <List
          color={tileContents[3].color}
          className={styles.plainDetailsContainer}
        >
          <li className={styles.plainDetail}>Ruhe dich genügend aus !</li>
          <li className={styles.plainDetail}>Trinke genügend!</li>
          <li className={styles.plainDetail}>
            Halte einen geregelten Tagesablauf ein!
          </li>
          <li className={styles.plainDetail}>
            Nutze für Essen ggf. einen Lieferdienst (Essen außerhalb abstellen
            lassen, contactless (!) )
          </li>
          <li className={styles.plainDetail}>
            Halte unbedingt regelmäßig Kontakt zu deinem gesamten Umfeld per
            Telefon!
          </li>
          <li className={styles.plainDetail}>
            Achte auf persönliche Hygiene (regelmäßiges Händewaschen, kein
            Berühren des Gesichts, Benutzung von Desinfektionsmittel)
          </li>
        </List>
      </InfoTile>
      <Link to="/de/ich-habe-probleme" className={styles.linkContainer}>
        <img className={styles.linkIcon} src={sadFace} alt="" />
        <span className={styles.linkTitle}>Probleme mit der Isolierung?</span>
      </Link>
    </div>
  )
}

export default HowToSelfIsolate
