import styles from './Login.module.css';

export default function Login(): JSX.Element {
  return (
    <div className={styles.login}>
      <input placeholder="Username" className={styles.user} />
      <input placeholder="Password" className={styles.password} />
    </div>
  );
}
