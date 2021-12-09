import React from 'react';
import styles from './Frontpage.module.css';
import Logo from '../../components/Logo/Logo';
import Login from '../../components/Login/Login';

export default function Frontpage(): JSX.Element {
  return (
    <div className={styles.page}>
      <Logo />
      <Login />
    </div>
  );
}
