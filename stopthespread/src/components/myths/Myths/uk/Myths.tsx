import React from "react"
import InfoTile from "../../../shared/InfoTile"
import shortid from "shortid"

import * as styles from "../myths.module.scss"

import soapBottle from "../../../../images/emojis/SoapBottle2.png"
import libra from "../../../../images/emojis/Libra2.png"
import corona from "../../../../images/emojis/Corona2.png"
import mask from "../../../../images/emojis/Mask2.png"
import flame from "../../../../images/emojis/Flame2.png"

const tileContents = [
  {
    title: "Myth: Hand sanitiser is as good as soap",
    icon: soapBottle,
    color: "#f49876",
    details: [
      "Washing your hands with soap for at least 20 seconds is the best way to avoid the virus. Soap breaks down the virus, and lubricates the virus away from the skin. If soap is not available, using an alcohol-based sanitiser gel is your next best option - ensure that every corner of your hands are soaked with the gel. Any sanitiser gel you use should be at least 60% alcohol.",
    ],
    sources: [
      {
        link: "https://www.cdc.gov/coronavirus/2019-ncov/index.html",
        title: "CDC Coronavirus Guidance",
      },
    ],
  },
  {
    title: "Myth: Coronavirus is less dangerous than the flu",
    icon: libra,
    color: "#91afce",
    details: [
      "Coronavirus (COVID-19) is much more deadly than the flu, most likely 10 to 20 times more deadly based on current data. What is more dangerous about coronavirus is how easily it can spread. The flu has a 'reproduction rate' of 1.3, which means that each person with the flu spreads it to 1.3 other people on average. Coronavirus has a reproduction rate of between 2 and 3. This means it has the potential to spread quickly and overwhelm our medical systems - which could lead to a much higher fatality rate. This is why it is important that everyone does what they can to stop the spread.",
      "COVID-19 is a new virus which is not yet fully understood, as more data and research is available these statistics will be refined.",
    ],
    sources: [
      {
        link:
          "https://www.who.int/docs/default-source/coronaviruse/situation-reports/20200306-sitrep-46-covid-19.pdf?sfvrsn=96b04adf_2",
        title: "WHO Situation Report",
      },
    ],
  },
  {
    title: "Myth: Coronavirus is harder to catch than a cold or flu",
    icon: corona,
    color: "#7fbe4d",
    details: [
      "Coronavirus (COVID-19) has a much higher transmission rate than the flu and the common cold. The flu has a 'reproduction rate' of 1.3, which means that each person with the flu spreads it to 1.3 other people on average. Coronavirus has a reproduction rate of between 2 and 3. This means it has the potential to spread quickly and overwhelm our medical systems - which could lead to many more people dying. This is why it is important that everyone does what they can to stop the spread.",
      "COVID-19 is a new virus which is not yet fully understood, as more data and research is available these statistics will be refined.",
    ],
    sources: [
      {
        link:
          "https://www.who.int/docs/default-source/coronaviruse/situation-reports/20200306-sitrep-46-covid-19.pdf?sfvrsn=96b04adf_2",
        title: "WHO Situation Report",
      },
    ],
  },
  {
    title: "Myth: Everyone should wear a face mask",
    icon: mask,
    color: "#ffbf58",
    details: [
      "There is a global shortage of masks and we need to use them carefully. Only wear a face mask if (1) you are taking care of someone who is ill, or (2) you are ill and may encounter individuals who are not ill during your isolation. If neither of these apply to you, you should not wear a face mask. In addition, face masks used incorrectly can actually increase your chances of becoming infected.",
    ],
    sources: [
      {
        link: "https://www.who.int/news-room/q-a-detail/q-a-coronaviruses",
        title: "WHO Coronavirus Q&A",
      },
    ],
  },
  {
    title: "Myth: Heat kills the virus",
    icon: flame,
    color: "#ff6f40",
    details: [
      "It takes sustained temperatures of more than 60 degrees Celsius to kill the virus, which is too hot for your body and your skin. If possible, wash  bed linen and towels at 60 degrees Celsius or more as this can kill viruses in the fabric.",
    ],
    sources: [
      {
        link: "https://www.bbc.co.uk/news/world-51735367",
        title:
          "Professor Sally Bloomfield, at the London School of Hygiene and Tropical Medicine",
      },
      {
        link:
          "https://www.gov.uk/government/publications/covid-19-stay-at-home-guidance/stay-at-home-guidance-for-people-with-confirmed-or-possible-coronavirus-covid-19-infection",
        title: "NHS and Public Health England Coronavirus Guidance",
      },
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

const HowToSelfIsolate = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Myths</h1>
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
    </div>
  )
}

export default HowToSelfIsolate
