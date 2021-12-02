import styles from './Settings.module.css';
import Logout from './Logout/Logout';
import Reset from './Reset/Reset';

export default function Settings(): JSX.Element {
  return (
    <div className={styles.settings}>
      <Logout />
      <Reset />
    </div>
  );
}
