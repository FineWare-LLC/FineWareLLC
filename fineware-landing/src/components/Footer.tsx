// src/components/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

/**
 * Footer - site footer with links and social icons.
 * @returns {JSX.Element}
 */
const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.footerTop}>
      {/* Repeat for each section: Site Links, Legal, Resources, Support, Certifications */}
      {/* ... code omitted for brevity ... */}
    </div>
    <div className={styles.footerBottom}>
      <h1 className={styles.logo}>&lt; FINEWARE /&gt;</h1>
      <p>Copyright © 2024-2025 FineWare™ LLC. All rights reserved.</p>
      <div className={styles.socialIcons}>
        {/* icons for Facebook, Instagram, LinkedIn, PayPal, X */}
      </div>
    </div>
  </footer>
);

export default Footer;