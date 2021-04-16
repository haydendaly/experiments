import React from "react"
import { Link } from "gatsby"
import * as styles from "./footer.module.scss"
import lastUpdatedString from "../../utils/lastUpdated"

import Twitter from "../../images/socialIcons/twitter.inline.svg"
import Instagram from "../../images/socialIcons/instagram.inline.svg"
import Facebook from "../../images/socialIcons/facebook.inline.svg"

const socials = [
  {
    icon: Twitter,
    link: "https://twitter.com/stopthespreadCV",
  },
  {
    icon: Facebook,
    link: "https://www.facebook.com/stopthespread.info",
  },
  {
    icon: Instagram,
    link: "https://www.instagram.com/stopthespread.info/",
  },
]

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socialsContainer}>
        {socials.map(social => {
          const Icon = social.icon
          return (
            <a
              key={social.link}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              <Icon />
            </a>
          )
        })}
      </div>
      <h4 className={styles.website}>stopthespread.info</h4>
      <Link to="/about" className={styles.link}>
        About this website
      </Link>
      <Link to="/contact" className={styles.link}>
        Get in touch
      </Link>
      <Link to="/privacy" className={styles.link}>
        Privacy Policy
      </Link>
      <Link to="/terms" className={styles.link}>
        Using this website
      </Link>
      <p className={styles.lastUpdated}>Last updated {lastUpdatedString}.</p>
    </div>
  )
}

export default Footer
