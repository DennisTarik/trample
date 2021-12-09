import React from 'react';
import styles from './Frontpage.module.css';
import Logo from '../../components/Logo/Logo';
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';
import Register from '../../components/Register/Register';

export default function Frontpage(): JSX.Element {
  return (
    <div className={styles.page}>
      <div className={styles.background} />
      <Logo />
      <Login />
      <Signup />
      <Register />
    </div>
  );
}
