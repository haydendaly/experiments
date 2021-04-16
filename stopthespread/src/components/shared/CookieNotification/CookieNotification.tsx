import React from "react"
import { useCookies } from "react-cookie"
import * as styles from "./cookieNotification.module.scss"

const CookieNotification = () => {
  const [cookies, setCookie] = useCookies(["acceptedCookies"])

  const handleClick = () => {
    const weekFromNow = new Date()
    weekFromNow.setDate(weekFromNow.getDate() + 7)
    setCookie("acceptedCookies", true, { expires: weekFromNow, path: "/" })
  }

  return cookies["acceptedCookies"] ? null : (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <span className={styles.text}>
          This website uses cookies to analyse traffic anonymously
        </span>
        <button
          onClick={() => handleClick()}
          type="button"
          className={styles.accept}
        >
          Accept
        </button>
      </div>
    </div>
  )
}

export default CookieNotification
