import Profile from '../../components/Menu/Profile/Profile';
import styles from './Menupage.module.css';

export default function Menupage(): JSX.Element {
  return (
    <div className={styles.pages}>
      <Profile />
    </div>
  );
}
