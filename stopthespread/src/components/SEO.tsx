/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
// tslint:disable-next-line: import-name
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import favicon32 from "../images/favicons/favicon-32x32.png"
import favicon16 from "../images/favicons/favicon-16x16.png"
import faviconTouch from "../images/favicons/apple-touch-icon.png"
import socialShareImageLarge from "../images/socialShareLarge.png"

interface Props {
  description?: string
  title?: string
  cannonical?: string
}

const shareTitle = `All the coronavirus information you need in one place.`
const shareDescription = `Find out what you should do. Together we can stop the spread.`

const SEO = (props: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            language
            ogLanguage
            siteUrl
          }
        }
      }
    `
  )
  const { description, title, cannonical } = props

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title

  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "@id": "",
      url: "https://stopthespread.info",
      name: metaTitle,
    },
  ]

  return (
    <Helmet>
      <html lang={site.siteMetadata.siteLanguage} />
      <title>
        {title} | {site.siteMetadata.title}
      </title>
      <meta name="description" content={metaDescription} />
      <meta
        name="image"
        content={`${site.siteMetadata.siteUrl}${socialShareImageLarge} `}
      />
      <meta name="author" content="stopthespread" />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      {cannonical && (
        <link
          rel="canonical"
          href={`${site.siteMetadata.siteUrl}${cannonical}`}
        />
      )}
      <link rel="apple-touch-icon" sizes="180x180" href={faviconTouch} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <meta property="og:locale" content={site.siteMetadata.ogLanguage} />
      <meta property="og:site_name" content="Stop The Spread" />
      <meta property="og:url" content="https://stopthespread.info" />
      <meta property="og:title" content={shareTitle} />
      <meta property="og:description" content={shareDescription} />
      <meta
        property="og:image"
        content={`${site.siteMetadata.siteUrl}${socialShareImageLarge} `}
      />
      <meta property="fb:app_id" content={site.siteMetadata.siteFBAppID} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="" />
      <meta name="twitter:title" content={shareTitle} />
      <meta name="twitter:url" content={site.siteMetadata.siteUrl} />
      <meta name="twitter:description" content={shareDescription} />
      <meta
        name="twitter:image"
        content={`${site.siteMetadata.siteUrl}${socialShareImageLarge} `}
      />
      <link rel="stylesheet" href="https://use.typekit.net/lgs7bsv.css" />
    </Helmet>
  )
}

export default SEO
