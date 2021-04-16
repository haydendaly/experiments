import React from "react"
import ClickableTile from "../ClickableTile"

import * as styles from "../homepageTiles.module.scss"

import stopHand from "../../../../images/emojis/Stop2.png"
import thermometer from "../../../../images/emojis/Thermometer2.png"

const contentDetails = [
  {
    link: "/how-you-can-help",
    icon: stopHand,
    byline: "How I can",
    heading: "Stop the spread",
    animationRight: true,
    external: false,
  },
  {
    link: "https://111.nhs.uk/service/COVID-19/",
    icon: thermometer,
    byline: "Find out here",
    heading: "Am I ill?",
    animationRight: false,
    external: true,
  },
]

const HomepageTiles = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Together we can stop the spread!</h1>
      <div className={styles.tilesContainer}>
        {contentDetails.map(detail => (
          <div className={styles.tileContainer} key={detail.heading}>
            <ClickableTile
              link={detail.link}
              icon={detail.icon}
              byline={detail.byline}
              heading={detail.heading}
              animationRight={detail.animationRight}
              external={detail.external}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomepageTiles
