import React from "react"
import { Link } from "gatsby"

import * as styles from "../moreInformation.module.scss"

import ukFlag from "../../../../images/emojis/UK1.png"
import house from "../../../../images/emojis/House1.png"
import attention from "../../../../images/emojis/Attention1.png"
import monkey from "../../../../images/emojis/Monkey1.png"
import struggling from "../../../../images/emojis/Sadface1.png"
import plane from "../../../../images/emojis/Plane1.png"
import microscope from "../../../../images/emojis/Microscope1.png"

const links = [
  {
    icon: ukFlag,
    linkTo: "/updates-uk",
    title: "Latest updates for the UK",
  },
  {
    icon: house,
    linkTo: "/how-to-self-isolate",
    title: "How to self-isolate",
  },
  {
    icon: attention,
    linkTo: "/FAQ",
    title: "Your questions answered",
  },
  {
    icon: monkey,
    linkTo: "/myths",
    title: "Myths and misconceptions",
  },
  {
    icon: struggling,
    linkTo: "/I-am-struggling",
    title: "I'm struggling",
  },
  {
    icon: plane,
    linkTo: "https://www.gov.uk/foreign-travel-advice",
    title: "Travel advice",
    external: true,
  },
  {
    icon: microscope,
    linkTo: "/learn-about-coronavirus",
    title: "What is COVID-19?",
  },
]

const MoreInformation = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>More Information</h4>
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
