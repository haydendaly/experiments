import React, { useState, useRef, useEffect } from "react"
import classnames from "classnames"
import * as styles from "./sharingMenu.module.scss"
import useOutsideClick from "../../../utils/hooks/useOutsideClick"

import linkIcon from "./assets/link.svg"
import facebookSvg from "./assets/facebook.svg"
import linkedInSvg from "./assets/linkedIn.svg"
import twitterSvg from "./assets/twitter.svg"
import close from "./assets/close.svg"
import linkCopied from "./assets/linkCopied.svg"

const socials = [
  {
    link:
      "https://www.facebook.com/sharer/sharer.php?u=https://stopthespread.info",
    icon: facebookSvg,
  },
  {
    link:
      "https://www.linkedin.com/shareArticle?url=https://stopthespread.info",
    icon: linkedInSvg,
  },
  {
    link: "https://twitter.com/intent/tweet?url=https://stopthespread.info",
    icon: twitterSvg,
  },
]

const SharingMenu = () => {
  const [copySuccess, setCopySuccess] = useState<boolean>(false)
  const [menuActive, setMenuActive] = useState<boolean>(false)
  const copyValueRef = useRef<HTMLInputElement>(null)

  const ref = useOutsideClick(() => {
    setMenuActive(false)
  })

  const copyToClipBoard = () => {
    setCopySuccess(true)
    if (copyValueRef && copyValueRef.current) {
      copyValueRef.current.select()
      document.execCommand("copy")
    }
  }

  useEffect(() => {
    let interval: number | null = null
    if (copySuccess) {
      interval = setInterval(() => {
        setCopySuccess(false)
      }, 2000)
    }
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [copySuccess])

  const handleSocialClick = (link: string) => {
    window.open(link, "_blank")
  }

  return (
    <div ref={ref} className={styles.container}>
      <button
        onClick={() => setMenuActive(!menuActive)}
        type="button"
        className={styles.menuButton}
      >
        {menuActive ? <img src={close} alt="" /> : "SHARE"}
      </button>
      {menuActive && (
        <div className={styles.sharingIcons}>
          {socials.map(social => (
            <div className={styles.iconConainer} key={social.link}>
              <img
                onClick={() => handleSocialClick(social.link)}
                src={social.icon}
                alt=""
                className={styles.icon}
              />
            </div>
          ))}
          <div className={styles.iconContainer}>
            <img
              src={linkIcon}
              onClick={() => copyToClipBoard()}
              className={classnames(styles.icon, styles.linkCopy)}
              alt=""
            />
            <div
              className={classnames(
                styles.linkCopiedNotification,
                copySuccess ? styles.copySuccessActive : null
              )}
            >
              <img src={linkCopied} alt="" />
              <span className={styles.linkCopiedText}>Link Copied</span>
            </div>
          </div>
          <input
            readOnly={true}
            value="https://stopthespread.info"
            ref={copyValueRef}
            className={styles.copyText}
          ></input>
        </div>
      )}
    </div>
  )
}

export default SharingMenu
