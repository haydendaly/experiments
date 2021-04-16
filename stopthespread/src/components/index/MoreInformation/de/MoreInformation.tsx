import React from "react"
import { Link } from "gatsby"

import * as styles from "../moreInformation.module.scss"

import house from "../../../../images/emojis/House1.png"
import attention from "../../../../images/emojis/Attention1.png"
import monkey from "../../../../images/emojis/Monkey1.png"
import struggling from "../../../../images/emojis/Sadface1.png"
import plane from "../../../../images/emojis/Plane1.png"
import microscope from "../../../../images/emojis/Microscope1.png"

const links = [
  {
    icon: house,
    linkTo: "/de/wie-selbst-isolieren",
    title: "Wie kannst du Dich isolieren?",
  },
  {
    icon: attention,
    linkTo: "/de/FAQ",
    title: "Deine Fragen beantwortet",
  },
  {
    icon: monkey,
    linkTo: "/de/mythen",
    title: "Missverständnisse und Falschinformationen",
  },
  {
    icon: struggling,
    linkTo: "/de/ich-habe-probleme",
    title: "Ich habe Probleme",
  },
  {
    icon: plane,
    linkTo:
      "https://www.auswaertiges-amt.de/de/ReiseUndSicherheit/reise-und-sicherheitshinweise",
    title: "Reise Hinweise",
    external: true,
  },
  {
    icon: microscope,
    linkTo: "/de/was-ist-covid",
    title: "Was ist COVID-19?",
  },
]

const MoreInformation = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Mehr Informationen</h4>
      <div className={styles.linksContainer}>
        {links.map(link =>
          !link.external ? (
            <Link
              key={link.title}
              to={link.linkTo}
              className={styles.linkContainer}
            >
              <img className={styles.icon} src={link.icon} alt="" />
              <span className={styles.linkTitle}>{link.title}</span>
            </Link>
          ) : (
            <a
              className={styles.linkContainer}
              href={link.linkTo}
              target="_blank"
              rel="noopener noreferrer"
              key={link.title}
            >
              <img className={styles.icon} src={link.icon} alt="" />
              <span className={styles.linkTitle}>{link.title}</span>
            </a>
          )
        )}
      </div>
    </div>
  )
}

export default MoreInformation
