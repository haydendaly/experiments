import React, { useState } from "react"
import { Link } from "gatsby"
import { Node } from "binstree"
import InfoTile from "../../../shared/InfoTile"
import shortid from "shortid"
import classnames from "classnames"

import * as styles from "../../../myths/Myths/myths.module.scss"

import phone from "../../../../images/emojis/Telephone2.png"
import house from "../../../../images/emojis/House1.png"
import phoneIcon from "../phone.svg"
import corona from "../../../../images/emojis/Corona2.png"
import mask from "../../../../images/emojis/Mask2.png"
import helmet1 from "../../../../images/emojis/helmet1.png";

const tileContents = [
  {
    title: "Developing Symptoms?",
    icon: corona,
    color: "#f49876",
    details: [
      "Fever and cough are common symptoms",
      "If you are having trouble breathing, get medical help! Call your doctor or emergency room first before going in.",
      "Refer to your state health department for COIVD-19 hotlines and testing guidelines",
      "Wear a face-covering cloth and practice hand hygiene before leaving the home."
    ],
    sources: [
    ],
  },
  {
    title: "Household Prevention",
    icon: house,
    color: "#91afce",
    details: [
      "Wash hands often with soap and water for 20 seconds",
      "Have a designated \"sick room\" and \"sick bathroom\" if possible.",
      "Wear a cloth face cover over your nose and mouth when around others",
      "Cover coughs and sneezes with tissue",
      "Do not share dishes, towels, or bedding",
      "Clean and disinfect all high-touch surfaces in your \"sick room\" routinely",
    ],
    sources: [
    ],
  },
  {
    title: "Doctor's Appointments",
    icon: helmet1,
    color: "#7fbe4d",
    details: [
      "Call ahead, even if you are having trouble breathing! They will tell you what to do.",
      "Many visits are being postponed or transitioned to telemedicine.",
      "If you think you may have COVID-19 symptoms contact your state health department hotline State Health Department Phone Numbers and Websites"
    ],
    sources: [
    ],
  },
]

const InnerContent = ({
  details,
  sources,
}: {
  details: string[]
  sources: {
    link: string
    title: string
  }[]
}) => (
  <div className={styles.innerContainer}>
    {details.map(detail => (
      <p key={shortid.generate()} className={styles.detail}>
        {detail}
      </p>
    ))}
    {sources.map(source => (
      <p key={shortid.generate()} className={styles.source}>
        <b>Source: </b>{" "}
        <a href={source.link} target="_blank" rel="noopener noreferrer">
          {source.title}
        </a>
      </p>
    ))}
  </div>
)

const Questions = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>What to do if you are sick?</h1>
      {tileContents.map(tile => (
        <InfoTile
          key={tile.title}
          title={tile.title}
          icon={tile.icon}
          color={tile.color}
          bottomBar={true}
        >
          <InnerContent details={tile.details} sources={tile.sources} />
        </InfoTile>
      ))}
      <h1 className={styles.heading}>FAQs</h1>
    </div>
  )
}

export default Questions
