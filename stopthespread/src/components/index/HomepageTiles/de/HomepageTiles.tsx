import React from "react"
import ClickableTile from "../ClickableTile"

import * as styles from "../homepageTiles.module.scss"

import stopHand from "../../../../images/emojis/Stop2.png"
import thermometer from "../../../../images/emojis/Thermometer2.png"

const contentDetails = [
  {
    link: "/de/wie-kann-ich-helfen",
    icon: stopHand,
    byline: "Wie kann ich helfen?",
    heading: "Stop die Verbreitung",
    animationRight: true,
    external: false,
  },
  {
    link:
      "https://www.zeit.de/wissen/gesundheit/2020-03/kontakt-erkrankte-covid-19-schutz-tipps",
    icon: thermometer,
    byline: "Finde es hier heraus",
    heading: "Bin ich krank?",
    animationRight: false,
    external: true,
  },
]

const HomepageTiles = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Zusammen können wir die Ausbreitung stoppen!
      </h1>
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
