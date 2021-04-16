import React, { useEffect } from "react"
import { Link } from "gatsby"
import { useState } from "react"
import * as styles from "./clickableTile.module.scss"
import classnames from "classnames"

const ClickableTile = ({
  link,
  icon,
  byline,
  heading,
  animationRight,
  external,
}: {
  link: string
  icon: string
  byline: string
  heading: string
  animationRight?: boolean
  external: boolean
}) => {
  const [activeAnimation, setActiveAnimation] = useState<boolean>(false)
  const [delayCompleted, setDelayCompleted] = useState<boolean>(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setDelayCompleted(true)
    }, 5000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (delayCompleted) {
        setActiveAnimation(!activeAnimation)
      }
    }, 2500)
    return () => {
      clearInterval(interval)
    }
  }, [activeAnimation, delayCompleted])

  return (
    <div
      className={classnames(
        styles.container,
        activeAnimation ? styles.activeAnimation : null,
        animationRight ? styles.animationRight : styles.animationLeft
      )}
    >
      <div className={styles.smallCircle}></div>
      <div className={styles.largeCircle}></div>
      {external ? (
        <a
          href={link}
          className={styles.contentContainer}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.icon} src={icon} alt="" />
          <h6 className={styles.byline}>{byline}</h6>
          <h4 className={styles.heading}>{heading}</h4>
        </a>
      ) : (
        <Link to={link} className={styles.contentContainer}>
          <img className={styles.icon} src={icon} alt="" />
          <h6 className={styles.byline}>{byline}</h6>
          <h4 className={styles.heading}>{heading}</h4>
        </Link>
      )}
    </div>
  )
}

export default ClickableTile
