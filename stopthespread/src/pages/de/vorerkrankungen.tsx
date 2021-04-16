import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import InfoTile from "../../components/shared/InfoTile"
import TileContent from "../../components/shared/InfoTile/TileContent"

import * as styles from "../../components/otherConditions/otherConditions.module.scss"

import siren from "../../images/emojis/siren1.png"
import warning from "../../images/emojis/warning1.png"

const tileContents = [
  {
    title: "Sei besonders vorsichtig !",
    byline: null,
    icon: warning,
    details: [
      "Einkäufe / Botengänge durch Kinder / Nachbarn oder Freunde erledigen lassen",
      "Meide Veranstaltungen, Cafes, Restaurants und alle größeren Ansammlungen von Menschen",
      "Verzichte in der aktuellen Situation darauf, Enkel zu versorgen und nutze alternative Wege für den Kontakt, z.B. Skype mit Video etc.",
      "Verzichte aktuell auf den öffentlichen Nahverkehr und nutze bei dringenden Terminen (z.B. Arzt) dein eigenes Auto oder gehe zu Fuss",
      "Falls du noch berufstätig bist, arbeite unbedingt von zu Hause",
      "Empfange aktuell keinen Besuch bei dir zu Hause und verschiebe diese Termine.",
      "Nutze Apothekenlieferdienste für deine Medikamente",
    ],
    color: "#f73b28",
    bottomBar: true,
  },
  {
    title: "Bei welchen Erkrankungen ist es besonders gefährlich?",
    byline: null,
    icon: siren,
    details: [
      "Erkrankungen des Immun- / Abwehrsystems (z.B. Leukämien, Bluterkrankungen)",
      "Krebserkrankung",
      "Einnahme von Medikamenten, die direkt am Immunsystem wirken (z.B. Einnahme von Immuntherapien, Kortison)",
      "nach Organtransplantation",
      "während Chemotherapie",
      "nach Milzentfernung",
    ],
    color: "#ffffff",
    warning: true,
    bottomBar: false,
  },
]

const OtherConditionsPage = () => {
  return (
    <Layout>
      <SEO
        title="Vorerkrankungen"
        description="Du hast andere Vorerkrankungen? Hier sind einige spezielle Hinweise für Dich."
      />
      <BasicPage activeCountry="de">
        <div className={styles.container}>
          <h1 className={styles.heading}>Other Conditions</h1>
          <p className={styles.byline}>
            Menschen mit Vorerkrankungen (Herz-Kreislauf, Diabetes,
            Lungenerkrankungen, Nierenerkrankungen) sind besonders hinsichtlich
            eines schweren Krankheitsverlaufes gefährdet. Aus diesem Grund
            solltest du dir folgende Ratschläge besonders zu Herzen nehmen:
          </p>
          {tileContents.map(tile => (
            <InfoTile
              key={tile.title}
              title={tile.title}
              icon={tile.icon}
              color={tile.color}
              bottomBar={tile.bottomBar}
              warning={tile.warning}
            >
              <TileContent
                color={tile.color}
                byline={tile.byline}
                details={tile.details}
                warning={tile.warning}
              />
            </InfoTile>
          ))}
        </div>
      </BasicPage>
    </Layout>
  )
}

export default OtherConditionsPage
