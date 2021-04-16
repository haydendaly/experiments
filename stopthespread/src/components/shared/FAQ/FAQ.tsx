import * as React from "react"
import * as styles from "./faq.module.scss"
import FAQQuestion from "./FAQQuestion"

export interface FaqQuestion {
  question: string
  answerParagraphs: JSX.Element[]
  source?: {
    linkTo: string
    linkDisplay: string
  }
}

const FAQ = ({
  title,
  faqContent,
}: {
  title: string
  faqContent: FaqQuestion[]
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.questionsContainer}>
          {faqContent.map(question => (
            <FAQQuestion key={question.question} question={question} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ
