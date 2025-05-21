// src/components/Hero.tsx
import React from 'react';
import styles from './Hero.module.css';

/**
 * Hero - main landing section with headline, subtitle, and graphic.
 * @returns {JSX.Element}
 */
const Hero: React.FC = () => (
  <section className={styles.hero}>
    <div className={styles.heroContent}>
      {/* Background glow for mobile */}
      <div className={styles.heroGlow}></div>

      {/* Headline and subtitle */}
      <div className={styles.heroTitleWrapper}>
        <h2 className={styles.heroTitle}>
          Innovative<br />Software Solutions
        </h2>
        <p className={styles.heroSubtitle}>
          Don’t let outdated practices hold you back.
        </p>
      </div>

      {/* Scroll button */}
      <button
        className={styles.heroButton}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Learn More
      </button>
    </div>

    {/* Image and image glow */}
    <div className={styles.heroImage}>
      <div className={styles.glow}></div>
      <img src="/images/cube.gif" alt="3D cube innovation illustration" />
    </div>
  </section>
);

export default Hero;
