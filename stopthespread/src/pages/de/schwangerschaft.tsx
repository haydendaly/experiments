import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import InfoTile from "../../components/shared/InfoTile"
import TileContent from "../../components/shared/InfoTile/TileContent"

import * as styles from "../../components/otherConditions/otherConditions.module.scss"

import warning from "../../images/emojis/siren1.png"
import thermometer from "../../images/emojis/Thermometer1.png"

const tileContents = [
  {
    title:
      "Doch was kannst du selbst in dieser unsicheren Situation unternehmen?",
    byline: null,
    icon: warning,
    details: [
      "Vermeide alle möglichen Kontakte und halte den 1.50m Sicherheitsabstand ein.",
      "Achte auf strenge Hygiene.",
      "Vermeide alle Aufenthalte in Restaurants, Bars und Cafes.",
      "Nutze wenn möglich dein eigenes Auto oder gehe zu Fuss und verzichte auf den öffentlichen Nahverkehr.",
      "Lass den Einkauf durch Ehemann oder Freunde erledigen.",
      "Falls du aktuell noch arbeitest, versuche in das Home-Office zu wechseln.",
      "Verzichte aktuell auf Treffen mit Freunden bei dir zu Hause und reduziere deine Kontakte auf enge Familienmitglieder.",
    ],
    color: "#f73b28",
    warning: false, // Including these to suppress typesccript warnings below
    bottomText: null,
  },
  {
    title: "Falls du dir unsicher bist?",
    byline: null,
    icon: thermometer,
    details: [
      "Nehme telefonischen Kontakt mit deiner Geburtsabteilung / Gynäkologen auf.",
    ],
    color: "#f75050",
  },
]

const PregnantPage = () => {
  return (
    <Layout>
      <SEO
        title="Schwangere Frauen"
        description="Bist du Schwanger? Hier sind einige Hinweis für dich."
      />
      <BasicPage activeCountry="de">
        <div className={styles.container}>
          <h1 className={styles.heading}>Schwangere Frauen</h1>
          <p className={styles.byline}>
            Du bist schwanger und machst dir Sorgen um dich und dein Kind?
          </p>
          <p className={styles.byline}>
            Die bisher gesammelten Daten und Erfahrungsberichte
            (Veröffentlichungen in Fachmagazinen, Weltgesundheitsorganisation,
            Robert-Koch-Institut) zeigen, dass Schwangere kein erhöhtes Risiko
            für eine schwere Erkrankung haben. Auch bei Kindern ist die
            Erkrankung deutlich milder ausgeprägt. Auch auf eine Übertragung im
            Mutterleib gibt es bislang keine Hinweise. Das klingt beruhigend.
            Dennoch muss natürlich erwähnt werden, dass dieses Virus erst wenige
            Monate bekannt ist und daher nur wenige Erfahrungsberichte vorhanden
            sind. Daher: Erhöhte Vorsicht für dich und dein Kind.
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

export default PregnantPage
