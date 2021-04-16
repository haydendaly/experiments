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
}: {
  icon: string
  title: string
  link: string
}) => (
  <Link to={link} className={styles.tileContainer}>
    <div className={styles.iconContainer}>
      <div className={styles.iconInnerContainer}>
        <img className={styles.icon} src={icon} alt="" />
      </div>
    </div>
    <p className={styles.title}>{title}</p>
  </Link>
)

const tilesContent = [
  {
    icon: elderly,
    title: "70+",
    link: "/elderly",
  },
  {
    icon: pregnant,
    title: "Pregnant",
    link: "/pregnancy",
  },
  {
    icon: healthCondition,
    title: "Health Conditions",
    link: "/other-conditions",
  },
  {
    icon: helmet,
    title: "Carer",
    link: "/carer",
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
          />
        ))}
      </div>
    </div>
  )
}

export default SpecialAdvice
