"use client";
import { useState } from "react";
import { dmSans } from "@/app/layout";
import { contactFormInputs } from "@/data/contactFormInputs";
import { sendEmail } from "@/utils/sendMail";
import {
  CONTACT_FORM_CLIENT_TEMPLATE_ID,
  CONTACT_FORM_USER_TEMPLATE_ID,
} from "@/constants";
import swal from "sweetalert";
import styles from "./ContactForm.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "@/utils/verifyCaptcha";
import { RECAPTCHA_SITE_KEY } from "@/constants";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  company: "",
  enquiry: "",
};

export default function ContactForm() {
  const [formInputData, setFormInputData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [isVerified, setIsverified] = useState(false);

  const handleCaptchaSubmission = async (token) => {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => {
        console.log("verified");
        setIsverified(true);
      })
      .catch(() => setIsverified(false));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    await sendEmail(CONTACT_FORM_USER_TEMPLATE_ID, formInputData);
    await sendEmail(CONTACT_FORM_CLIENT_TEMPLATE_ID, formInputData);
    setLoading(false);
    swal(
      "Submitted Successfully!",
      "Thank you for contacting us. We've successfully received your message and our team is reviewing it. We'll  get back to you shortly.",
      "success"
    );
    setFormInputData(initialState);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputData({ ...formInputData, [name]: value });
  };

  return (
    <form className={styles.contactFormContainer} onSubmit={handleSubmit}>
      <div className={styles.contactForm}>
        {contactFormInputs.map((input) => (
          <div key={input.id} className={styles.inputContainer}>
            <label htmlFor={input.id}>{input.field}</label>
            <input
              id={input.id}
              placeholder={input.placeholder ? input.placeholder : input.field}
              style={{ fontFamily: dmSans.className }}
              name={input.name}
              type={input.type}
              onChange={handleInputChange}
              value={formInputData[input.name]}
              required={input.isRequired}
            />
          </div>
        ))}
      </div>
      <div className={`${styles.inputContainer} ${styles.textareaContainer}`}>
        <label htmlFor='enquiry'>Share more about your project</label>
        <textarea
          id='enquiry'
          placeholder='Write your enquire here'
          name='enquiry'
          onChange={handleInputChange}
          value={formInputData.enquiry}
          required
        />
      </div>
      <ReCAPTCHA
        sitekey={RECAPTCHA_SITE_KEY}
        onChange={handleCaptchaSubmission}
        className={styles.captchaContainer}
      />
      <button
        className={`main-button ${styles.buttonContainer}`}
        style={{ cursor: loading ? "wait" : "pointer" }}
        aria-label='Contact Form Submit'
        disabled={!isVerified}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
