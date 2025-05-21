/**
 * Contact - renders the contact form section and handles form submission via EmailJS.
 * Integrates with EmailJS to send emails without a backend.
 *
 * @returns {JSX.Element} The rendered contact form section.
 */
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './Contact.module.css';

const SERVICE_ID = 'service_h6caqeg';
const TEMPLATE_ID = 'template_9kuurrq';
const PUBLIC_KEY = '8KfrhMTx_iWm0N394';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

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
          setStatusMessage('Message sent successfully!');
          formRef.current?.reset();
          setTimeout(() => setStatusMessage(null), 4000);
        },
        (error) => {
          console.error('EmailJS Error:', error.text);
          setStatusMessage('Something went wrong. Please try again.');
          setTimeout(() => setStatusMessage(null), 4000);
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
        <div className={styles.emailChip}>{statusMessage}</div>
      )}
    </section>
  );
};

export default Contact;
