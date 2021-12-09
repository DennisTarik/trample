import styles from './Profile.module.css';

export default function Profile(): JSX.Element {
  return (
    <div className={styles.profile}>
      <img
        src="src/assets/00ec6b1a19a8dd9dee3949d4f7b09c1b.jpg"
        alt="Profile picture"
        className={styles.picture}
      />
      <span className={styles.text}>Profile</span>
    </div>
  );
}
