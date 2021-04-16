/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"

import "normalize.css/normalize.css"
import "../scss/global.scss"

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default layout
