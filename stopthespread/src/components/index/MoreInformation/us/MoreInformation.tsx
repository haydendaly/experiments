import React from "react"
import { Link } from "gatsby"

import * as styles from "../moreInformation.module.scss"

import usFlag from "../../../../images/emojis/US1.png"
import sick from "../../../../images/emojis/Sick1.png"
import attention from "../../../../images/emojis/Attention1.png"
import monkey from "../../../../images/emojis/Monkey1.png"
import struggling from "../../../../images/emojis/Sadface1.png"
import plane from "../../../../images/emojis/Plane1.png"
import microscope from "../../../../images/emojis/Microscope1.png"

const links = [
  {
    icon: usFlag,
    linkTo: "/us/updates",
    title: "Latest updates for the US",
    comingSoon: true,
  },
  {
    icon: sick,
    linkTo:
      "/us/if-you-might-be-ill",
    title: "What to do if you’re sick",
    external: true,
  },
  {
    icon: attention,
    linkTo: "/us/FAQ",
    title: "Your questions answered",
    comingSoon: true,
  },
  {
    icon: monkey,
    linkTo: "/us/myths",
    title: "Myths and misconceptions",
  },
  {
    icon: struggling,
    linkTo: "/us/I-am-struggling",
    title: "I'm struggling",
    comingSoon: true,
  },
  {
    icon: plane,
    linkTo: "https://www.cdc.gov/coronavirus/2019-ncov/travelers/index.html",
    title: "Travel advice",
    external: true,
  },
  {
    icon: microscope,
    linkTo: "/us/learn-about-coronavirus",
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
              {link.comingSoon && (
                <span className={styles.comingSoon}>Coming Soon</span>
              )}
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
