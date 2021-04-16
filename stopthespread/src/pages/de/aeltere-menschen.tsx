import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import InfoTile from "../../components/shared/InfoTile"
import TileContent from "../../components/shared/InfoTile/TileContent"

import * as styles from "../../components/otherConditions/otherConditions.module.scss"
import siren from "../../images/emojis/siren1.png"

const tileContents = [
  {
    title: "Sei besonders vorsichtig!",
    byline: null,
    icon: siren,
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
    warning: false, // Including these to suppress typesccript warnings below
    bottomText: null,
  },
]

const ElderlyPage = () => {
  return (
    <Layout>
      <SEO
        title="Ältere Menschen"
        description="Bist du über 70? Hier sind besondere Hinweise für dich."
      />
      <BasicPage activeCountry="de">
        <div className={styles.container}>
          <h1 className={styles.heading}>Ältere Menschen</h1>
          <p className={styles.byline}>
            Das Risiko für einen schweren Verlauf bei einer Coronainfektion
            steigt deutlich mit dem Alter, beginnend ab dem 50. Lebensjahr.
            Ältere Menschen (über 60 Jahre) sind daher besonders durch das
            Coronavirus gefährdet. Was kannst du selbst tun?
          </p>
          {tileContents.map(tile => (
            <InfoTile
              key={tile.title}
              title={tile.title}
              icon={tile.icon}
              color={tile.color}
              bottomBar={true}
              bottomText={tile.bottomText}
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

export default ElderlyPage
