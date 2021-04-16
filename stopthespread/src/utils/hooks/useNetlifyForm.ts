import { useState, useEffect } from "react"

interface FormFields {
  [key: string]: string | boolean
}

const useNetlifyForm = (formFields: FormFields, submitted: boolean) => {
  const [formStatus, setFormStatus] = useState<
    "Unsubmitted" | "Submitting" | "Success" | "Failure"
  >("Unsubmitted")

  const encode = (data: FormFields) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  useEffect(() => {
    if (submitted) {
      setFormStatus("Submitting")
      fetch("/", {
        method: "post",
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: encode(formFields),
      })
        .then(() => setFormStatus("Success"))
        .catch(() => setFormStatus("Failure"))
    }
  }, [submitted])

  return formStatus
}

export default useNetlifyForm
