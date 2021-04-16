import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import BasicPage from "../../templates/BasicPage"
import InfoTile from "../../components/shared/InfoTile"
import TileContent from "../../components/shared/InfoTile/TileContent"

import * as styles from "../../components/otherConditions/otherConditions.module.scss"

import phone from "../../images/emojis/phone1.png"
import warning from "../../images/emojis/warning1.png"

const tileContents = [
  {
    title: "Sprich mit deinem Arbeitgeber",
    byline: null,
    icon: phone,
    details: [
      "Sprich mit deinem Arbeitgeber hinsichtlich der Vorgaben auf deiner Station",
    ],
    color: "#333333",
    warning: false, // Including these to suppress typesccript warnings below
    bottomText: null,
  },
  {
    title: "Besondere Vorsicht!",
    byline: null,
    icon: warning,
    details: [
      "Da diese Menschen besonders gefährdet sind, sollten alle Maßnahmen umgesetzt werden.",
      "Generell sind es aber die Maßnahmen, die auch für alle anderen infektiösen Atemwegserkrankungen gelten und dir sicherlich bereits bekannt sind.",
      "Dennoch kann auch hier ein kurzer Blick in die Empfehlung nicht schaden.",
      "Zusätzlich immer sehr wichtig: Eigenschutz beachten.",
    ],
    color: "#333333",
    warning: false, // Including these to suppress typesccript warnings below
    bottomText: null,
  },
]
const CarerPage = () => {
  return (
    <Layout>
      <SEO
        title="Du pflegst Menschen - beruflich oder privat?"
        description="Du pflegst Menschen - beruflich oder privat? Hier sind einige besondere Hinweis für Dich."
      />
      <BasicPage activeCountry="de">
        <div className={styles.container}>
          <h1 className={styles.heading}>
            Du pflegst Menschen - beruflich oder privat?
          </h1>
          <p className={styles.byline}>
            Siehe{" "}
            <a
              href="https://www.der-paritaetische.de/fachinfos/migration-und-flucht/empfehlungen-zu-covid-19-coronavirus/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fachinfos der Paritätischen
            </a>{" "}
            und{" "}
            <a
              href="https://www.rki.de/DE/Content/Infekt/Krankenhaushygiene/Kommission/Downloads/Heimp_Rili.pdf?__blob=publicationFile"
              target="_blank"
              rel="noopener noreferrer"
            >
              Krankenhaushygenie
            </a>
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

export default CarerPage
