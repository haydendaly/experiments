import React from "react"
import { Link } from "gatsby"
import InfoTile from "../../../shared/InfoTile"
import TileContent from "../../../shared/InfoTile/TileContent"

import * as styles from "../stopTheSpread.module.scss"

import soap from "../../../../images/emojis/Soap1.png"
import palm from "../../../../images/emojis/Island1.png"
import elderly from "../../../../images/emojis/Grandma1.png"
import hands from "../../../../images/emojis/RaisedHands1.png"
import attention from "../../../../images/emojis/Attention1.png"

const tileContents = [
  {
    title: "Strictly minimize social contact",
    byline: null,
    icon: palm,
    details: [
      "Avoid all unnecessary public contact and activities (e.g. bars, clubs, theatres)",
      "Avoid all unnecessary travel (inc. public transport)",
      "If at all possible, work from home",
      "Stay at least 6ft away from anyone with symptoms",
    ],
    color: "#ffba43",
  },
  {
    title: "Wash your hands with soap for 20 seconds",
    byline: null,
    icon: soap,
    details: [
      "Before you eat",
      "When you get home or to work",
      "Soap is better than hand sanitiser",
    ],
    color: "#33b97d",
  },
  {
    title: "Do not touch your face",
    byline: "(it's harder than you think)",
    icon: hands,
    details: [
      "If you sneeze or cough, cover your face with a sleeve or tissue",
      "Use tissues only once and throw any away immediately",
    ],
    color: "#f1b183",
  },
  {
    title: "Help protect those at risk",
    byline:
      "(over 70, have other health conditions, pregnant, or have a weakened immune system)",
    icon: elderly,
    details: [
      "Help them minimize as much public contact as possible, e.g. buy groceries for them",
      "Keep in touch via phone, messaging or video calls",
    ],
    color: "#9dafcb",
  },
]

const StopTheSpread = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Stop the spread</h1>
      <h4 className={styles.byline}>
        The top 4 things to do if you're not ill
      </h4>
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
        Have questions about this, social distancing, and more? Find your
        answers here
      </h4>
      <Link to="/us/FAQ" className={styles.linkContainer}>
        <img className={styles.linkIcon} src={attention} alt="" />
        <span className={styles.linkTitle}>Your questions answered</span>
      </Link>
    </div>
  )
}

export default StopTheSpread
