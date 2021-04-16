import React, { useState } from "react"
import * as styles from "./form.module.scss"
import classnames from "classnames"
import { Link } from "gatsby"
import useNetlifyForm from "../../../utils/hooks/useNetlifyForm"

import backIcon from "./back.svg"
import money from "../../../images/emojis/money2.png"
import donot from "../../../images/emojis/DoNot2.png"
import attention from "../../../images/emojis/attention2.png"
import pin from "../../../images/emojis/pin2.png"
import sick from "../../../images/emojis/Sick2.png"
import plane from "../../../images/emojis/Plane2.png"
import stats from "../../../images/emojis/stats2.png"
import drama from "../../../images/emojis/drama2.png"

const Form = () => {
  const [topics, setTopics] = useState([])
  const [active, setActive] = useState(false)
  const [contactType, setContactType] = useState<"sms" | "whats-app">("sms")
  const [contactNumber, setContactNumber] = useState<string>("")
  const [country, setCountry] = useState<string>("USA")
  const [firstFocusCapture, setFirstFocusCapture] = useState<boolean>(true)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const formStatus = useNetlifyForm(
    {
      "form-name": "contact-number",
      "contact-number": contactNumber,
      "whats-app": contactType === "whats-app",
      sms: contactType === "sms",
      country: country,
      topicIds: topics.join(),
    },
    submitted
  )

  const handleTopicClick = (event, topicId) => {
    event.preventDefault()
    const tempTopics = new Set(topics)
    if (tempTopics.has(topicId)) {
      tempTopics.delete(topicId)
      setTopics([...tempTopics])
    } else {
      tempTopics.add(topicId)
      setTopics([...tempTopics])
    }
  }

  const handleContactTypeChange = (contactType: string) => {
    if (contactType === "sms") {
      return setContactType("sms")
    }
    return setContactType("whats-app")
  }

  const handleFocusCapture = () => {
    if (firstFocusCapture) {
      // setContactNumber("+1")
      setFirstFocusCapture(false)
    }
  }

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const renderSubmitButton = () => {
    switch (formStatus) {
      case "Unsubmitted":
        return (
          <button className={classnames(styles.submit, styles.unsubmitted)}>
            Subscribe
          </button>
        )
      case "Submitting":
        return (
          <button
            disabled={true}
            className={classnames(styles.submit, styles.submitting)}
          >
            Submitting...
          </button>
        )
      case "Success":
        return (
          <button
            disabled={true}
            className={classnames(styles.submit, styles.success)}
          >
            Success!
          </button>
        )
      case "Failure":
        return (
          <button
            disabled={true}
            className={classnames(styles.submit, styles.failure)}
          >
            That did not seem to work, please try again!
          </button>
        )
    }
  }

  return (
    <>
      <div className={styles.activateContainer}>
        <h4
          onClick={() => (active ? setActive(false) : setActive(true))}
          className={styles.title}
        >
          Notify me about
        </h4>
      </div>
      <div>
        {/* className={classnames(styles.wrapper, active ? styles.active : null)} */}
        <div className={styles.innerContainer}>
          <div className={styles.topicsContainer}>
            <div
              className={classnames(
                styles.topicContainer,
                topics.includes(1) ? styles.enabledTopicContainer : null
              )}
              onClick={event => handleTopicClick(event, 1)}
            >
              <img className={styles.icon} src={money} />
              Financial Aid
            </div>
            <div
              className={classnames(
                styles.topicContainer,
                topics.includes(2) ? styles.enabledTopicContainer : null
              )}
              onClick={event => handleTopicClick(event, 2)}
            >
              <img className={styles.icon} src={plane} />
              Travel Updates
            </div>
            <div
              className={classnames(
                styles.topicContainer,
                topics.includes(3) ? styles.enabledTopicContainer : null
              )}
              onClick={event => handleTopicClick(event, 3)}
            >
              <img className={styles.icon} src={donot} />
              New Restrictions
            </div>
            <div
              className={classnames(
                styles.topicContainer,
                topics.includes(4) ? styles.enabledTopicContainer : null
              )}
              onClick={event => handleTopicClick(event, 4)}
            >
              <img className={styles.icon} src={attention} />
              New Advice
            </div>
            <div
              className={classnames(
                styles.topicContainer,
                topics.includes(5) ? styles.enabledTopicContainer : null
              )}
              onClick={event => handleTopicClick(event, 5)}
            >
              <img className={styles.icon} src={stats} />
              Latest Stats
            </div>
            <div
              className={classnames(
                styles.topicContainer,
                topics.includes(6) ? styles.enabledTopicContainer : null
              )}
              onClick={event => handleTopicClick(event, 6)}
            >
              <img className={styles.icon} src={sick} />
              Latest Symptons
            </div>
            <div
              className={classnames(
                styles.topicContainer,
                topics.includes(7) ? styles.enabledTopicContainer : null
              )}
              onClick={event => handleTopicClick(event, 7)}
            >
              <img className={styles.icon} src={drama} />
              Events Cancelled
            </div>
            <div
              className={classnames(
                styles.topicContainer,
                topics.includes(8) ? styles.enabledTopicContainer : null
              )}
              onClick={event => handleTopicClick(event, 8)}
            >
              <img className={styles.icon} src={pin} />
              My Region
            </div>
          </div>
          <form
            onSubmit={event => handleFormSubmit(event)}
            name="contact-number"
            method="post"
            data-netlify="true"
            className="styles.submissionContainer"
          >
            <div className={styles.phoneNumberContainer}>
              <input
                required={true}
                id="contact-number"
                name="contact-number"
                type="tel"
                className={styles.contactNumber}
                value={contactNumber}
                placeholder={"Phone Number"}
                onChange={event => setContactNumber(event.target.value)}
                onFocus={() => handleFocusCapture()}
              />
            </div>
            <div className={styles.submitContainer}>{renderSubmitButton()}</div>
            <div className={styles.privacyContainer}>
              <p>
                By clicking submit, you are agreeing to our{" "}
                <Link to="/privacy">Privacy Policy</Link>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form
