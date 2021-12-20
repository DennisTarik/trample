import styles from './Cardpage.module.css';
import MapComponent from '../../components/MapComponent/MapComponent';

export default function Cardpage(): JSX.Element {
  return (
    <div className={styles.page}>
      <MapComponent />
    </div>
  );
}
