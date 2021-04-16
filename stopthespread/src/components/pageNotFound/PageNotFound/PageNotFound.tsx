import React from "react"
import { Link } from "gatsby"
import * as styles from "./pageNotFound.module.scss"

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Page Not Found</h1>
      <p className={styles.byline}>
        Oh no! It looks like this page does not exist.{" "}
        <Link to="/">Back to home.</Link>
      </p>
    </div>
  )
}

export default PageNotFound
