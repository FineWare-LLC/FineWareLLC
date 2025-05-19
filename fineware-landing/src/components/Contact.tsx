/**
 * Contact - renders the contact form section and handles form submission via EmailJS.
 *
 * Integrates with EmailJS to send emails without a backend. Replace `YOUR_TEMPLATE_ID`
 * with the actual template ID configured in your EmailJS dashboard.
 *
 * @returns {JSX.Element} The rendered contact form section.
 */
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './Contact.module.css';

const SERVICE_ID = 'service_h6caqeg';
const TEMPLATE_ID = 'template_gefs0qa';
const PUBLIC_KEY = '8KfrhMTx_iWm0N394';

const Contact: React.FC = () => {
  // Reference to the form DOM node
  const formRef = useRef<HTMLFormElement>(null);

  // Local state for submission feedback
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  /**
   * handleSubmit - called when the form is submitted.
   * Prevents default form submission and sends form data via EmailJS.
   * Provides feedback on success or failure.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   * @returns {void}
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!formRef.current) {
      setStatusMessage('Form reference is unavailable.');
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log('EmailJS Success:', result.text);
          setStatusMessage('Thank you! Your message has been sent.');
          formRef.current?.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error.text);
          setStatusMessage('Oops! Something went wrong. Please try again later.');
        }
      );
  };

  return (
    <section className={styles.contact}>
      <h2 className={styles.contactTitle}>Let’s Connect!</h2>
      <p className={styles.contactSubtitle}>
        Contact us below to see what we can do for you.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className={styles.input}
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className={styles.input}
          required
        />

        <select name="category" className={styles.select} required>
          <option value="">Category</option>
          <option value="general">General Inquiry</option>
          <option value="support">Support</option>
          <option value="feedback">Feedback</option>
        </select>

        <textarea
          name="message"
          placeholder="Message"
          className={styles.textarea}
          required
        />

        <button type="submit" className={styles.submitButton}>
          SEND
        </button>
      </form>

      {statusMessage && (
        <p className={styles.statusMessage}>{statusMessage}</p>
      )}
    </section>
  );
};

export default Contact;
