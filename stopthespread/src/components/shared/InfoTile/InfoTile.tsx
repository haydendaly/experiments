import React from "react"
import styled from "styled-components"
import classnames from "classnames"
import * as styles from "./infoTile.module.scss"

const ContainerColored = styled.div`
  h4 {
    color: ${props => props.color};
  }
`

const ColoredBar = styled.div`
  background: ${props => props.color};
`

const InfoTile = ({
  icon,
  title,
  color,
  bottomBar,
  bottomText,
  warning,
  children,
}: {
  icon: string
  title: string
  color: string
  bottomBar: boolean
  bottomText?: JSX.Element | null
  warning?: boolean
  children: React.ReactNode
}) => {
  return (
    <ContainerColored
      color={color}
      className={classnames(styles.container, warning ? styles.warning : null)}
    >
      <div className={styles.iconContainer}>
        <img className={styles.icon} src={icon} alt="" />
      </div>
      <div className={styles.contentContainer}>
        <h4 className={styles.heading}>{title}</h4>
        {children}
        {bottomText && bottomText}
      </div>
      {bottomBar && <ColoredBar color={color} className={styles.coloredBar} />}
    </ContainerColored>
  )
}

export default InfoTile
