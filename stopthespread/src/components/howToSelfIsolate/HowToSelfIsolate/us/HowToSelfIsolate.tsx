import React from "react"
import classnames from "classnames"
import InfoTile from "../../../shared/InfoTile"
import * as styles from "../howToSelfIsolate.module.scss"
import styled from "styled-components"

import { Link } from "gatsby"

import house from "../../../../images/emojis/House2.png"
import arm from "../../../../images/emojis/Arm2.png"
import buddy from "../../../../images/emojis/Pair2.png"
import dontIcon from "../../../../images/emojis/DoNot1.png"
import doIcon from "../../../../images/emojis/Tick1.png"
import sadFace from "../../../../images/emojis/Sadface1.png"
import elderly from "../../../../images/emojis/Grandma1.png"
import soap from "../../../../images/emojis/Soap1.png"

const List = styled.ul`
  li::before {
    color: ${props => props.color};
  }
`

const tileContents = [
  {
    title: "1. Stay at home",
    icon: house,
    color: "#d6ba91",
  },
  {
    title: "2. Take care of yourself",
    icon: arm,
    color: "#f1b183",
  },
  {
    title: "3. Choose a buddy",
    icon: buddy,
    color: "#75a3c8",
  },
  {
    title: "4. Protect the vulnerable",
    icon: elderly,
    color: "#9dafcb",
  },
  {
    title: "5. Stop the spread",
    icon: soap,
    color: "#33b97d",
  },
]

const HowToSelfIsolate = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>How to self-isolate</h1>
      <h4 className={styles.byline}>
        Self-isolation when you're ill helps protect others in your community.
        This involves 5 things:
      </h4>
      <InfoTile
        key={tileContents[0].title}
        title={tileContents[0].title}
        icon={tileContents[0].icon}
        color={tileContents[0].color}
        bottomBar={true}
      >
        <ul className={styles.details}>
          <li className={styles.detail}>
            <span className={styles.detailText}>
              Everyone you live with should stay at home, too
            </span>
            <ul className={styles.subDetails}>
              <li className={styles.subDetail}>
                <img className={styles.icon} src={dontIcon} alt="" />
                <span className={styles.detailText}>
                  <b>DON'T</b> have visitors (if you have carers, inform them
                  before they arrive)
                </span>
              </li>
              <li className={styles.subDetail}>
                <img className={styles.icon} src={dontIcon} alt="" />
                <span className={styles.detailText}>
                  <b>DON'T</b> go to work or school
                </span>
              </li>
              <li className={styles.subDetail}>
                <img className={styles.icon} src={dontIcon} alt="" />
                <span className={styles.detailText}>
                  <b>DON'T</b> use public transport or taxis
                </span>
              </li>
            </ul>
          </li>
          <li className={styles.detail}>
            <img className={styles.icon} src={doIcon} alt="" />
            <span className={styles.detailText}>
              <b>DO</b> ask friends/family to drop off food, medicines, and
              anything else you need
            </span>
            <ul className={styles.subDetails}>
              <li className={styles.subDetail}>
                <img className={styles.icon} src={dontIcon} alt="" />
                <span className={styles.detailText}>
                  <b>DON'T</b> meet them when they drop things off outside your
                  home
                </span>
              </li>
            </ul>
          </li>
          <li className={styles.detail}>
            <img className={styles.icon} src={doIcon} alt="" />
            <span className={styles.detailText}>
              <b>DO</b> your best to protect the others in your household
            </span>
            <ul className={styles.subDetails}>
              <li className={styles.subDetail}>
                <img className={styles.icon} src={dontIcon} alt="" />
                <span className={styles.detailText}>
                  <b>DON'T</b> share towels
                </span>
              </li>
              <li className={styles.subDetail}>
                <img className={styles.icon} src={dontIcon} alt="" />
                <span className={styles.detailText}>
                  <b>DON'T</b> cook with others or be in the kitchen when others
                  are cooking
                </span>
              </li>
              <li className={styles.subDetail}>
                <img className={styles.icon} src={dontIcon} alt="" />
                <span className={styles.detailText}>
                  <b>DON'T</b> share cups or cutlery (if you use shared cooking
                  equipment, wash thoroughly with soap and dry completely with
                  your own tea towel)
                </span>
              </li>
            </ul>
          </li>
        </ul>
        <p className={styles.finalText}>
          Do your best to follow this advice. You can go outside to exercise. If
          you must leave your home, maintain at least 6ft from anyone else.
        </p>
        <p className={styles.warning}>
          <b>DO NOT</b> go to a GP, Pharmacy or Hospital
        </p>
      </InfoTile>
      <InfoTile
        key={tileContents[1].title}
        title={tileContents[1].title}
        icon={tileContents[1].icon}
        color={tileContents[1].color}
        bottomBar={true}
      >
        <List
          color={tileContents[1].color}
          className={styles.plainDetailsContainer}
        >
          <li className={styles.plainDetail}>Rest up - you need it</li>
          <li className={styles.plainDetail}>
            Drink enough water until your pee is pale
          </li>
          <li className={styles.plainDetail}>
            You can take paracetamol, but don't exceed the recommended dose
          </li>
          <li className={classnames(styles.plainDetail, styles.redHighlight)}>
            At this time, the WHO doesn't recommend avoiding ibuprofen or other
            NSAIDs (e.g. naproxen).
          </li>
          <li className={styles.plainDetail}>
            Use tissues only once and throw them away immediately
          </li>
          <li className={styles.plainDetail}>
            Be sure to eat - you can get delivery, but have it dropped outside
          </li>
        </List>
      </InfoTile>
      <InfoTile
        key={tileContents[2].title}
        title={tileContents[2].title}
        icon={tileContents[2].icon}
        color={tileContents[2].color}
        bottomBar={true}
      >
        <List className={styles.plainDetailsContainer}>
          <li className={styles.plainDetail}>
            Contact them today to say you're self-isolating
          </li>
          <li className={styles.plainDetail}>
            Stay in touch with them everyday
          </li>
          <li className={styles.plainDetail}>
            Your buddy should not be self-isolating or ill
          </li>
        </List>
      </InfoTile>
      <InfoTile
        key={tileContents[3].title}
        title={tileContents[3].title}
        icon={tileContents[3].icon}
        color={tileContents[3].color}
        bottomBar={true}
      >
        <p className={styles.plainDetail}>
          If you live with someone vulnerable (over 65, has other medical
          conditions, is pregnant), you should move them to a friend's or family
          member's home.
        </p>
        <p className={styles.plainDetail}>If you cannot move them:</p>
        <ul className={styles.details}>
          <li className={styles.detail}>
            <img className={styles.icon} src={doIcon} alt="" />
            <span className={styles.detailText}>
              <b>DO</b> keep at least 6ft from them as much as possible
            </span>
          </li>
          <li className={styles.detail}>
            <img className={styles.icon} src={doIcon} alt="" />
            <span className={styles.detailText}>
              <b>DO</b> have them use a separate bathroom and separate towels -
              if there's only one bathroom, always use the bathroom last and be
              sure to clean all surfaces you contact thoroughly
            </span>
          </li>
          <li className={styles.detail}>
            <img className={styles.icon} src={dontIcon} alt="" />
            <span className={styles.detailText}>
              <b>DON'T</b> share cups or cutlery - wash everything with a
              dishwasher, or with soap and warm water, and dry thoroughly with
              separate tea towels
            </span>
          </li>
          <li className={styles.detail}>
            <img className={styles.icon} src={dontIcon} alt="" />
            <span className={styles.detailText}>
              <b>DON'T</b> eat with them - have them eat in their room
            </span>
          </li>
        </ul>
        <p className={styles.finalText}>
          If you go outside while you're self-isolating, maintain distant from
          anyone that may be vulnerable.
        </p>
      </InfoTile>
      <InfoTile
        key={tileContents[4].title}
        title={tileContents[4].title}
        icon={tileContents[4].icon}
        color={tileContents[4].color}
        bottomBar={true}
      >
        <List className={styles.plainDetailsContainer}>
          <li className={styles.plainDetail}>
            Wash your hands with soap regularly
          </li>
          <li className={styles.plainDetail}>Don't touch your face</li>
          <li className={styles.plainDetail}>
            Clean surfaces you touch regularly with a disinfectant
          </li>
          <li className={styles.plainDetail}>
            Use tissues only once and throw any away immediately
          </li>
        </List>
      </InfoTile>
      <div className={styles.contactNHS}>
        <h4 className={styles.contactHeading}>Ending self-isolation</h4>
        <p className={styles.plainDetail}>If you live alone</p>
        <ul className={styles.contactDetails}>
          <li className={styles.contactDetail}>
            you can end your isolation after 7 days if you have no temperature
            (you may still have a cough - that's ok!)
          </li>
          <li className={classnames(styles.contactDetail, styles.redHighlight)}>
            if you still have a temperature, you should remain isolated until
            your temperature is gone
          </li>
        </ul>
        <p className={styles.plainDetail}>
          If you live with others - everyone at home must start self-isolation
        </p>
        <ul className={styles.contactDetails}>
          <li className={styles.contactDetail}>
            You specifically must self-isolate for 7 days
          </li>
          <li className={styles.contactDetail}>
            If anyone else at home gets symptoms within 14 days, they must
            self-isolate for 7 days. For example, if they got symptoms on day 3,
            they can stop self-isolation on day 10. If they got symptoms on day
            13, they can only stop self-isolation only on day 20.
          </li>
          <li className={styles.contactDetail}>
            If after 14 days someone at home does not have symptoms, they can
            stop self-isolation.
          </li>
          <li className={classnames(styles.contactDetail, styles.redHighlight)}>
            If anyone still has a temperature at the end of their period of
            self-isolation, they must keep self isolating until their
            temperature has gone
          </li>
        </ul>
      </div>
      <div className={styles.contactNHS}>
        <h4 className={styles.contactHeading}>You should call 911 if</h4>
        <ul className={styles.contactDetails}>
          <li className={styles.contactDetail}>you feel worse</li>
          <li className={styles.contactDetail}>
            you can't cope with your symptoms
          </li>
          <li className={styles.contactDetail}>
            you still have a temperature after 7 days
          </li>
        </ul>
        <p className={styles.isolationInformation}>
          Contact the CDC{" "}
          <a
            href="https://www.cdc.gov/contact/index.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </p>
        <Link to="/us/I-am-struggling" className={styles.linkContainer}>
          <img className={styles.linkIcon} src={sadFace} alt="" />
          <span className={styles.linkTitle}>
            Struggling with self-isolation?
          </span>
        </Link>
      </div>
    </div>
  )
}

export default HowToSelfIsolate
