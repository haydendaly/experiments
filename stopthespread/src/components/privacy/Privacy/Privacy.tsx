import React from "react"
import * as styles from "./privacy.module.scss"

const Privacy = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Privacy Policy</h1>
      <p className={styles.information}>
        This privacy policy will explain how this website uses the personal data
        it collects from you when you use it.
      </p>
      <h6 className={styles.subHeading}>Topics</h6>

      <ul className={styles.bulletPoints}>
        <li className={styles.bulletPoint}>What data do we collect?</li>
        <li className={styles.bulletPoint}>How do we collect your data?</li>
        <li className={styles.bulletPoint}>How will we use your data?</li>
        <li className={styles.bulletPoint}>How do we store your data?</li>
        <li className={styles.bulletPoint}>Marketing</li>
        <li className={styles.bulletPoint}>
          What are your data protection rights?
        </li>
        <li className={styles.bulletPoint}>What are cookies?</li>
        <li className={styles.bulletPoint}>How do we use cookies?</li>
        <li className={styles.bulletPoint}>What types of cookies do we use?</li>
        <li className={styles.bulletPoint}>How to manage your cookies</li>
        <li className={styles.bulletPoint}>
          Privacy policies of other websites
        </li>
        <li className={styles.bulletPoint}>Changes to our privacy policy</li>
        <li className={styles.bulletPoint}>How to contact us</li>
        <li className={styles.bulletPoint}>
          How to contact the appropriate authorities
        </li>
      </ul>
      <h6 className={styles.subHeading}>What data do we collect</h6>
      <p className={styles.information}>
        This website collects the following data:
      </p>
      <ul className={styles.bulletPoints}>
        <li className={styles.bulletPoint}>Anonymous personal information</li>
      </ul>
      <h6 className={styles.subHeading}>How do we collect your data?</h6>
      <p className={styles.information}>
        You directly provide this website with most of the data we collect. We
        collect data and process data when you:
      </p>
      <ul className={styles.bulletPoints}>
        <li className={styles.bulletPoint}>
          Register for communications and updates.
        </li>
        <li className={styles.bulletPoint}>
          Voluntarily complete a customer survey or provide feedback on any of
          our pages or via email.
        </li>
        <li className={styles.bulletPoint}>
          Use or view our website via your browser’s cookies.
        </li>
      </ul>
      <h6 className={styles.subHeading}>How will we use your data?</h6>
      <p className={styles.information}>
        This website collects your data so that we can:
      </p>
      <ul className={styles.bulletPoints}>
        <li className={styles.bulletPoint}>
          Understand how people use this website
        </li>
        <li className={styles.bulletPoint}>
          Email you with information about other information, products and
          services we think you might like.
        </li>
        <p className={styles.information}>
          If you agree, we may share your data with our partners so that they
          may offer you information, products or services.
        </p>
      </ul>
      <h6 className={styles.subHeading}>How do we store your data?</h6>
      <p className={styles.information}>
        We securely store your data with Netlify. More information can be found
        at the Netlify website{" "}
        <a
          href="https://www.netlify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
      <p className={styles.information}>
        We will keep your data for up to 3 years. Once this time period has
        expired, we will delete your data.
      </p>
      <h6 className={styles.subHeading}>Marketing</h6>
      <p className={styles.information}>
        We may like to send you information about information, products and
        services of ours that we think you might like, as well as those of our
        partners.
      </p>
      <p className={styles.information}>
        If you have agreed to receive marketing, you may always opt out at a
        later date.
      </p>
      <p className={styles.information}>
        You have the right at any time to stop us from contacting you for
        marketing purposes or giving your data from any other organisation.
      </p>
      <p className={styles.information}>
        If you no longer wish to be contacted for marketing purposes, please
        email us at team@stopthespread.info.
      </p>
      <h6 className={styles.subHeading}>
        What are your data protection rights?
      </h6>
      <p className={styles.information}>
        We would like to make sure you are fully aware of all of your data
        protection rights. Every user is entitled to the following:
      </p>
      <ul className={styles.bulletPoints}>
        <li className={styles.bulletPoint}>
          The right to access – You have the right to request copies of your
          personal data. We may charge you a small fee for this service.
        </li>
        <li className={styles.bulletPoint}>
          The right to rectification – You have the right to request that we
          correct any information you believe is inaccurate. You also have the
          right to request we complete the information you believe is
          incomplete.
        </li>
        <li className={styles.bulletPoint}>
          The right to erasure – You have the right to request that we erase
          your personal data, under certain conditions.
        </li>
        <li className={styles.bulletPoint}>
          The right to restrict processing – You have the right to request that
          we restrict the processing of your personal data, under certain
          conditions.
        </li>
        <li className={styles.bulletPoint}>
          The right to object to processing – You have the right to object to
          our processing of your personal data, under certain conditions.
        </li>
        <li className={styles.bulletPoint}>
          The right to data portability – You have the right to request that we
          transfer the data that we have collected to another organization, or
          directly to you, under certain conditions.
        </li>
      </ul>
      <p className={styles.information}>
        If you make a request, we have one month to respond to you. If you would
        like to exercise any of these rights, please contact us at our email:
        team@stopthespread.info.
      </p>
      <h6 className={styles.subHeading}>Cookies</h6>
      <p className={styles.information}>
        Cookies are text files placed on your computer to collect standard
        Internet log information and visitor behavior information. When you
        visit our websites, we may collect information from you automatically
        through cookies or similar technology
      </p>
      <p className={styles.information}>
        For further information, visit{" "}
        <a
          href="https://www.allaboutcookies.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          allaboutcookies.org
        </a>
        .
      </p>
      <h6 className={styles.subHeading}>How do we use cookies?</h6>
      <p className={styles.information}>
        We cookies in a range of ways to improve your experience on our website,
        including:
      </p>
      <ul className={styles.bulletPoints}>
        <li className={styles.bulletPoint}>
          Understanding how you use our website
        </li>
      </ul>
      <h6 className={styles.subHeading}>What types of cookies do we use?</h6>
      <p className={styles.information}>
        There are a number of different types of cookies, however, our website
        uses:
      </p>
      <ul className={styles.bulletPoints}>
        <li className={styles.bulletPoint}>
          Functionality – We these cookies so that we recognize you on our
          website and remember your previously selected preferences. These could
          include what language you prefer and location you are in. A mix of
          first-party and third-party cookies are used.
        </li>
      </ul>
      <h6 className={styles.subHeading}>How to manage cookies</h6>
      <p className={styles.information}>
        You can set your browser not to accept cookies, and the above website
        tells you how to remove cookies from your browser. However, in a few
        cases, some of our website features may not function as a result.
      </p>
      <h6 className={styles.subHeading}>Privacy policies of other websites</h6>
      <p className={styles.information}>
        The website contains links to other websites. Our privacy policy applies
        only to our website, so if you click on a link to another website, you
        should read their privacy policy.
      </p>
      <h6 className={styles.subHeading}>Changes to our privacy policy</h6>
      <p className={styles.information}>
        We keep our privacy policy under regular review and places any updates
        on this web page. This privacy policy was last updated on 16 March 2020.
      </p>
      <h6 className={styles.subHeading}>How to contact us</h6>
      <p className={styles.information}>
        If you have any questions about our privacy policy, the data we hold on
        you, or you would like to exercise one of your data protection rights,
        please do not hesitate to contact us. Email us at:
        team@stopthespread.info
      </p>
      <h6 className={styles.subHeading}>
        How to contact the appropriate authority
      </h6>
      <p className={styles.information}>
        Should you wish to report a complaint or if you feel that we have not
        addressed your concern in a satisfactory manner, you may contact the
        Information Commissioner’s Office.
      </p>
    </div>
  )
}

export default Privacy
