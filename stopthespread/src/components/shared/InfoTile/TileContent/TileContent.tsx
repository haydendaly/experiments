import React from "react"
import styled from "styled-components"
import styles from "./tileContent.module.scss"
import shortid from "shortid"
import classnames from "classnames"

const List = styled.ul`
  li::before {
    color: ${props => props.color};
  }
`

const TileContent = ({
  byline,
  details,
  color,
  warning,
}: {
  byline: string | null
  details: string[]
  color: string
  warning?: boolean
}) => (
  <div
    className={classnames(
      styles.innerContentContainer,
      warning ? styles.warning : null
    )}
  >
    {byline && <p className={styles.byline}>{byline}</p>}
    <List color={color} className={styles.details}>
      {details.map(detail => (
        <li key={shortid.generate()} className={styles.detail}>
          {detail}
        </li>
      ))}
    </List>
  </div>
)

export default TileContent
