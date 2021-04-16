import React from "react"
import * as styles from "./headingAndIcon.module.scss"

const HeadingAndIcon = ({
  heading,
  icon,
  paragraphs,
}: {
  heading: string
  icon: string
  paragraphs: JSX.Element[]
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{heading}</h1>
      <img className={styles.icon} src={icon} alt="" />
      {paragraphs.map(paragraph => paragraph)}
    </div>
  )
}

export default HeadingAndIcon
