import React from "react"
import * as styles from "./contact.module.scss"

import mailIcon from "../../../images/emojis/Mail2.png"

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h2 className={styles.heading}>Get in touch</h2>
        <img src={mailIcon} alt="" />
        <p className={styles.byline}>
          Email us at{" "}
          <a href="mailto:team@stopthespread.info">team@stopthespread.info</a>
        </p>
      </div>
    </div>
  )
}

export default Contact
