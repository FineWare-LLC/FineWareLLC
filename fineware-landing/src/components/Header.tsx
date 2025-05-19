// src/components/Header.tsx
import React from 'react';
import styles from './Header.module.css';

/**
 * Header component renders the FineWare logo.
 * @returns {JSX.Element}
 */
const Header: React.FC = () => (
  <header className={styles.header}>
    <img className={styles.logo} src='/logo.png'/>
  </header>
);

export default Header;