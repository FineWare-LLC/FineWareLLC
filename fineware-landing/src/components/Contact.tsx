// src/components/Contact.tsx
import React from 'react';
import styles from './Contact.module.css';

/**
 * Contact - renders the contact form section.
 * @returns {JSX.Element}
 */
const Contact: React.FC = () => (
  <section className={styles.contact}>
    <h2 className={styles.contactTitle}>Let’s Connect!</h2>
    <p className={styles.contactSubtitle}>Contact us below to see what we can do for you.</p>
    <form className={styles.form}>
      <input type="text" placeholder="Name" className={styles.input} />
      <input type="email" placeholder="Email" className={styles.input} />
      <select className={styles.select}>
        <option>Category</option>
      </select>
      <textarea placeholder="Message" className={styles.textarea} />
      <button type="submit" className={styles.submitButton}>SEND</button>
    </form>
  </section>
);

export default Contact;