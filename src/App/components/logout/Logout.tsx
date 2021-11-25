import styles from './Logout.module.css';

export default function Logout(): JSX.Element {
  return (
    <button className={styles.logout_button}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.25 10L19.4875 11.7625L21.4625 13.75H11.25V16.25H21.4625L19.4875 18.225L21.25 20L26.25 15L21.25 10ZM6.25 6.25H15V3.75H6.25C4.875 3.75 3.75 4.875 3.75 6.25V23.75C3.75 25.125 4.875 26.25 6.25 26.25H15V23.75H6.25V6.25Z"
          fill="white"
        />
      </svg>
      <p className={styles.logout_text}>Logout</p>
    </button>
  );
}
