import styles from './Cardpage.module.css';
import MapComponent from '../../components/MapComponent/MapComponent';
import AddressInput from '../../components/AddressInput/AddressInput';
import Taskbar from '../../components/Taskbar/Taskbar';

export default function Cardpage(): JSX.Element {
  return (
    <div className={styles.page}>
      <MapComponent />
      <div className={styles.location}>
        <AddressInput />
      </div>
      <Taskbar />
    </div>
  );
}
