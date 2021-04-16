import React from "react"

import * as styles from "../updates.module.scss"

const Updates = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Latest updates for the UK</h1>
      {/* BEGIN UPDATES */}
      <h6 className={styles.subHeading}>
        <b>UK to close most major social establishments today</b> - 20 Mar 17:40
      </h6>
      <p className={styles.information}>
        The Prime Minister has ordered the closure of social establishments as
        soon as reasonably possible. This includes cafes, bars, restaurants,
        nightclubs, theatres, cinemas, gyms, and leisure centres. It has been
        said that these measures will be reviewed monthly.
      </p>
      <p className={styles.information}>
        Source: Prime Minister's Daily Update - 20 Mar 2020
      </p>
      <h6 className={styles.subHeading}>
        <b>UK schools to close for most pupils after Friday 20 Mar</b> - 18 Mar
        17:26
      </h6>
      <p className={styles.information}>
        UK schools will close after Friday 20 Mar 2020 for the vast majority of
        pupils until further notice. Some pupils will be able to attend schools,
        especially if they are the children of key workers (healthcare workers,
        delivery drivers, police, among others). Please contact your child's
        school for further details, including if you are eligible for free
        school meals.
      </p>
      <p className={styles.information}>
        If at home, children should not be around those who may be particularly
        vulnerable to disease: those over 70, with other medical conditions, or
        who are pregnant.
      </p>
      <p className={styles.information}>
        Source: Prime Minister's Daily Update - 18 Mar 2020
      </p>
      <h6 className={styles.subHeading}>
        <b>Daily Digest</b> - 17 March 20:00
      </h6>
      <p className={styles.information}>
        Today, there have been no changes to UK health guidance or public health
        policy. Future updates will be added as they become available.
      </p>
      <p className={styles.information}>
        We have updated our FAQs with the more recent UK guidelines on social
        distancing and will be adding more content specifically focussed on
        vulnerable populations (those with other medical conditions, over 70,
        are pregnant, or immunosuppressed).
      </p>
      <h6 className={styles.subHeading}>
        <b>FCO advises against all non-essential foreign travel</b> - 17 March
        12:47pm
      </h6>
      <p className={styles.information}>
        The UK Foreign and Commonwealth Office has advised against all
        non-essential foreign travel. This advice is for at least the next 30
        days (until 17 Apr), but may be re-evaluated over the coming days.
      </p>
      <p className={styles.information}>
        We at{" "}
        <a
          href="https://twitter.com/search?q=%23stopthespread"
          target="_blank"
          rel="noopener noreferrer"
        >
          #stopthespread
        </a>{" "}
        will keep you posted.
      </p>
      <h6 className={styles.subHeading}>
        <b>New self-isolation policy</b> - 16 March 18:20
      </h6>
      <p className={styles.information}>
        The UK government has updated it's self isolation policy. If you have
        symptoms and live with others, all members of your household should
        self-isolate for 14 days minimum. If you live with anyone over 65 or
        with other medical conditions, you should either move them to a friend's
        or family member's home, or, if you can't move them, stay away from them
        as much as possible. If you have symptoms and live alone, you should
        self-isolate for at least 7 days.
      </p>
      <p className={styles.information}>
        Think you might have symptoms? Find out{" "}
        <a
          href="https://111.nhs.uk/service/COVID-19/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
      </p>
      <h6 className={styles.subHeading}>
        <b>Social Distancing Adopted as UK Policy</b> - 16 March 18:20
      </h6>
      <p className={styles.information}>
        The Prime Minister and UK government adopted a nationwide policy of
        social distancing. This includes strictly minimising all unnecessary
        public contact and all unnecessary travel.
      </p>
      <h6 className={styles.subHeading}>
        <b>Stop the Spread Launches</b> - 16 March 18:00pm
      </h6>
      <p className={styles.information}>
        Our site goes live. We provide only information from the UK government,
        UK NHS, and the World Health Organisation.
      </p>
    </div>
  )
}

export default Updates
