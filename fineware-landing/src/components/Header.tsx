// src/components/Header.tsx
import React from 'react';
import styles from './Header.module.css';

/**
 * Header component renders the FineWare logo.
 * @returns {JSX.Element}
 */
const Header: React.FC = () => (
  <header className={styles.header}>
    <h1 className={styles.logo}>&lt; FINEWARE /&gt;</h1>
  </header>
);

export default Header;