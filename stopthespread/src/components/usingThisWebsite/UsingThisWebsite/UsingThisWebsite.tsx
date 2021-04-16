import React from "react"
import * as styles from "./usingThisWebsite.module.scss"
import lastUpdatedString from "../../../utils/lastUpdated"

const UsingThisWebsite = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Using this website</h1>
      <p className={styles.sources}>
        All of the information on this website is based on{" "}
        <a
          href="https://www.who.int/"
          target="_blank"
          rel="noopener noreferrer"
        >
          World Health Organisation
        </a>{" "}
        (WHO),{" "}
        <a href="https://www.nhs.uk/" target="_blank" rel="noopener noreferrer">
          National Health Service
        </a>{" "}
        (NHS) and{" "}
        <a href="https://www.gov.uk/" target="_blank" rel="noopener noreferrer">
          national government guidance
        </a>
        , unless otherwise explicitly indicated.
      </p>
      <p className={styles.updatedAt}>
        The site was last updated on {lastUpdatedString}
      </p>
      <p className={styles.information}>
        The contents of this website such as text, graphics, images, and any
        other associated communications are for information only. The content is
        not intended to be a substitute for professional medical advice or
        treatment.
      </p>
      <p className={styles.information}>
        Always seek the advice of your GP or other qualified health provider
        with any questions you may have regarding a medical condition. Never
        disregard professional medical advice or delay in seeking it because of
        something you have read on this website. We do not warrant or guarantee
        the completeness or adequacy of the contents of this website. Your use
        of this website or materials accessible via links from this site is at
        your own risk.
      </p>
      <h6 className={styles.subHeading}>Limited License</h6>
      <p className={styles.information}>
        As a user of this site you are granted a nonexclusive, nontransferable,
        revocable, limited license to access and use the site in accordance with
        these Terms. We may terminate this license at any time for any reason.As
        a user of this site you are granted a nonexclusive, nontransferable,
        revocable, limited license to access and use the site in accordance with
        these Terms. We may terminate this license at any time for any reason.
      </p>
      <h6 className={styles.subHeading}>Disclaimer</h6>
      <p className={styles.information}>
        This site is provided on an "as is, as available" basis. We expressly
        disclaim all warranties, including the warranties of satisfactory
        quality, fitness for a particular purpose and non-infringement. We
        disclaim all responsibility for any loss, injury, claim, liability, or
        damage of any kind resulting from, arising out of or any way related to
        (a) any errors in or omissions from this site, the interactive areas,
        the content, and the postings including, but not limited to, technical
        inaccuracies and typographical errors, (b) third party communications,
        (c) any third party sites or content therein directly or indirectly
        accessed through links in this site, including but not limited to any
        errors in or omissions therefrom, (d) the unavailability of this site or
        any portion thereof, (e) your use of this site, or (f) your use of any
        equipment or software in connection with this site.
      </p>
      <h6 className={styles.subHeading}>Limitation of Liability</h6>
      <p className={styles.information}>
        We shall not be liable for any loss, injury, claim, liability, or damage
        of any kind resulting from your use of this site. We shall not be liable
        for any special, direct, indirect, incidental, punitive or consequential
        damages of any kind whatsoever (including, without limitation,
        attorneys' fees) in any way due to, resulting from, or arising in
        connection with the use of or inability to use this site. To the extent
        the foregoing limitation of liability is prohibited or fails of its
        essential purpose, our sole obligation to you for damages shall be
        limited to £1.00.
      </p>
      <h6 className={styles.subHeading}>Warranty</h6>
      <p className={styles.information}>
        We do not represent or warrant that the site will be error-free,
        accurate, up to date, reliable, free of viruses or other harmful
        components, or that defects will be corrected or that it will always be
        accessible. We may make improvements and/or changes to the site at any
        time.
      </p>
    </div>
  )
}

export default UsingThisWebsite
