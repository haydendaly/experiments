import React, { useState } from "react"
import { Link } from "gatsby"
import { Node } from "binstree"
import classnames from "classnames"

import * as styles from "../questions.module.scss"

import clock from "../../../../images/emojis/Timer2.png"
import party from "../../../../images/emojis/Party2.png"
import stopHand from "../../../../images/emojis/Stop2.png"
import stopHandSmall from "../../../../images/emojis/Stop1.png"
import phone from "../../../../images/emojis/Telephone2.png"
import house from "../../../../images/emojis/House1.png"
import phoneIcon from "../phone.svg"

interface Question {
  trackerContent: {
    icon: string
    title: string
    byline: string
  }
  showWarning: boolean
  tsxContent: JSX.Element
}

const tracker = ({
  icon,
  title,
  byline,
}: {
  icon: string
  title: string
  byline: string
}) => (
  <div className={styles.trackerContainer}>
    <div className={styles.innerTrackerContainer}>
      <img className={styles.trackerIcon} src={icon} alt="" />
      <div className={styles.trackerTextContainer}>
        <p className={styles.trackerTitle}>{title}</p>
        <p className={styles.trackerByline}>{byline}</p>
      </div>
    </div>
  </div>
)

const questionsContent = [
  {
    trackerContent: {
      icon: clock,
      title: "Quick Quiz",
      byline: "(3 Questions max)",
    },
    showWarning: true,
    tsxContent: (
      <div className={classnames(styles.questionWrapper, styles.card)}>
        <div className={styles.question}>
          <p className={styles.content}>
            Is it hot to touch your chest or back?
          </p>
          <p className={styles.subContent}>(this could mean a temperature)</p>
          <p className={styles.break}>OR</p>
          <p className={styles.content}>
            Have you started coughing repeatedly?
          </p>
        </div>
      </div>
    ),
  },
  {
    trackerContent: {
      icon: clock,
      title: "Quick Quiz",
      byline: "(3 Questions max)",
    },
    showWarning: true,
    tsxContent: (
      <div className={classnames(styles.questionWrapper, styles.card)}>
        <div className={styles.question}>
          <p className={styles.content}>
            Can you do your usual daily activities?
          </p>
          <p className={styles.subContent}>
            (e.g. watch tv, use your phone, get out of bed)
          </p>
        </div>
      </div>
    ),
  },
  {
    trackerContent: {
      icon: clock,
      title: "Quick Quiz",
      byline: "(3 Questions max)",
    },
    showWarning: true,
    tsxContent: (
      <div className={classnames(styles.questionWrapper, styles.card)}>
        <div className={styles.question}>
          <p className={styles.content}>Do you live alone?</p>
        </div>
      </div>
    ),
  },
  {
    trackerContent: {
      icon: party,
      title: "Results",
      byline: "This is what you should do now",
    },
    showWarning: false,
    tsxContent: (
      <div className={styles.result}>
        <p className={styles.content}>
          You probably do not have symptoms of coronavirus
        </p>
        <ul className={styles.listContainer}>
          <li className={styles.listItem}>
            If you feel ill, you might have something else - you can find out
            more using{" "}
            <a
              rel="noopener noreferrer"
              href="https://111.nhs.uk/"
              target="_blank"
            >
              NHS 111
            </a>
          </li>
        </ul>
        <Link to="/how-you-can-help" className={styles.resultLink}>
          <img className={styles.resultLinkIcon} src={stopHandSmall} alt="" />
          <span className={styles.resultLinkText}>
            Do your part to stop the spread
          </span>
        </Link>
      </div>
    ),
  },
  {
    trackerContent: {
      icon: stopHand,
      title: "Results",
      byline: "This is what you should do now",
    },
    showWarning: false,

    tsxContent: (
      <div className={styles.result}>
        <p className={styles.content}>
          Self-isolate for 7 days (even if you have mild symptoms)
        </p>
        <ul className={styles.listContainer}>
          <li className={styles.listItem}>
            If you are on public transport, go home immediately and stay 2
            metres away from everyone
          </li>
          <li className={styles.listItem}>
            According to NHS guidance, you will currently not be tested if
            you're staying at home
          </li>
        </ul>
        <p className={styles.content}>
          If you still have a temperature after 7 days, you should stay at home
          and check your symptoms{" "}
          <a
            href="https://111.nhs.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </p>
        <Link to="/how-to-self-isolate" className={styles.resultLink}>
          <img className={styles.resultLinkIcon} src={house} alt="" />
          <span className={styles.resultLinkText}>
            Learn how to self-isolate
          </span>
        </Link>
      </div>
    ),
  },
  {
    trackerContent: {
      icon: stopHand,
      title: "Results",
      byline: "This is what you should do now",
    },
    showWarning: false,

    tsxContent: (
      <div className={styles.result}>
        <p className={styles.content}>
          Everyone in your home should start self-isolation according to the
          following rules. Mark today as day 1.
        </p>
        <ul className={styles.listContainer}>
          <li className={styles.listItem}>
            You specifically must self-isolate for 7 days. You can stop
            self-isolation on day 8.
          </li>
          <li className={styles.listItem}>
            If anyone else at home gets symptoms within 14 days, they must
            self-isolate for 7 days. For example, if they got symptoms on day 3,
            they can stop self-isolation on day 10. If they got symptoms on day
            13, they can only stop self-isolation only on day 20.
          </li>
          <li className={styles.listItem}>
            If after 14 days someone at home does not have symptoms, they can
            stop self-isolation - this would be day 15.
          </li>
          <li className={classnames(styles.listItem, styles.redHighlight)}>
            If anyone still has a temperature at the end of their period of
            self-isolation, they must keep self isolating until their
            temperature has gone
          </li>
          <li className={styles.listItem}>
            according to NHS guidance, you will currently not be tested if
            you're staying at home
          </li>
        </ul>
        <p className={styles.content}>
          If anyone at home is either over 70 or has other health conditions:
        </p>
        <ul className={styles.listContainer}>
          <li className={styles.listItem}>
            move them out of your home to a friend's or other family member's
            place for the entire period of isolation
          </li>
          <li className={styles.listItem}>
            if you cannot move them out of your home, stay away from them as
            much as possible
          </li>
        </ul>
        <Link to="/how-to-self-isolate" className={styles.resultLink}>
          <img className={styles.resultLinkIcon} src={house} alt="" />
          <span className={styles.resultLinkText}>
            Here's how to self-isolate
          </span>
        </Link>
      </div>
    ),
  },
  {
    trackerContent: {
      icon: phone,
      title: "Results",
      byline: "This is what you should do now",
    },
    showWarning: false,

    tsxContent: (
      <div className={styles.result}>
        <p className={styles.content}>
          You should <u>call NHS 111</u> now
        </p>
        <ul className={styles.listContainer}>
          <li className={styles.listItem}>
            Don&apos;t hang up - you will speak to a nurse but it may take time
          </li>
          <li className={styles.listItem}>
            When they answer tell them you are calling about Coronavirus
          </li>
          <li className={styles.listItem}>
            Stay away from others until you have spoken to 111
          </li>
        </ul>
        <a href="tel:111" className={styles.resultCall}>
          <img className={styles.resultLinkIcon} src={phoneIcon} alt="" />
          <span className={styles.resultLinkText}>tap to call 111 now</span>
        </a>
      </div>
    ),
  },
]

const Questions = () => {
  // Setup of binary tree, left path is "Yes" answer and right is "No"
  const node = new Node(0, questionsContent[0])
  node.left = new Node(-1, questionsContent[1])
  node.right = new Node(1, questionsContent[3])
  node.left.left = new Node(-2, questionsContent[2])
  node.left.right = new Node(2, questionsContent[6])
  node.left.left.left = new Node(-3, questionsContent[4])
  node.left.left.right = new Node(-1, questionsContent[5])

  const [questionNumber, setQuestionNumber] = useState<number>(1)
  const [activeNode, setActiveNode] = useState(node)

  const handleAnswerClick = (yesClick: boolean) => {
    setTimeout(() => {
      setQuestionNumber(questionNumber + 1)
      if (yesClick && activeNode.left) {
        return setActiveNode(activeNode.left)
      }
      if (activeNode.right) {
        return setActiveNode(activeNode.right)
      }
    }, 200)
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {tracker(activeNode.value.trackerContent)}
        {activeNode.value.showWarning && (
          <div className={styles.warningContainer}>
            <p className={styles.warningText}>
              <b>DO NOT</b> go to a GP, Pharmacy or Hospital
            </p>
          </div>
        )}
        <div className={styles.questionContainer}>
          {activeNode.value.tsxContent}
          {activeNode.isFull() && (
            <div className={styles.answerContainer}>
              <button
                onClick={() => handleAnswerClick(true)}
                className={classnames(styles.answerButton, styles.yesButton)}
              >
                Yes
              </button>
              <button
                onClick={() => handleAnswerClick(false)}
                className={classnames(styles.answerButton, styles.noButton)}
              >
                No
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Questions
