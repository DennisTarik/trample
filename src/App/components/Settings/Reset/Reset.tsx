import styles from './Reset.module.css';

export default function Reset(): JSX.Element {
  return (
    <button className={styles.reset_button}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 16.25C7.5 14.1875 8.3375 12.3125 9.7 10.95L7.925 9.175C6.125 10.9875 5 13.4875 5 16.25C5 21.35 8.8125 25.55 13.75 26.1625V23.6375C10.2125 23.0375 7.5 19.9625 7.5 16.25ZM25 16.25C25 10.725 20.525 6.25 15 6.25C14.925 6.25 14.85 6.2625 14.775 6.2625L16.1375 4.9L14.375 3.125L10 7.5L14.375 11.875L16.1375 10.1125L14.7875 8.7625C14.8625 8.7625 14.9375 8.75 15 8.75C19.1375 8.75 22.5 12.1125 22.5 16.25C22.5 19.9625 19.7875 23.0375 16.25 23.6375V26.1625C21.1875 25.55 25 21.35 25 16.25Z"
          fill="white"
        />
      </svg>
      <p className={styles.reset_text}>Reset History</p>
    </button>
  );
}
