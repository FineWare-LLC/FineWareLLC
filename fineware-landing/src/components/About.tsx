// src/components/About.tsx
import React from 'react';
import styles from './About.module.css';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const featuresLeft: Feature[] = [
  { icon: '/images/icon-star.svg', title: 'Veteran‑Owned', description: 'Proudly built on discipline, innovation, and a commitment to service.' },
  { icon: '/images/icon-globe.svg', title: 'Woman‑Owned Leadership', description: 'Empowering innovation with a diverse and inclusive perspective.' },
  { icon: '/images/icon-gear.svg', title: 'Cutting‑Edge Technology', description: 'Stay ahead with innovative software designed to evolve with your needs.' },
];

const featuresRight: Feature[] = [
  { icon: '/images/icon-users.svg', title: 'Customer‑Centric Solutions', description: 'Tailored services that prioritize your goals and needs.' },
  { icon: '/images/icon-shield.svg', title: 'Proven Reliability', description: 'Tested and trusted by clients to deliver consistent and dependable results.' },
  { icon: '/images/icon-leaf.svg', title: 'Sustainable Practices', description: 'Promoting responsible development with sustainability in mind.' },
];

/**
 * About - showcases the key differentiators of FineWare.
 * @returns {JSX.Element}
 */
const About: React.FC = () => (
  <section className={styles.about}>
    <div className={styles.aboutContainer}>
      <div className={styles.aboutText}>
        <h2 className={styles.aboutTitle}>Why Choose FineWare?</h2>
        <p className={styles.aboutDesc}>Innovation with a commitment to service, reliability, and sustainability</p>
        <div className={styles.aboutList}>
          {featuresLeft.map((f) => (
            <div key={f.title} className={styles.aboutItem}>
              <img src={f.icon} alt="" className={styles.aboutIcon} />
              <div>
                <h3 className={styles.aboutItemTitle}>{f.title}</h3>
                <p className={styles.aboutItemDesc}>{f.description}</p>
              </div>
            </div>
          ))}
          {featuresRight.map((f) => (
            <div key={f.title} className={styles.aboutItem}>
              <img src={f.icon} alt="" className={styles.aboutIcon} />
              <div>
                <h3 className={styles.aboutItemTitle}>{f.title}</h3>
                <p className={styles.aboutItemDesc}>{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;