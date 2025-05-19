// src/components/Services.tsx
import React from 'react';
import styles from './Services.module.css';

interface ServiceCardProps {
  icon: string;
  title: string;
  items: { label: string; text: string }[];
}

/**
 * ServiceCard - single card for service offerings.
 * @param {ServiceCardProps} props
 * @returns {JSX.Element}
 */
const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, items }) => (
  <div className={styles.card}>
    <div className={styles.cardHeader}>
      <img src={icon} alt="" className={styles.cardHeaderIcon} />
      <h3>{title}</h3>
    </div>
    <ul className={styles.cardList}>
      {items.map((it) => (
        <li key={it.label} className={styles.cardListItem}>
          <span className={styles.cardListItemTitle}>{it.label}:</span> {it.text}
        </li>
      ))}
    </ul>
  </div>
);

// data
const servicesData: ServiceCardProps[] = [
  {
    icon: '/images/icon-palette.svg',
    title: 'Designs',
    items: [
      { label: 'UX/UI Design', text: 'Intuitive and visually stunning interfaces.' },
      { label: 'Graphic Design', text: 'Designing marketing materials like flyers, brochures, and social media graphics.' },
      { label: 'Prototyping', text: 'Developing wireframes and clickable prototypes for web and mobile projects.' },
    ],
  },
  {
    icon: '/images/icon-browser.svg',
    title: 'Websites',
    items: [
      { label: 'Landing Page Design', text: 'Optimized single-page websites for campaigns or events.' },
      { label: 'Web Accessibility Audits', text: 'Ensuring compliance with ADA standards.' },
      { label: 'Blog Development', text: 'Designing blogs optimized for SEO and user engagement.' },
    ],
  },
  {
    icon: '/images/icon-robot.svg',
    title: 'Automation',
    items: [
      { label: 'Chatbots', text: 'Intelligent bots for customer support or lead generation.' },
      { label: 'Document Automation', text: 'Streamlining repetitive data entry and processing tasks.' },
      { label: 'Smart Workflow Tools', text: 'Automating email campaigns, task assignments, and reminders.' },
    ],
  },
];

/**
 * Services - section that renders all service cards.
 * @returns {JSX.Element}
 */
const Services: React.FC = () => (
  <section className={styles.services}>
    <div className={styles.servicesHeader}>
      <h2>Services We Offer</h2>
      <p>FineWare offers the many services below and more!</p>
    </div>
    <div className={styles.servicesContainer}>
      {servicesData.map((svc) => (
        <ServiceCard key={svc.title} {...svc} />
      ))}
    </div>
  </section>
);

export default Services;