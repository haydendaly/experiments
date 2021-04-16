import React from "react"
import { Link } from "gatsby"

import * as styles from "../specialAdvice.module.scss"

import elderly from "../../../../images/emojis/Grandma2.png"
import pregnant from "../../../../images/emojis/pregnant2.png"
import healthCondition from "../../../../images/emojis/pill2.png"
import helmet from "../../../../images/emojis/helmet2.png"

const Tile = ({
  icon,
  title,
  link,
  external,
}: {
  icon: string
  title: string
  link: string
  external: boolean | undefined
}) =>
  !external ? (
    <Link to={link} className={styles.tileContainer}>
      <div className={styles.iconContainer}>
        <div className={styles.iconInnerContainer}>
          <img className={styles.icon} src={icon} alt="" />
        </div>
      </div>
      <p className={styles.title}>{title}</p>
    </Link>
  ) : (
    <a
      className={styles.tileContainer}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.iconContainer}>
        <div className={styles.iconInnerContainer}>
          <img className={styles.icon} src={icon} alt="" />
        </div>
      </div>
      <p className={styles.title}>{title}</p>
    </a>
  )

const tilesContent = [
  {
    icon: elderly,
    title: "70+",
    link: "/us/elderly",
  },
  {
    icon: pregnant,
    title: "Pregnant",
    link:
      "https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/pregnancy-breastfeeding.html#anchor_1584169262",
    external: true,
  },
  {
    icon: healthCondition,
    title: "Health Conditions",
    link: "/us/other-conditions",
  },
  {
    icon: helmet,
    title: "Carer",
    link:
      "https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/care-for-someone.html",
    external: true,
  },
]

const SpecialAdvice = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>Special Advice</h4>
      <div className={styles.tilesContainer}>
        {tilesContent.map(tile => (
          <Tile
            key={tile.title}
            icon={tile.icon}
            title={tile.title}
            link={tile.link}
            external={tile.external}
          />
        ))}
      </div>
    </div>
  )
}

export default SpecialAdvice
