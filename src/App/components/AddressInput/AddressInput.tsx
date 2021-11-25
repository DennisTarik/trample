import styles from './AddressInput.module.css';

export default function AddressInput(): JSX.Element {
  return (
    <input
      className={styles.address_input}
      type="text"
      placeholder="Enter Address"
    />
  );
}
