import React from "react"
import classnames from "classnames"
import InfoTile from "../../../shared/InfoTile"

import * as styles from "../imStruggling.module.scss"

import sick from "../../../../images/emojis/Sick1.png"
import sad from "../../../../images/emojis/Sadface1.png"
import help from "../../../../images/emojis/Help1.png"

const tileContents = [
  {
    title: "Feeling worse?",
    byline: null,
    icon: sick,
    color: "#ffbf58",
  },
  {
    title: "Feeling alone or sad?",
    byline: null,
    icon: sad,
    color: "#ffbf58",
  },
  {
    title: "I need help",
    byline: null,
    icon: help,
    color: "#ffbf58",
  },
]

const ImStruggling = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>I'm Struggling</h1>
      <h4 className={styles.byline}>Don't worry - we're here to help</h4>
      <InfoTile
        key={tileContents[0].title}
        title={tileContents[0].title}
        icon={tileContents[0].icon}
        color={tileContents[0].color}
        bottomBar={true}
      >
        <ul className={styles.details}>
          <li className={styles.detail}>
            Are you already self-isolating? Call 111
          </li>
          <li className={styles.detail}>
            Are you not self-isolating? Check what to do{" "}
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/hcp/guidance-prevent-spread.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </li>
          <li className={classnames(styles.detail, styles.warning)}>
            Call 911 if
            <ul className={styles.subDetails}>
              <li className={styles.subDetail}>
                You're having difficulty breathing
              </li>
              <li className={styles.subDetail}>
                You or someone else is having a heart attack or stroke
              </li>
              <li className={styles.subDetail}>
                You think there's another medical emergency, e.g. chest pain,
                fits that aren't stopping, loss of consciousness
              </li>
            </ul>
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
            Speak to your friends and family through social media
          </li>
          <li className={styles.detail}>
            Get more help{" "}
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/managing-stress-anxiety.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </li>
          <li className={styles.detail}>
            Find a local mutual aid group{" "}
            <a
              href="https://docs.google.com/spreadsheets/d/18P898HWbdR5ouW61sAxW_iBl3yiZlgJu0nSmepn6NwM/htmlview?sle=true#gid=1451634215"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </li>
          <li className={styles.detail}>
            Be mindful of your exposure to negative news and social media
          </li>
        </ul>
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
            Find a local mutual aid group{" "}
            <a
              href="https://docs.google.com/spreadsheets/d/18P898HWbdR5ouW61sAxW_iBl3yiZlgJu0nSmepn6NwM/htmlview?sle=true#gid=1451634215"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </li>
          <li className={styles.detail}>Call your family and friends</li>
          <li className={styles.detail}>
            If you can't find any help, call your GP
          </li>
        </ul>
      </InfoTile>
    </div>
  )
}

export default ImStruggling
