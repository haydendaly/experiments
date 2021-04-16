import React, { useState } from "react"
import classnames from "classnames"
import * as styles from "../faq.module.scss"
import { FaqQuestion } from "../FAQ"

import expandSVG from "../assets/expand.svg"

const FAQQuestion = ({ question }: { question: FaqQuestion }) => {
  const [active, setActive] = useState<boolean>(false)
  return (
    <div
      className={classnames(
        styles.question,
        active ? styles.activeQuestion : ""
      )}
    >
      <div onClick={() => setActive(!active)} className={styles.headingWrapper}>
        <h6 className={styles.questionTitle}>{question.question}</h6>
        <img src={expandSVG} className={styles.plus} />
      </div>
      <div className={styles.questionWrapper}>
        {question.answerParagraphs}
        {question.source && (
          <p className={styles.source}>
            <b>Source:</b>{" "}
            <a
              href={question.source.linkTo}
              target="_blank"
              rel="noopener noreferrer"
            >
              {question.source.linkDisplay}
            </a>
          </p>
        )}
      </div>
    </div>
  )
}

export default FAQQuestion
