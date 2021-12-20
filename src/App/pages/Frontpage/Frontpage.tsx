import React from 'react';
import styles from './Frontpage.module.css';
import Logo from '../../components/Logo/Logo';
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';
import Register from '../../components/Register/Register';
import { Link } from 'react-router-dom';

export default function Frontpage(): JSX.Element {
  return (
    <div className={styles.page}>
      <div className={styles.background} />
      <Logo />
      <Login />
      <Link className={styles.signup} to="/menu">
        <Signup />
      </Link>
      <Register />
    </div>
  );
}
